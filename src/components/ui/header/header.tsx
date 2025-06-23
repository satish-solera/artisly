"use client";

import Link from "next/link";

import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (

        <header className="border-b">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        Artisly
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">

                        <Link href="/" className=" hover:text-pink-400">Home</Link>
                        <Link href="/artist" className="hover:text-pink-400">Artists</Link>
                        <Link href="/about" className="hover:text-pink-400">About</Link>




                        <Link href="/manager-dashboard" className="hover:text-pink-400  ">Dashboard</Link>
                       

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        Menu
                    </button>
                </div>

                {/* Mobile Navigation */}

                <div className="md:hidden pt-4 pb-2 space-y-2">
                    <Link href="/" className="block py-2 hover:text-pink-400">Home</Link>
                    <Link href="/artist" className="block py-2 hover:text-pink-400">Artists</Link>
                    <Link href="/article-page" className="block py-2 hover:text-pink-400">About</Link>

                    <Link href="/login" className="block text-sm text-gray-600 hover:text-indigo-400">Login</Link>
                    <Link href="/signup" className="block text-sm text-gray-600 hover:text-indigo-400">Signup</Link>

                </div>
            </nav>
        </header>
    )
}