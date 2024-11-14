import Image from 'next/image';
import Link from 'next/link';

import logoImage from '@/assets/images/nama.jpg';
import styles from '@/styles/Navbar.module.scss';

const Navbar = () => (
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
            <button>Cart</button>
        </div>
    </nav>
);

export default Navbar;
