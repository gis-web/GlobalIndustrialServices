



import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import logo from '../assets/logo.png';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-transparent">
            {/* Navbar Header */}
            <header className="flex items-center justify-between py-4 px-6 md:px-12">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-16 lg:h-20 rounded-lg" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-10 items-center text-primary-background">
                    <ul className="flex gap-20">
                        <Link to="/about">
                            <li className="p-1">
                                <span className="hover:opacity-60">About Us</span>
                            </li>
                        </Link>
                        <li className="relative flex group p-1">
                            <span className="hover:opacity-60">Services</span>
                            <ChevronDown className="rotate-0 group-hover:rotate-180 transition-rotate duration-300" />
                            <div className="absolute bg-foreground text-primary-foreground top-full px-4 py-4 rounded-lg shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 w-60">
                                <ul className="flex flex-col gap-3">
                                    <Link to="/switchyard-services">
                                        <li>Switchyard</li>
                                    </Link>
                                    <Link to="/transmission-services">
                                        <li>Transmission</li>
                                    </Link>
                                    <Link to="/solar-services">
                                        <li>Solar Projects</li>
                                    </Link>
                                    <Link to="/maintainance-services">
                                        <li>Maintenance</li>
                                    </Link>
                                    <Link to="/panel-services">
                                        <li>Panels</li>
                                    </Link>
                                </ul>
                            </div>
                        </li>
                        <li className="relative flex group p-1">
                            <span className="hover:opacity-60">Products</span>
                            <ChevronDown className="rotate-0 group-hover:rotate-180 transition-rotate duration-300" />
                            <div className="absolute bg-foreground text-primary-foreground top-full right-0 px-4 py-4 rounded-lg shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 w-80">
                                <ul className="flex flex-col gap-3">
                                    <Link to="/cableAndAccessories">
                                        <li>Cables & Accessories</li>
                                    </Link>
                                    <Link to="/switchgearAndAutomation">
                                        <li>Switchgear & Automation</li>
                                    </Link>
                                    <Link to="/meteringAndMonitoring">
                                        <li>Metering & Monitoring</li>
                                    </Link>
                                    <Link to="/flameproofAndWeatherproof">
                                        <li>Flameproofing & Weatherproofing</li>
                                    </Link>
                                    <Link to="/substationAndTransmission">
                                        <li>Substation & Transmission</li>
                                    </Link>
                                    <Link to="/earthingAndTransformers">
                                        <li>Earthing & Transformers</li>
                                    </Link>
                                    <Link to="/streetLightingAndPoles">
                                        <li>Street Lighting & Poles</li>
                                    </Link>
                                    <Link to="/miscellaneous">
                                        <li>Miscellaneous</li>
                                    </Link>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <Button className="bg-primary">
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-primary-background"
                    >
                        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="bg-primary text-primary-foreground px-6 py-4 lg:hidden">
                    <ul className="flex flex-col gap-6">
                        <Link to="/about">
                            <li>
                                <span className="hover:opacity-60">About Us</span>
                            </li>
                        </Link>
                        <li>
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer hover:opacity-60">
                                    Services
                                    <ChevronDown className="group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <ul className="ml-4 mt-2 space-y-2">
                                    <Link to="/switchyard-services">
                                        <li>Switchyard</li>
                                    </Link>
                                    <Link to="/transmission-services">
                                        <li>Transmission</li>
                                    </Link>
                                    <Link to="/solar-services">
                                        <li>Solar Projects</li>
                                    </Link>
                                    <Link to="/maintainance-services">
                                        <li>Maintenance</li>
                                    </Link>
                                    <Link to="/panel-services">
                                        <li>Panels</li>
                                    </Link>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer hover:opacity-60">
                                    Products
                                    <ChevronDown className="group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <ul className="ml-4 mt-2 space-y-2">
                                    <Link to="/cableAndAccessories">
                                        <li>Cables & Accessories</li>
                                    </Link>
                                    <Link to="/switchgearAndAutomation">
                                        <li>Switchgear & Automation</li>
                                    </Link>
                                    <Link to="/meteringAndMonitoring">
                                        <li>Metering & Monitoring</li>
                                    </Link>
                                    <Link to="/flameproofAndWeatherproof">
                                        <li>Flameproofing & Weatherproofing</li>
                                    </Link>
                                    <Link to="/substationAndTransmission">
                                        <li>Substation & Transmission</li>
                                    </Link>
                                    <Link to="/earthingAndTransformers">
                                        <li>Earthing & Transformers</li>
                                    </Link>
                                    <Link to="/streetLightingAndPoles">
                                        <li>Street Lighting & Poles</li>
                                    </Link>
                                    <Link to="/miscellaneous">
                                        <li>Miscellaneous</li>
                                    </Link>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Button className="bg-primary">
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
