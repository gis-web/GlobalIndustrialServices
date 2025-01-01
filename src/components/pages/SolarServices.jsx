import React from 'react';
import Navbar from '../Navbar'; 
import ProductDisplay from '../ProductDisplay'; 
import Footer from '../footer';

import solar1 from '../../assets/solar.jpg';
import solar2 from '../../assets/solar2.jpg';
import solar3 from '../../assets/solar3.jpg';
import solar4 from '../../assets/solar4.jpg';

const SolarServices = () => {
    const products = [
        {
            image: solar1, 
            title: 'Industrial and Commercial Solar Project Works', 
            description: 'Comprehensive solar project services including piling, MMS, IDT, and substation works.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: solar2, 
            title: 'IDT Work', 
            description: 'Integrated design and technology (IDT) solutions for solar projects.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: solar3, 
            title: 'MMS Work', 
            description: 'Module mounting structure (MMS) design and installation for solar systems.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: solar4, 
            title: 'Piling Work', 
            description: 'Precise piling work to ensure foundation stability for solar installations.', 
            buttonText: 'Inquire Now', 
        },
    ];

    return (
        <>
            <div className='bg-gray-200'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default SolarServices;
