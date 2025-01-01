import React from 'react';
import ProductDisplay from '../ProductDisplay';
import Navbar from '../Navbar';
import swyard1 from '../../assets/swyard1.jpg';
import swyard2 from '../../assets/swyard2.jpg';
import transformer from '../../assets/transformer.jpg';
import transformer2 from '../../assets/transformer2.jpg';
import worker from '../../assets/worker.jpg';
import Footer from '../footer';

const switchyardServices = () => {
    const products = [
        
        {
            image: swyard1, 
            title: 'Erection, Testing, and Commissioning of Switchyard Equipment', 
            description: 'Erection, testing, and commissioning of switchyard equipment from 11 kV to 132 kV.', 
            buttonText: 'Inquire Now', 
          },
          {
            image: swyard2, 
            title: 'Erection of 11 kV Two-Pole Structures and 132 kV Tower Networks', 
            description: 'Erection, testing, and commissioning of 11 kV two-pole structures to 132 kV tower networks on an LSTK basis.', 
            buttonText: 'Inquire Now', 
          },
          {
            image: transformer, 
            title: 'On-Site Transformer Overhauling', 
            description: 'Comprehensive on-site transformer overhauling services for transformers up to 50 MVA.', 
            buttonText: 'Inquire Now', 
          },
          {
            image: transformer2, 
            title: 'Transformer Oil Filtration and Testing', 
            description: 'Complete transformer oil filtration and testing to ensure optimal performance and reliability.', 
            buttonText: 'Inquire Now', 
          },
          {
            image: worker, 
            title: 'Specialized Services', 
            description: 'Expert services for Siemens, L&T, Schneider Electric, and ABB switchyard equipment.', 
            buttonText: 'Inquire Now', 
          },

    ];

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-red-200 to-white min-h-screen'>
                <Navbar />
                <div className=" min-h-screen">
                    <ProductDisplay products={products} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default switchyardServices;
