import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterestP } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10 px-5 md:px-10">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
                <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Danone México. Todos los derechos reservados.</p>

                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/danone.es/" target="_blank" rel="noreferrer" className="text-2xl"><FaFacebookF /></a>
                    <a href="https://twitter.com/danone_es" target="_blank" rel="noreferrer" className="text-2xl"><FaTwitter /></a>
                    <a href="https://www.youtube.com/user/danonecanal" target="_blank" rel="noreferrer" className="text-2xl"><FaYoutube /></a>
                    <a href="https://www.instagram.com/danoneyogur/" target="_blank" rel="noreferrer" className="text-2xl"><FaInstagram /></a>
                    <a href="https://www.pinterest.es/danonegroup/" target="_blank" rel="noreferrer" className="text-2xl"><FaPinterestP /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
