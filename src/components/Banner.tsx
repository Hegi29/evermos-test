"use client";

import { useEffect, useState } from 'react';

import Image from 'next/image';

import bannerImage1 from '@/assets/images/banner-1.jpg';
import bannerImage2 from '@/assets/images/banner-2.jpg';
import bannerImage3 from '@/assets/images/banner-3.jpg';
import arrowImage from '@/assets/images/arrow.png';
import { DEFAULT_INDEX_BANNER } from '@/constants';
import styles from '@/styles/Banner.module.scss';

const imageSources = [bannerImage1, bannerImage2, bannerImage3];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(DEFAULT_INDEX_BANNER);

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    };

    const goToPrev = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + imageSources.length) % imageSources.length
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNext();
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={styles.banner}>
            <div className={styles.promo}>
                <Image
                    src={imageSources[currentImageIndex]}
                    alt="Banner"
                    width={1200}
                    height={500}
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                />
            </div>

            <div className={styles.controls}>
                <button onClick={goToPrev} className={styles.prevButton}>
                    <Image
                        src={arrowImage}
                        alt="Prev"
                        width={20}
                        height={20}
                        style={{ objectFit: 'cover', borderRadius: '20px', transform: 'scaleX(-1)' }}
                    />
                </button>
                <button onClick={goToNext} className={styles.nextButton}>
                    <Image
                        src={arrowImage}
                        alt="Next"
                        width={20}
                        height={20}
                        style={{ objectFit: 'cover', borderRadius: '20px' }}
                    />
                </button>
            </div>
        </section>
    );
};

export default Banner;
