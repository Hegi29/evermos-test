import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import ListProducts from '../components/ListProducts';
import { BASE_URL } from '../constants';
import { Product } from '../types';

// Server Side (this happens at the server level before rendering the page)
const HomePage = async () => {
  const response = await fetch(`${BASE_URL}/products`, { cache: 'no-store' });
  if (!response.ok) {
    return <p>Error fetching products</p>;
  }

  const products: Product[] = await response.json();

  return (
    <>
      <Banner />
      <CategoryList />
      <ListProducts products={products} title='List Products' />
    </>
  );
};

export default HomePage;
