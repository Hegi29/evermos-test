'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import cartImage from '@/assets/images/shopping-cart.png';
import styles from '@/styles/Navbar.module.scss';
import { selectTotalQuantity } from '@/store/slices/cartSlice';

const Navbar = () => {
    const totalQuantity = useSelector(selectTotalQuantity);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <span className={styles.grey1}>hegi</span>
                    <span className={styles.grey2}>tri</span>
                    <span className={styles.grey3}>saputra.</span>
                </Link>
            </div>
            <div className={styles.actions}>
                <Link href="/cart">
                    <Image
                        src={cartImage}
                        alt="Cart"
                        width={30}
                        height={30}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    {totalQuantity > 0 && <span className={styles.badge}>{totalQuantity}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
