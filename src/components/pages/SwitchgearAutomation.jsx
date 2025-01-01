import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import mccb from '../../assets/mccb.webp';
import auto from '../../assets/auto.jpg';

const SwitchgearAutomation = () => {
    const products = [
        { image:mccb, title: 'Switchgear Solutions', description: 'Complete range of MCBs, RCCBs, MCCBs, and more.', buttonText: 'Inquire Now' },
        { image:auto, title: 'Industrial Automation', description: 'Advanced automation solutions for enhanced industrial performance.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-green-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default SwitchgearAutomation;
