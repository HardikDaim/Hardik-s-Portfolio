import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotExist = () => {
    return (
        <>
        <Header />
        <div className='flex items-center justify-center min-h-screen'>
            <h2 className='border border-blue-500 p-2'>Page not exist now</h2>
        </div>
        <Footer />
        </>
    );
};

export default NotExist;