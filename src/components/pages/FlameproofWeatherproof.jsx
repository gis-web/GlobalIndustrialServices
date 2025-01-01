import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import fpl from '../../assets/flamep.jpeg';
import emwp from '../../assets/epwp.jpg';

const FlameproofWeatherproof = () => {
    const products = [
        { image:fpl, title: 'Flameproof Fixtures', description: 'Durable and safe flameproof LED fixtures for hazardous areas.', buttonText: 'Inquire Now' },
        { image:emwp, title: 'Weatherproof Solutions', description: 'Reliable weatherproof panels and luminaires.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-red-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default FlameproofWeatherproof;
