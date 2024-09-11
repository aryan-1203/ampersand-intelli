import React from 'react';
import Footer from './footer';
import Header from './header';

const MainLayout = ({ children, isHome }) => {
  return (
    <div className="wrapper home-wrapper">
      <Header isHome={isHome} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
