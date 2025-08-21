import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/KGD logo.svg'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isInvestmentsOpen, setIsInvestmentsOpen] = useState(false); // nowy stan submenu mobilnego

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = ['KIM JESTEŚMY', 'INWESTYCJE', 'DLA INWESTORA', 'ZAKUP GRUNTÓW', 'KGD BUILDING', 'KONTAKT'];
    const investmentsSubmenu = [
        { label: 'Aktualne', to: '#inwestycje_aktualne' },
        { label: 'Zakończone', to: '#inwestycje_zakonczone' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1f1f1f]/60 h-[80px]' : 'h-[100px] md:h-[200px]'
                }`}
        >
            <div className="container max-w-[1596px] mx-auto h-full px-6 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center">
                    <HashLink to={"/#"}>
                        <img
                            src={logo}
                            alt="Logo"
                            className={`transition-all duration-300 ${isScrolled ? 'h-[35px] lg:h-[52px]' : 'h-[40px] lg:h-[62px]'}`}
                        />
                    </HashLink>
                </div>

                {/* Navigation Section - Desktop */}
                <nav className="hidden xl:flex items-center space-x-8 text-white text-[16px] relative">
                    {menuItems.map((item, index) => {
                        if (item === 'INWESTYCJE') {
                            return (
                                <div key={index} className="relative group cursor-pointer">
                                    <HashLink smooth to={`/#${item.split(" ").join("_").toLowerCase()}`} className="hover:text-white hover:underline transition-colors">
                                        {item}
                                    </HashLink>
                                    {/* Submenu */}
                                    <div className="absolute top-full left-0 mt-2 bg-[#000000]/60 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[150px] z-50">
                                        {investmentsSubmenu.map((subItem, subIndex) => (
                                            <HashLink
                                                key={subIndex}
                                                smooth
                                                to={subItem.to}
                                                className="block px-4 py-2 text-white hover:bg-[#fff]/30 rounded"
                                            >
                                                {subItem.label}
                                            </HashLink>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <HashLink smooth key={index} to={`#${item.split(" ").join("_").toLowerCase()}`} className="hover:text-white hover:underline transition-colors">
                                {item}
                            </HashLink>
                        )
                    })}
                </nav>

                <div className="hidden xl:block font-poppins text-white font-light">
                    <Link to={`tel:+48 607 186 161`}>+48 607 186 161</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full ${isScrolled ? 'bg-black/85 ' : 'bg-black/50 '
                    } transition-all duration-300 xl:hidden ${isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}
            >
                <ul className="flex flex-col xl:items-center gap-6 py-6 text-white text-lg px-6 xl:px-0">
                    {menuItems.map((item, index) => {
                        if (item === 'INWESTYCJE') {
                            return (
                                <li key={index} className="flex flex-col">
                                    <button
                                        onClick={() => setIsInvestmentsOpen(!isInvestmentsOpen)}
                                        className="flex justify-between items-center w-full hover:text-white transition-colors font-semibold"
                                    >
                                        {item}
                                        <svg
                                            className={`w-6 h-6 ml-2 transition-transform ${isInvestmentsOpen ? 'rotate-90' : 'rotate-0'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    {/* Submenu mobile */}
                                    {isInvestmentsOpen && (
                                        <ul className="mt-2 ml-4 flex flex-col gap-3">
                                            {investmentsSubmenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <HashLink
                                                        smooth
                                                        to={subItem.to}
                                                        className="hover:text-white transition-colors block"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setIsInvestmentsOpen(false);
                                                        }}
                                                    >
                                                        {subItem.label}
                                                    </HashLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )
                        }
                        return (
                            <li key={index}>
                                <HashLink smooth to={`#${item.split(" ").join("_").toLowerCase()}`} className="hover:text-white transition-colors flex justify-between flex-row" onClick={() => setIsMenuOpen(false)}>
                                    {item}
                                    <span>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />
                                        </svg>
                                    </span>
                                </HashLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
