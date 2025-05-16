const OrderSummary = ({ total, onCheckout }) => {
    return (
        <div className="cart-order">
            <p className="cart-order__text">
                SUB TOTAL <span className="cart-order__text cart-order__text_select">${total}</span>
            </p>
            <p className="cart-order__big-text">
                GRAND TOTAL <span className="cart-order__big-text cart-order__big-text_select">${total}</span>
            </p>
            <div className="cart-order__line">
                <svg width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M275 0H0V1H275V0Z" fill="#E2E2E2" />
                </svg>
            </div>
            <button className="cart-order__button" onClick={onCheckout}>
                PROCEED TO CHECKOUT
            </button>
        </div>
    );
};

export default OrderSummary;
