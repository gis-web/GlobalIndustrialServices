import React from 'react';
import Navbar from '../Navbar';
import ProductDisplay from '../ProductDisplay'; 

import electricpanel from '../../assets/electricpanel.jpg';
import electricpanel2 from '../../assets/electricpanel2.png';
import ems from '../../assets/ems.jpg';
import Footer from '../footer';

const PanelsServices = () => {
    const products = [
        {
            image: electricpanel, 
            title: 'Electrical Panel Solutions', 
            description: 'Design, supply, and inspection of PCC, MCC, APFC, C/O, feeder pillar, automation, and metering panels.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: electricpanel2, 
            title: 'Site-Specific Panel Supply', 
            description: 'Customized supply of PDB, MLDB, ELDB, and PDB as per site requirements.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: ems, 
            title: 'EMS System Supply and Installation', 
            description: ' Design, Supply, Installation, testing and commissioning work of EMS system.', 
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

export default PanelsServices;
