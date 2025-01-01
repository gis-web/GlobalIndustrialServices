import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import lp from '../../assets/lp.jpg';
import la from '../../assets/la.png';

const StreetLightingPoles = () => {
    const products = [
        { image:lp, title: 'Street Lighting Poles', description: 'High-quality steel tubular and decorative lamp poles.', buttonText: 'Inquire Now' },
        { image:la, title: 'Lighting Accessories', description: 'Durable accessories for secure and long-lasting installations.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-teal-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default StreetLightingPoles;
