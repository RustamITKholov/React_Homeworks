import ProductCard from './ProductCard';
import picture4 from '/img/picture_4.svg';
import picture3 from '/img/picture_3.svg';
import picture6 from '/img/picture_6.svg';

const relatedProducts = [
    {
        id: 4,
        image: picture4,
        title: "ELLERY X M'O CAPSULE",
        description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
        price: "$52.00",
    },
    {
        id: 3,
        image: picture3,
        title: "ELLERY X M'O CAPSULE",
        description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
        price: "$52.00",
    },
    {
        id: 6,
        image: picture6,
        title: "ELLERY X M'O CAPSULE",
        description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
        price: "$52.00",
    },
];

const RelatedProducts = () => {
    return (
        <section className="product__section center">
            {relatedProducts.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </section>
    );
};

export default RelatedProducts;
