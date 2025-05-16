import { useState } from 'react';

const ShippingForm = () => {
    const [formData, setFormData] = useState({
        country: '',
        state: '',
        postcode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Shipping quote requested for:\n' +
            `Country: ${formData.country}\n` +
            `State: ${formData.state}\n` +
            `Postcode: ${formData.postcode}`);
    };

    return (
        <div className="cart-adress">
            <h2 className="cart__heading">SHIPPING ADDRESS</h2>
            <form className="cart__form" onSubmit={handleSubmit}>
                <input
                    className="cart__input"
                    type="text"
                    name="country"
                    placeholder="Bangladesh"
                    value={formData.country}
                    onChange={handleChange}
                />
                <input
                    className="cart__input"
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                />
                <input
                    className="cart__input"
                    type="text"
                    name="postcode"
                    placeholder="Postcode / Zip"
                    value={formData.postcode}
                    onChange={handleChange}
                />
                <button type="submit" className="cart__button">GET A QUOTE</button>
            </form>
        </div>
    );
};

export default ShippingForm;
