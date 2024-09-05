import React from "react";
import {Link} from 'react-router-dom';
import ProductCard from "./ProductCard";

const HomePage = ({products}) => {
    return (
        <div className="contianer mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Hello Farmer</h1>
            <div className="flex justify-center mb-6">
                <a href="/upload">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Upload Product</button>
                </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product , index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;