"use client"
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "../../constants/data";
import { Link } from "react-router-dom";

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Separate state for mobile dropdowns
  const dropdownTimeoutRef = useRef(null);
  const currentPath = window.location.pathname;

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      // Use the global navigateTo function if available, otherwise fallback
      if ((window as any).navigateTo) {
        (window as any).navigateTo(href);
      } else {
        window.location.pathname = href;
      }
    } else if (href.startsWith('#')) {
      // Handle anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  const handleDesktopDropdownEnter = (itemLabel) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(itemLabel);
  };

  const handleDesktopDropdownLeave = () => {
    // Add a delay before closing the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay
  };

  const handleDropdownMenuEnter = () => {
    // Clear timeout when mouse enters dropdown menu
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleDropdownMenuLeave = () => {
    // Close dropdown when mouse leaves the menu
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Shorter delay when leaving the actual dropdown
  };

  const toggleMobileDropdown = (itemLabel) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemLabel ? null : itemLabel);
  };

  return (
    <>
      {/* Header */}
      <nav className="bg-white z-50 px-4 sm:px-8 lg:px-[50px] lg:pr-[60px] py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            width={48} 
            height={48} 
            className="sm:w-[70px] sm:h-[70px] lg:w-[70px] lg:h-[70px]" 
            src="/assets/logo.png" 
            alt="Sirtify Logo" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-open-sans text-[1rem] text-black font-normal">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = currentPath === item.href;
            const isDropdownOpen = openDropdown === item.label;
            
            return (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => handleDesktopDropdownEnter(item.label)}
                    onMouseLeave={handleDesktopDropdownLeave}
                  >
                    <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200"
                      />
                    </button>
                    {isDropdownOpen && item.dropdownItems && (
                      <div 
                        className="absolute top-full mt-1 bg-white shadow-xl rounded-xl py-2 w-40 border border-gray-100 z-50"
                        onMouseEnter={handleDropdownMenuEnter}
                        onMouseLeave={handleDropdownMenuLeave}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`hover:text-orange-500 transition-colors cursor-pointer ${
                      isActive ? "text-orange-500 relative font-bold" : "font-normal"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
                    )}
                  </button>
                )}
              </div>
            );
          })}
          
          {/* Desktop Auth Buttons */}
          <div className="flex items-center gap-3">
            <a className="px-5 py-2.5 text-orange-500 rounded-lg text-sm font-medium bg-white border border-orange-200 hover:bg-orange-50 cursor-pointer transition-colors font-inter"
            href="http://app.sirtifai.com/">
              Login

            </a>
            {/* <button className="p-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors font-inter w-[80px] h-[39px] hover:shadow-xl">
              Sign Up
            </button>

            </button> */}
          {
            /*
              <button className="p-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors font-inter w-[80px] h-[39px] hover:shadow-xl">
              Sign Up
            </button>
            */
          }

          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu - Full Width */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}>
        
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
          <img width={60} height={60} src="/assets/logo.png" alt="Sirtify Logo" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Navigation Items - Scrollable */}
        <div className="flex flex-col flex-1 overflow-y-auto py-4">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = currentPath === item.href;
            const isMobileDropdownOpen = mobileDropdownOpen === item.label;
            
            return (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      <span className="font-open-sans text-base">{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isMobileDropdownOpen && item.dropdownItems && (
                      <div className="bg-gray-50">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block pl-12 pr-6 py-3 text-sm hover:bg-orange-50 hover:text-orange-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full text-left px-6 py-4 hover:bg-orange-50 hover:text-orange-500 transition-colors font-open-sans text-base ${
                      isActive ? "text-orange-500 bg-orange-50 font-bold border-r-2 border-orange-500" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Auth Buttons */}
        <div className="p-6 border-t border-gray-200 bg-white flex-shrink-0">
          <div className="flex flex-col gap-3">
            <button className="w-full px-5 py-3 text-orange-500 border border-orange-500 rounded-lg text-base font-medium hover:bg-orange-50 transition-colors font-inter">
              Login
            </button>
            <button className="w-full px-5 py-3 bg-orange-500 text-white rounded-lg text-base font-medium hover:bg-orange-600 transition-colors font-inter hover:shadow-xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};