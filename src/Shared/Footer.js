import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className=" text-accent p-16 px-28" style={{backgroundImage:`url(${footer})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
            <div className='footer '>
                <div>
                    <span className="footer-title">Services</span> 
                    <Link to="/"className="link link-hover">Branding</Link>
                    <Link to="/"className="link link-hover">Design</Link>
                    <Link to="/"className="link link-hover">Marketing</Link>
                    <Link to="/"className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="footer-title">ORAL HEALTH</span> 
                    <Link to="/"className="link link-hover">About us</Link>
                    <Link to="/"className="link link-hover">Contact</Link>
                    <Link to="/"className="link link-hover">Jobs</Link>
                    <Link to="/"className="link link-hover">Press kit</Link>
                </div> 
                <div className='text-right'>
                    <span className="footer-title">OUR ADDRESS</span> 
                    <Link to="/"className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;