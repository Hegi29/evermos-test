"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Banner.module.scss';

// Import images directly
import bannerImage from '../assets/images/banner.jpg';
import logoImage from '../assets/images/logo.png';
import namaImage from '../assets/images/nama.jpg';

const imageSources = [bannerImage, logoImage, namaImage];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    };

    const goToPrev = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + imageSources.length) % imageSources.length
        );
    };

    return (
        <section className={styles.banner}>
            <div className={styles.promo}>
                <Image
                    src={imageSources[currentImageIndex]}
                    alt="Banner"
                    width={1200}
                    height={500}
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={styles.controls}>
                <button onClick={goToPrev} className={styles.prevButton}>{'<'}</button>
                <button onClick={goToNext} className={styles.nextButton}>{'>'}</button>
            </div>
        </section>
    );
};

export default Banner;
