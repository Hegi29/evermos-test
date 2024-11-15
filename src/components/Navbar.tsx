'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import logoImage from '@/assets/images/nama.jpg';
import styles from '@/styles/Navbar.module.scss';
import { selectTotalQuantity } from '@/store/slices/cartSlice';

const Navbar = () => {
    const totalQuantity = useSelector(selectTotalQuantity);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src={logoImage}
                        alt="Logo"
                        width={50}
                        height={40}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </Link>
            </div>
            <div className={styles.actions}>
                <Link href="/cart" className={styles.cartButton}>
                    Cart
                    {totalQuantity > 0 && <span className={styles.badge}>{totalQuantity}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
