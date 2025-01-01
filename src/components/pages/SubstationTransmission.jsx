import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import iso from '../../assets/iso.jpeg';
import tl from '../../assets/tl.jpg';

const SubstationTransmission = () => {
    const products = [
        { image:iso, title: 'Substation Equipment', description: 'High-quality substation equipment including isolators and LA.', buttonText: 'Inquire Now' },
        { image:tl, title: 'Transmission Line Materials', description: 'Durable tension hardware, conductors, and earth wires.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-purple-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default SubstationTransmission;
