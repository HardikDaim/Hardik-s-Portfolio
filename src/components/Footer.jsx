import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Footer = ({ loader }) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          {loader ? (
            <Skeleton width={150} height={30} className="mb-2" />
          ) : (
            <h2 className="text-xl font-bold">Hardik Daim</h2>
          )}
          {loader ? (
            <Skeleton width={200} height={20} />
          ) : (
            <p className="text-sm">© {new Date().getFullYear()} Hardik Daim. All rights reserved.</p>
          )}
        </div>
        
        <div className="mt-4 md:mt-0">
          {loader ? (
            <div className='flex gap-4 '>
              <Skeleton width={150} height={20} className="mb-2" />
              <Skeleton width={150} height={20} />
            </div>
          ) : (
            <>
              <a href="mailto:hardikdaim@gmail.com" className="text-gray-400 hover:text-white mx-2">hardikdaim@gmail.com</a>
              <a href="tel:+91 95182-13371" className="text-gray-400 hover:text-white mx-2">+91 95182-13371</a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
