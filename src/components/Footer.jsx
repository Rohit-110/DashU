import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 bottom-0 w-full bg-inherit">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <span className="md:text-lg text-sm font-bold md:mb-0 md:mr-4 ml-4">Admin Dashboard</span>
          <span className="md:text-lg text-sm mx-4">&copy; 2023 All rights reserved</span>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-end">
          <span className="md:text-lg text-sm mx-4">Privacy Policy</span>
          <span className="md:text-lg text-sm mx-4">Terms of Use</span>
          <span className="md:text-lg text-sm mx-4">Contact Us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
