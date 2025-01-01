import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import Footer from '../footer';

import cr from '../../assets/cr.jpg';
import t2 from '../../assets/t2.jpg';

const EarthingTransformers = () => {
    const products = [
        { image:cr, title: 'Earthing Solutions', description: 'Comprehensive range of chemical and solid rod earthing products.', buttonText: 'Inquire Now' },
        { image:t2, title: 'Transformers', description: 'Reliable power and distribution transformers and spares.', buttonText: 'Inquire Now' },
    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-orange-200 to-white min-h-screen'>
                <Navbar />
                <div className="min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default EarthingTransformers;
