import React from 'react';
import { Link } from 'react-router-dom';

const ProductDisplay = ({ products }) => {
    return (
        <div className="container mx-auto py-10 px-4 grid gap-8">
            {products.map((product, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-50 rounded-lg shadow-md ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-[80%] h-auto object-cover rounded-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            {product.title}
                        </h2>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <Link to='/contact'>
                        <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                            {product.buttonText}
                        </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDisplay;


