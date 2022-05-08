import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Form from './pages/Contact';
import Resume from './pages/Resume'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: This is the nav handler for which page user is on
  const renderPage = () => {
    if (currentPage === 'Home') {
      return<><Home /></> ;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Form />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO:Finds current page use is on and changes pages. */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: render page is called to identify the page change. */}
      {renderPage()}
    </div>
  );
}
