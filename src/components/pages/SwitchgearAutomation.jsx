import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import mccb from '../../assets/mccb.webp';
import auto from '../../assets/auto.jpg';
import vfd from '../../assets/vfd.jpeg';

const SwitchgearAutomation = () => {
    const products = [
        { image:vfd, title: 'High quality VFD Panels', description: 'Our VFD Panels offer efficient motor control, reducing energy consumption while extending equipment life. Ideal for various industrial applications, they provide smooth operation and built-in protection for reliable performance.', buttonText: 'Inquire Now' },
        { image:auto, title: 'Industrial Automation', description: 'Advanced automation solutions for enhanced industrial performance.', buttonText: 'Inquire Now' },
        { image:mccb, title: 'Switchgear Solutions', description: 'Complete range of MCBs, RCCBs, MCCBs, and more.', buttonText: 'Inquire Now' },
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
