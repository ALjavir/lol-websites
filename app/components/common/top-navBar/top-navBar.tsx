import React, { useState } from 'react';
import "./top-navBar-style.css"
import logoImg from "~/assets/image/logo/logo.png"

export default function TopNavBar() {
  const logInLink = "https://signup.na.leagueoflegends.com/en/?_gl=1*1jzcc9p*_gcl_au*MTQxNjExMzcwOS4xNzg0OTk0ODMz"
  const [activeTab, setActiveTab] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['HOME', 'CHAMPIONS', 'MAPS', 'SPELLS', 'RUNES', 'ITEMS'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header id="top-nav-bar" className="top-nav-bar">
      <img className='logo' src={logoImg} alt="Leauge Of Legends X Javir" />
      <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              setActiveTab(item);
              setIsMobileMenuOpen(false);
            }}
            className={`nav-link ${activeTab === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </nav>


      <div className="nav-actions">

        <a
          className="play-btn"
          href={logInLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          PLAY NOW
        </a>
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}