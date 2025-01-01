import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import cable from '../../assets/cable.jpg';
import cabletray from '../../assets/cabletray.jpg';
import cablejk from '../../assets/cablejointkit.webp';
import cableg from '../../assets/cableg.jpg';

const CablesAccessories = () => {
    const products = [
        { image:cable, title: 'High-Quality Cables', description: 'Wide range of power and control cables for industrial applications.', buttonText: 'Inquire Now' },
        { image:cabletray, title: 'Cable Trays and Accessories', description: 'Durable cable trays, lugs, and clamps for secure installations.', buttonText: 'Inquire Now' },
        { image:cablejk, title: 'Cable Joint Kits', description: 'Reliable heat-shrinkable and resin-cast joint kits for various cable types.', buttonText: 'Inquire Now' },
        { image:cableg, title: 'Cable Glands', description: 'High-quality cable glands for ensuring secure terminations.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-blue-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CablesAccessories;
