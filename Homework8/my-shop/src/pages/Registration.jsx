import { useState } from 'react';
import Subscription from '../components/Subscription';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'radio' ? value : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccessMessage('Вы успешно зарегистрировались!');

        setFormData({
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
        });

        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
    };

    return (
        <>
            <section className="head center">
                <h2 className="head__heading">REGISTRATION</h2>
            </section>

            <section className="registration center">
                <form className="registration__form" onSubmit={handleSubmit}>
                    <label className="registration__label">Your Name
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className="registration__sex">
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                            required
                        /> Male
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                            required
                        /> Female
                    </label>

                    <label className="registration__label">Login details
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            minLength={8}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <p className="registration__passtext">
                        Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button className="registration__button" type="submit">
                            JOIN NOW
                        </button>

                        {successMessage && (
                            <p style={{ color: 'green', margin: 0 }}>{successMessage}</p>
                        )}
                    </div>
                </form>


                <div className="registration__info">
                    <h3 className="registration__heading">LOYALTY HAS ITS PERKS</h3>
                    <p className="registration__text">
                        Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
                    </p>
                    <ul className="registration__list">
                        <li>15% off welcome offer</li>
                        <li>Free shipping, returns and exchanges on all orders</li>
                        <li>$10 off a purchase on your birthday</li>
                        <li>Early access to products</li>
                        <li>Exclusive offers & rewards</li>
                    </ul>
                </div>
            </section>

            <Subscription />
        </>
    );
};

export default Registration;
