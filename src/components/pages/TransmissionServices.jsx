import React from 'react';
import Navbar from '../Navbar'; 
import ProductDisplay from '../ProductDisplay'; 
import powerCable from '../../assets/powercable.jpg';
import eletrician from '../../assets/electrician2.jpg';
import dieselGene from '../../assets/dieselGene.avif';
import Footer from '../footer';

const TransmissionServices = () => {
    const products = [
        {
            image: powerCable, 
            title: 'Power and Control Cable Laying and Termination', 
            description: 'Laying and termination of power and control cables up to 66 kV class.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: eletrician, 
            title: 'Electrical Project Consultancy and Liaison', 
            description: 'Consultancy and liaison services for electrical projects with state electricity boards.', 
            buttonText: 'Inquire Now', 
        },
        {
            image: dieselGene, 
            title: 'Diesel Generator Installation and Commissioning', 
            description: 'Installation and commissioning of diesel generators to ensure efficient power backup.', 
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

export default TransmissionServices;
