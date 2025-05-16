const FilterSort = ({ selectedSizes, setSelectedSizes }) => {
    const handleSizeChange = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    return (
        <section className="filter-sort center">
            <div className="filter-box">
                <details className="filter">
                    <summary className="filter__summary">
                        <span className="filter-mobile">FILTER</span>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M..." fill="black" />
                        </svg>
                    </summary>
                    <div className="filter__content">
                        {['CATEGORY', 'BRAND', 'DESIGN'].map((section, i) => (
                            <details className="filter__category" key={i} open={i === 0}>
                                <summary className="filter__category-summary">{section}</summary>
                                <div className="filter__box">
                                    {['Accessories', 'Bags', 'Denim', 'Hoodies & Sweatshirts', 'Jackets & Coats', 'Polos', 'Shirts', 'Shoes', 'Sweaters & Knits', 'T-Shirts', 'Tanks'].map((item, idx) => (
                                        <a key={idx} className="filter__link">{item}</a>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </details>
            </div>

            <div className="sort">
                {['TRENDING NOW', 'SIZE', 'PRICE'].map((label, i) => (
                    <details className="sort__details" key={i}>
                        <summary className="sort__summary">
                            {label}
                            <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M..." fill="#6F6E6E" />
                            </svg>
                        </summary>
                        {label === 'SIZE' && (
                            <div className="sort__content">
                                {['XS', 'S', 'L', 'M'].map((size, idx) => (
                                    <label className="sort__label" key={idx}>
                                        <input
                                            type="checkbox"
                                            checked={selectedSizes.includes(size)}
                                            onChange={() => handleSizeChange(size)}
                                        /> {size}
                                    </label>
                                ))}
                            </div>
                        )}
                        {label !== 'SIZE' && <div className="sort__content"></div>}
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FilterSort;
