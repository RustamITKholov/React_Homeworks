const CartItem = ({ item, onRemove, onQuantityChange }) => {
    const handleQuantityInput = (e) => {
        const value = Math.max(1, Number(e.target.value));
        onQuantityChange(item.id, value);
    };

    return (
        <div className="cart-elem">
            <img src={item.image} alt={item.title} />
            <div className="cart-elem__content">
                <a className="cart-elem__link">{item.title}</a>
                <div className="cart-elem__info">
                    <p className="cart-elem__text">Price: <span className="cart-elem__text cart-elem__text_select">${item.price}</span></p>
                    <p className="cart-elem__text">Color: {item.color}</p>
                    <p className="cart-elem__text">Size: {item.size}</p>
                    <p className="cart-elem__text cart-elem__text_quantity">
                        Quantity: &nbsp;
                        <input
                            className="cart-elem__quantity"
                            type="number"
                            value={item.quantity}
                            onChange={handleQuantityInput}
                            min="1"
                        />
                    </p>
                </div>
            </div>
            <button
                className="cart-elem__close"
                onClick={() => onRemove(item.id)}
            >
                &times;
            </button>
        </div >
    );
};

export default CartItem;
