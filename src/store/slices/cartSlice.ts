import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: number;
    title: string;
    image: string;
    price: string;
    category: string;
    description: string;
    quantity: number;
}

interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find((p) => p.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const selectTotalQuantity = (state: { cart: CartState }) => {
    return state.cart.products.reduce((total, product) => total + product.quantity, 0);
};

export const selectTotalPrice = (state: { cart: CartState }) => {
    return state.cart.products.reduce((total, product) => total + parseFloat(product.price) * product.quantity, 0).toFixed(2);
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
