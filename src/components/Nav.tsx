import React from "react";
import cart from "../assets/cart.svg";

export function Nav(){
    return (
        <nav className="flex  justify-between bg-gray-800 p-4 text-white sticky top-0">
            <h1 className="text-2xl">Shop</h1>
            <ul className="flex space-x-8 align-middle">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/store" className="hover:text-gray-400">Store</a></li>
                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                <button className="w-16 h-10 bg-white rounded-lg justify-center items-center relative">
                <img className="w-8 h-8 bg-white mx-auto  " src={cart} alt="" />
                <span className="absolute top-0 right-0 bg-red-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">0</span>
           </button>
            </ul>
           
        </nav>
    )
}