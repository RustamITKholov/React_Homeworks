import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [
        { id: 1, name: 'Хлеб', description: 'Свежий хлеб из высококачественной пшеницы', price: 1, available: true },
        { id: 2, name: 'Молоко', description: 'Свежее молоко 1л', price: 3, available: true },
        { id: 3, name: 'Шоколад', description: 'Шоколад Milka 90гр', price: 2, available: true },
    ]
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { name, description, price, available } = action.payload;
            if (!name || !description || !price) return;
            state.products.push({
                id: Date.now(),
                name,
                description,
                price,
                available
            });
        },

        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },

        updateProduct: (state, action) => {
            state.products = state.products.map(product => product.id === action.payload.id
                ? { ...product, ...action.payload }
                : product
            )
        },
        changeAvailable: (state, action) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product) {
                product.available = !product.available;
            }
        }
    }
});


export const { addProduct, deleteProduct, updateProduct, changeAvailable } = productSlice.actions;

export default productSlice.reducer;
