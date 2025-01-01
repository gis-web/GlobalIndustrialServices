import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import meter from '../../assets/meter.jpg';
import pqa from '../../assets/quaanal.jpg';

const MeteringMonitoring = () => {
    const products = [
        { image:meter, title: 'Energy Meters', description: 'Accurate and reliable energy metering solutions.', buttonText: 'Inquire Now' },
        { image:pqa, title: 'Monitoring Instruments', description: 'Advanced signaling and monitoring instruments for industrial use.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-yellow-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MeteringMonitoring;
