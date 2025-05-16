const ClothesCategories = () => {
    return (
        <section className="clothes">
            <div className="clothes__content center">
                <div className="clothes__item">
                    <p className="clothes__text">
                        30% OFF
                        <span className="clothes__heading">FOR WOMEN</span>
                    </p>
                    <img src="/img/Group 36.svg" alt="FOR WOMEN" />
                </div>

                <div className="clothes__item">
                    <p className="clothes__text">
                        HOT DEAL
                        <span className="clothes__heading">FOR MEN</span>
                    </p>
                    <img src="/img/Group 37.svg" alt="FOR MEN" />
                </div>

                <div className="clothes__item">
                    <p className="clothes__text">
                        NEW ARRIVALS
                        <span className="clothes__heading">FOR KIDS</span>
                    </p>
                    <img src="/img/Group 38.svg" alt="FOR KIDS" />
                </div>

                <div className="clothes__item long">
                    <p className="clothes__text">
                        LUXIROUS & TRENDY
                        <span className="clothes__heading">ACCESORIES</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ClothesCategories;
