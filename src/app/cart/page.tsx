'use client';

import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { RootState } from '@/store';
import { removeFromCart, selectTotalQuantity, selectTotalPrice, clearCart } from '@/store/slices/cartSlice';
import styles from '@/styles/Cart.module.scss';

const CartPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const cart = useSelector((state: RootState) => state.cart.products);
    const totalQuantity = useSelector(selectTotalQuantity);
    const totalPrice = useSelector(selectTotalPrice);

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
        dispatch(clearCart());
        router.push('/');
    };

    return (
        <div className={`${styles.cartPage} ${cart.length === 0 ? styles.emptyCart : ''}`}>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className={styles.cartList}>
                        <li className={styles.cartHeader}>
                            <span>Product</span>
                            <span>Name</span>
                            <span>Price</span>
                            <span>Action</span>
                        </li>
                        {cart.map((product) => (
                            <li key={product.id} className={styles.cartItem}>
                                <div className={styles.productImageContainer}>
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
                                </div>
                                <div className={styles.productInfo}>
                                    <h4>{product.title}</h4>
                                </div>
                                <div className={styles.productPrice}>${product.price}</div>
                                <button onClick={() => dispatch(removeFromCart(product.id))} className={styles.removeButton}>
                                    🗑
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.cartSummary}>
                        <p>Total Quantity: {totalQuantity}</p>
                        <p>Total Price: ${totalPrice}</p>
                    </div>
                    <div className={styles.cartButtons}>
                        <button onClick={handleCheckout} className={styles.checkoutButton}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
