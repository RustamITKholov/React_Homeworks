import ProductList from './ProductList';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
    return (
        <section className="prices">
            <div className="prices__heading">
                <h3 className="prices__title">Featured Items</h3>
                <p className="prices__text">
                    Shop for items based on what we featured in this week
                </p>
            </div>
            <div className="prices__content center">
                <ProductList />
            </div>
            <div className="prices__button">
                <Link to="/catalog">
                    <button className="prices__button_style">Browse All Product</button>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedItems;
