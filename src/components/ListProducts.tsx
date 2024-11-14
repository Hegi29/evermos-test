import ProductCard from './ProductCard';
import styles from '@/styles/ListProducts.module.scss';
import { ListProductsProps } from '@/types';

const ListProducts = ({ products, title }: ListProductsProps) => (
    <section className={styles.featuredProducts}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.productList}>
            {products?.length === 0 ? (
                <p>No products available</p>
            ) : (
                products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    </section>
);

export default ListProducts;
