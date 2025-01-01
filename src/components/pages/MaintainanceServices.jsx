import React from 'react';
import Navbar from '../Navbar'; // Ensure the Navbar component is properly imported
import ProductDisplay from '../ProductDisplay'; // Ensure the ProductDisplay component is properly imported

import streetlights from '../../assets/streetlights.jpg';
import manPower from '../../assets/manpower.avif';
import vfd from '../../assets/vfd.jpg';
import Footer from '../footer';

const MaintenanceServices = () => {
    const products = [
        {
            image: streetlights, 
            title: 'Annual Maintenance Contracts for Electrical Lighting Systems', 
            description: 'Comprehensive maintenance solutions to ensure optimal lighting system performance.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: vfd, 
            title: 'Installation and Commissioning of VFDs', 
            description: 'Expert services for installation and commissioning of variable frequency drives (VFDs).', 
            buttonText: 'Inquire Now', 
        },
        {
            image: manPower, 
            title: 'Manpower Supply', 
            description: 'Provision of skilled, semi-skilled, and unskilled manpower for various projects.', 
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

export default MaintenanceServices;
