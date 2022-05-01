import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='text-center my-5 fs-5 fw-bolder ' >copy right @{year}</p>
        </footer>
    );
};

export default Footer;