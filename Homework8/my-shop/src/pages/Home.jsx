import ClothesCategories from '../components/ClothesCategories';
import FeaturedItems from '../components/FeaturedItems';
import Offer from '../components/Offer';
import Subscription from '../components/Subscription';
import TopSection from '../components/TopSection';

function Home() {
    return (
        <>
            <div className="top">
                <TopSection />
            </div>
            <ClothesCategories />
            <FeaturedItems />
            <Offer />
            <Subscription />
        </>
    );
}

export default Home;