import React, { useState} from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const apiDomain = `https://13.51.12.49`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className="header">
            <div className="container mx-auto max-w-[1270px]">
                <div className="logo"><a href="https://wowtrips.eu">
                    <picture>
                        <img src={`${apiDomain}/wp-content/uploads/2023/07/default-e1689249642533.png`} alt="wowtrips.eu"></img>
                    </picture>
                    
                </a></div>
                <div className="p-4 bg-white">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block lg:hidden text-2xl border-transparent focus:border-transparent focus:ring-0 hover:bg-gray-200 hover:text-gray-500"
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
                <ul className={`header-links absolute right-10 lg:static lg:flex lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <li><Link to="/" className="block py-2 px-1 text-black">Main Page</Link></li>
                    <li><Link to="/cheap-flights" className="block py-2 px-1 text-black">Cheap Flights</Link></li>
                    <li><Link to="/travel-tips" className="block py-2 px-1 text-black">Travel Tips</Link></li>
                    <li><a href={`${apiDomain}/go/discovercars`} className="block py-2 px-1 text-black">Car Rent</a></li>
                    <li><Link to="/page/travel-resources" className="block py-2 px-1 text-black">Travel Resources</Link></li>
                    <li><Link to="/page/about-us" className="block py-2 px-1 text-black">About us</Link></li>
                </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;