import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OurTeam from '../OurTeam/OurTeam';
import PopularBrand from '../PopularBrand/PopularBrand';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventory/>
            <PopularBrand/>
            <OurTeam/>
        </div>
    );
};

export default Home;