import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left & Right Links */}
                <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-2">
                        <Link to="privacy-policy" className="hover:underline">Privacy Policy</Link>
                        {/* Keeping commented as per router setup */}
                        {/* <Link to="/returns-exchanges" className="hover:underline">Returns and Exchanges</Link> */}
                        <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
                        {/* <Link to="/order-shipping" className="hover:underline">Order and Shipping</Link> */}
                        <Link to="/faqs" className="hover:underline">FAQs</Link>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block border-l border-gray-400 h-20 mx-4"></div>

                    {/* Right Column */}
                    <div className="flex flex-col space-y-2">
                        <Link to="/about-us" className="hover:underline">About Us</Link>
                        {/* <Link to="/store-locations" className="hover:underline">Store Locations</Link> */}
                        <Link to="/contact-us" className="hover:underline">Contact Us</Link>
                        <a href="#" className="hover:underline">Search</a> {/* No route for this yet */}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-6 md:mt-0 text-sm text-gray-600">
                    © Copyright 2025 RenTour. Kathmandu, Nepal
                </div>
            </div>
        </footer>
    );
};

export default Footer;