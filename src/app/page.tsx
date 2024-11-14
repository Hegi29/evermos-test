'use client';

import { useState, useEffect } from 'react';

import Banner from '@/components/Banner';
import CategoryList from '@/components/CategoryList';
import ListProducts from '@/components/ListProducts';
import { BASE_URL } from '@/constants';
import { Product } from '@/types';
import styles from '@/styles/HomePage.module.scss';

const fetchProducts = async (category?: string): Promise<Product[]> => {
  const url = category
    ? `${BASE_URL}/products/category/${category}`
    : `${BASE_URL}/products`;
  const response = await fetch(url, { cache: 'no-store' });
  return response.ok ? response.json() : [];
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCategoryChange = async (category: string) => {
    setLoading(true);
    const fetchedProducts = await fetchProducts(category);
    setProducts(fetchedProducts);
    setLoading(false);
  };

  useEffect(() => {
    handleCategoryChange('');
  }, []);

  return (
    <>
      <Banner />
      <CategoryList onCategoryChange={handleCategoryChange} />
      {loading ? (
        <div className={styles.loadingContainer}>
          <p>Loading Products...</p>
        </div>
      ) : (
        <ListProducts products={products} title="List Products" />
      )}
    </>
  );
};

export default HomePage;
