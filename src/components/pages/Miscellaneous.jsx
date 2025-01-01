import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import bts from '../../assets/bts.jpg';
import pfc from '../../assets/pfc.jpg';

const Miscellaneous = () => {
    const products = [
        { image:bts, title: 'Busbar Trunking Systems', description: 'Efficient power distribution with reliable busbar systems.', buttonText: 'Inquire Now' },
        { image:pfc, title: 'Power Factor Correction Devices', description: 'Advanced solutions to optimize energy efficiency.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-gray-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Miscellaneous;
