import { productList } from '../data/products';
import ProductCard from './ProductCard';

const ProductList = () => {
    return (
        <>
            {productList.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </>
    );
};

export default ProductList;