import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import styles from '@/styles/ListProducts.module.scss';
import { addToCart } from '@/store/slices/cartSlice';
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
                category: product.category,
                image: product.image,
                description: product.description
            })
        );
    };

    return (
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
                <button
                    onClick={handleAddToCart}
                    className={styles.addToCartButton}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
