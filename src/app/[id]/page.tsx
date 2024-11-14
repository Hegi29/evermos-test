"use client";

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { BASE_URL } from '@/constants';
import ListProducts from '@/components/ListProducts';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '@/styles/ProductDetail.module.scss';
import { Params, Product } from '@/types';

const ProductDetail = () => {
    const { id }: Params = useParams();

    const [product, setProduct] = useState<Product | null>(null);
    const [listProduct, setListProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getDetailProduct = async (id: string) => {
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`);
            if (!response.ok) {
                throw new Error('Product not found');
            }

            const data = await response.json();
            setProduct(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    const getSameCategoryProduct = async (category: string) => {
        try {
            const response = await fetch(`${BASE_URL}/products/category/${category}`);
            if (!response.ok) {
                throw new Error('Product not found');
            }

            const data = await response.json();
            setListProduct(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            getDetailProduct(id ? id.toString() : '');
        }
    }, [id]);

    useEffect(() => {
        if (product) {
            getSameCategoryProduct(product?.category ?? '');
        }
    }, [product]);

    if (loading) {
        return (
            <div className={styles.loadingWrapper}>
                <p>Loading The Product Detail...</p>
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: product.title }
    ];

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            <section className={styles.productDetail}>
                <div className={styles.productCard}>
                    <div className={styles.productImageContainer}>
                        <Image
                            src={product.image}
                            alt={product.title}
                            className={styles.productImage}
                            width={120}
                            height={120}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            priority
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <div className={styles.priceWrapper}>
                            <p className={styles.productPrice}>${product.price}</p>
                            <span className={styles.freeShipping}>Free Shipping</span>
                        </div>
                        <p className={styles.productDescription}>{product.description}</p>
                        <button className={styles.productButton}>Add to Cart</button>
                    </div>
                </div>
            </section>
            <ListProducts products={listProduct} title="May You Like" />
        </>
    );
};

export default ProductDetail;
