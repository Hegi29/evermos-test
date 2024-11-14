import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/ListProducts.module.scss';
import { Product } from '../types';

const ProductCard = ({ product }: { product: Product }) => (
    <div key={product.id} className={styles.productCard}>
        <Image
            src={product.image}
            alt={product.title}
            className={styles.productImage}
            width={120}
            height={120}
            style={{
                objectFit: 'contain',
                objectPosition: 'center',
            }}
            priority
        />
        <div className={styles.productInfo}>
            <span className={styles.freeShipping}>Free Shipping</span>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productPrice}>${product.price}</p>
            <Link href={`/${product.id}`} className={styles.productButton}>
                Product Details
            </Link>

        </div>
    </div>
)

export default ProductCard;
