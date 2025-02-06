import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="font-sans min-h-screen w-full bg-gradient-to-br from-white to-green-50 text-gray-800 flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 