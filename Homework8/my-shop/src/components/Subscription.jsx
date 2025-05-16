const Subscription = () => {
    return (
        <section className="info center">
            <div className="contact">
                <img
                    src="/img/Intersect.svg"
                    alt="customer"
                    className="contact__photo"
                />
                <p className="contact__text">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
                    purus condimentum“
                </p>
            </div>

            <div className="email">
                <p className="email__text">
                    <span className="email__text_select">SUBSCRIBE</span> <br />
                    FOR OUR NEWSLETTER AND PROMOTION
                </p>
                <form className="email__form">
                    <input type="text" name="email" placeholder="Enter Your Email" />
                    <button className="email__button" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Subscription;
