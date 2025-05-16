import ShippingForm from './ShippingForm';
import OrderSummary from './OrderSummary';

const CartSidebar = ({ total, onCheckout }) => {
    return (
        <div className="cart-order__box">
            <ShippingForm />
            <OrderSummary total={total} onCheckout={onCheckout} />
        </div>
    );
};

export default CartSidebar;
