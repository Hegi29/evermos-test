"use client"

import { useState } from 'react';

import Image from 'next/image';

import styles from '../styles/Banner.module.scss';

const imageSources = [
    require('../assets/images/banner.jpg'),
    require('../assets/images/logo.png'),
    require('../assets/images/nama.jpg')
];

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
