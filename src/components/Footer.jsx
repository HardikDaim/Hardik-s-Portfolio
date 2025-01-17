import React from "react";
import Skeleton from "react-loading-skeleton";

const Footer = ({ loader }) => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="text-center md:text-left mb-4 md:mb-0">
          {loader ? (
            <Skeleton width={150} height={30} className="mb-2" />
          ) : (
            <h2 className="text-xl font-bold text-black dark:text-white">
              Hardik Daim
            </h2>
          )}
          {loader ? (
            <Skeleton width={200} height={20} />
          ) : (
            <p className="text-xs text-black dark:text-white">
              © {new Date().getFullYear()} Hardik Daim. All rights reserved.
            </p>
          )}
        </div>

        <div className="text-xs text-center md:text-right">
          {loader ? (
            <div className="flex flex-col md:flex-row gap-0 justify-center">
              <Skeleton width={150} height={20} className="mb-2" />
              <Skeleton width={150} height={20} />
            </div>
          ) : (
            <>
              <a
                href="mailto:hardikdaim@gmail.com"
                className="block md:inline-block text-gray-600 dark:text-gray-400 dark:hover:text-white mb-0 md:mr-4"
              >
                hardikdaim@gmail.com
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
