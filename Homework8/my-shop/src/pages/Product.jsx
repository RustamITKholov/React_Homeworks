import PageHeader from '../components/PageHeader';
import ProductSlider from '../components/ProductSlider';
import ProductDetails from '../components/ProductDetails';
import RelatedProducts from '../components/RelatedProducts';
import Subscription from '../components/Subscription';

const Product = () => {
    return (
        <>
            <PageHeader
                title="NEW ARRIVALS"
                breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']}
            />

            <ProductSlider />

            <ProductDetails />

            <RelatedProducts />

            <Subscription />
        </>
    );
};

export default Product;