import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartSidebar from '../components/CartSidebar';
import Offer from '../components/Offer';
import Subscription from '../components/Subscription';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, setCartItems } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [emptyCartMessage, setEmptyCartMessage] = useState('');

    // Таймер скрытия сообщений
    useEffect(() => {
        let timer;
        if (emptyCartMessage || orderPlaced) {
            timer = setTimeout(() => {
                setEmptyCartMessage('');
                setOrderPlaced(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [emptyCartMessage, orderPlaced]);

    const handleRemoveItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            setEmptyCartMessage('В корзине нет товаров');
            return;
        }
        setEmptyCartMessage('');
        setCartItems([]);
        setOrderPlaced(true);
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <section className="head">
                <h2 className="head__heading center">SHOPPING CART</h2>
            </section>

            <section className="cart center">
                <div className="cart__content">
                    {orderPlaced && <p style={{ color: 'green', marginBottom: '1em' }}>Спасибо! Ваш заказ оформлен.</p>}

                    {emptyCartMessage && <p style={{ color: 'red', marginBottom: '1em' }}>{emptyCartMessage}</p>}

                    {!orderPlaced && cartItems.length === 0 && !emptyCartMessage && (
                        <p className="cart__empty-message">Корзина пуста.</p>
                    )}

                    {!orderPlaced && cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemoveItem}
                            onQuantityChange={handleQuantityChange}
                        />
                    ))}

                    {!orderPlaced && (
                        <div className="cart__buttons">
                            {cartItems.length > 0 && (
                                <button
                                    className="cart__button cart__button_down"
                                    onClick={() => setCartItems([])}
                                >
                                    CLEAR SHOPPING CART
                                </button>
                            )}
                            <button
                                className="cart__button cart__button_down"
                                onClick={() => navigate('/catalog')}
                            >
                                CONTINUE SHOPPING
                            </button>
                        </div>
                    )}
                </div>

                {!orderPlaced && <CartSidebar total={total} onCheckout={handleCheckout} />}
            </section>

            <Offer />
            <Subscription />
        </>
    );
};

export default Cart;
