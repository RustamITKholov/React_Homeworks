const ProductDetails = () => {
    return (
        <section className="content__box center">
            <div className="content">
                <h3 className="content__title">WOMEN COLLECTION</h3>

                <div className="content__line">
                    <svg width="63" height="4" viewBox="0 0 63 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63 0.786865H0V3.81225H63V0.786865Z" fill="#EF5B70" />
                    </svg>
                </div>

                <h1 className="content__heading">MOSCHINO CHEAP AND CHIC</h1>
                <p className="content__text">
                    Compellingly actualize fully researched processes before proactive outsourcing.
                    Progressively syndicate collaborative architectures before cutting-edge services.
                    Completely visualize parallel core competencies rather than exceptional portals.
                </p>
                <p className="content__price">$561</p>

                <div className="content__line-big">
                    <svg width="642" height="1" viewBox="0 0 642 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M642 -0.00512695H0V1.00333H642V-0.00512695Z" fill="#5e5e5e" />
                        <path d="M0.5 0.498291H641.5H0.5Z" stroke="#EAEAEA" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="sort-product">
                    {['CHOOSE COLOR', 'CHOOSE SIZE', 'QUANTITY'].map((label, index) => (
                        <details className="sort-product__details" key={index}>
                            <summary className="sort-product__summary">
                                {label}
                                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.002 5.648C4.835 5.649 4.673 5.59 4.545 5.483L0.258 1.88C0.112 1.758 0.02 1.582 0.003 1.392C-0.014 1.201 0.044 1.011 0.165 0.864C0.287 0.717 0.461 0.625 0.65 0.607C0.839 0.589 1.027 0.648 1.173 0.771L5.002 3.999L8.832 0.886C8.905 0.826 8.989 0.781 9.079 0.754C9.169 0.727 9.264 0.719 9.358 0.729C9.451 0.739 9.542 0.767 9.625 0.813C9.707 0.858 9.78 0.92 9.839 0.994C9.904 1.068 9.954 1.155 9.985 1.249C10.015 1.344 10.026 1.443 10.017 1.542C10.007 1.641 9.978 1.736 9.93 1.823C9.882 1.91 9.817 1.986 9.739 2.046L5.452 5.526C5.32 5.616 5.162 5.66 5.002 5.648Z" fill="#6F6E6E" />
                                </svg>
                            </summary>
                            <div className="sort-product__content">
                                {label === 'CHOOSE COLOR' && ['Blue', 'Black', 'Pink', 'Green', 'Red'].map((color, i) => (
                                    <label className="sort-product__label" key={i}>
                                        <input type="checkbox" /> {color}
                                    </label>
                                ))}
                                {label === 'CHOOSE SIZE' && ['XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                                    <label className="sort-product__label" key={i}>
                                        <input type="checkbox" /> {size}
                                    </label>
                                ))}
                                {label === 'QUANTITY' && ['1', '2', '3', '4', '5'].map((qty, i) => (
                                    <label className="sort-product__label" key={i}>
                                        <input type="checkbox" /> {qty}
                                    </label>
                                ))}
                            </div>
                        </details>
                    ))}
                </div>

                <div className="content__button">Add to Cart</div>
            </div>
        </section>
    );
};

export default ProductDetails;
