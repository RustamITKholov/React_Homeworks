import { useContext } from 'react';
import CartIcon from './CartIcon';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ image, title, description, price, id }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (e) => {
        e.preventDefault();
        const numericPrice = parseFloat(price.replace('$', ''));
        addToCart({ id, image, title, price: numericPrice, quantity: 1 });
    };

    return (
        <div className="product">
            <img className="product__img" src={image} alt={title} />
            <div className="product__info">
                <a href="#" className="product__title">{title}</a>
                <p className="product__text">{description}</p>
                <p className="product__price">{price}</p>
            </div>
            <a href="#" className="product__add" onClick={handleAddToCart}>
                <CartIcon />
                Add to Cart
            </a>
        </div>
    );
};

export default ProductCard;
