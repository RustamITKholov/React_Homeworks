import sliderImage from '/img/Slider_photo.svg';

const ProductSlider = () => {
    return (
        <section className="slider center">
            <a href="#" className="slider__arrow back">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z" fill="black" />
                </svg>
            </a>

            <img src={sliderImage} alt="slider" className="slider__photo" />

            <a href="#" className="slider__arrow next">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z" fill="black" />
                </svg>
            </a>
        </section>
    );
};

export default ProductSlider;
