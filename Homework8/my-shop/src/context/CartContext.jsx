import { createContext, useContext, useState } from 'react';
import picture3 from '/img/picture_3.svg';
import picture7 from '/img/picture_7.svg';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 3,
            image: picture3,
            title: 'MANGO PEOPLE T-SHIRT',
            price: 300,
            color: 'Red',
            size: 'XL',
            quantity: 2,
        },
        {
            id: 7,
            image: picture7,
            title: 'MANGO PEOPLE T-SHIRT',
            price: 300,
            color: 'Red',
            size: 'XL',
            quantity: 1,
        },
    ]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    const totalCount = context.cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return { ...context, totalCount };
};
