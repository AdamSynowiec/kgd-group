import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const NavBar = ({ logo, menuData }) => {


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // --- REKURENCYJNE MENU ---
    const renderMenu = (items, isMobile = false) => {
        return items.map((item, index) => {
            const [isOpen, setIsOpen] = useState(false);
            const hasChildren = item.children && item.children.length > 0;

            return (
                <li key={index} className="relative group">
                    <HashLink
                        smooth
                        to={item.to}
                        className="hover:text-white hover:underline flex items-center justify-between p-2"
                        onClick={() => {
                            if (isMobile && hasChildren) {
                                setIsOpen(!isOpen);
                            } else if (isMobile) {
                                setIsMenuOpen(false);
                            }
                        }}
                    >
                        {item.label}

                    </HashLink>

                    {hasChildren && (
                        <ul
                            className={`${isMobile
                                ? isOpen
                                    ? 'block ml-4'
                                    : 'hidden'
                                : 'absolute top-full left-0 bg-[#000]/60 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[150px]'
                                }`}
                        >
                            {renderMenu(item.children, isMobile)}
                        </ul>
                    )}
                </li>
            );
        });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1f1f1f]/60 h-[80px]' : 'h-[100px] md:h-[200px]'
                }`}
        >
            <div className="container max-w-[1596px] mx-auto h-full px-6 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center">
                    <HashLink to={"#"}>
                        <img
                            src={logo}
                            alt="Logo"
                            className={`transition-all duration-300 ${isScrolled ? 'h-[35px] lg:h-[52px]' : 'h-[40px] lg:h-[52px]'
                                }`}
                        />
                    </HashLink>
                </div>

                {/* Navigation Section - Desktop */}
                <nav className="hidden xl:flex items-center space-x-8 text-white text-[16px] relative">
                    <ul className="flex space-x-8">{renderMenu(menuData)}</ul>
                </nav>

                <div className="hidden xl:block font-poppins text-white font-light">
                    <Link to={`tel:+48 518 451 555`}>+48 518 451 555</Link>
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
                    } transition-all duration-300 xl:hidden ${isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 pointer-events-none'
                    }`}
            >
                <ul className="flex flex-col gap-6 py-6 text-white text-lg px-6">
                    {renderMenu(menuData, true)}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
