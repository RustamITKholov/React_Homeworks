import { catalogProducts } from '../data/catalogProducts';
import ProductCard from './ProductCard';

const CatalogProductList = ({ selectedSizes }) => {
    const filtered = selectedSizes.length
        ? catalogProducts.filter(product => selectedSizes.includes(product.size))
        : catalogProducts;

    return (
        <section className="product__box center">
            {filtered.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}

            {selectedSizes.length === 0 && (
                <div className="product__slider">
                    <img src="/img/number_slider.svg" alt="number slider" />
                </div>
            )}
        </section>
    );
};

export default CatalogProductList;
