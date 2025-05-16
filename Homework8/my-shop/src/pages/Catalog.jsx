import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FilterSort from '../components/FilterSort';
import CatalogProductList from '../components/CatalogProductList';
import Offer from '../components/Offer';
import Subscription from '../components/Subscription';

const Catalog = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    return (
        <>
            <PageHeader
                title="NEW ARRIVALS"
                breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']}
            />

            <FilterSort
                selectedSizes={selectedSizes}
                setSelectedSizes={setSelectedSizes}
            />

            <CatalogProductList selectedSizes={selectedSizes} />

            <Offer />
            <Subscription />
        </>
    );
};

export default Catalog;
