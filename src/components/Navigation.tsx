import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "../index.css";
import { useTheme } from "../context/ThemeContext";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      // opening: store last focused element to restore later
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Accessibility: focus trap and Escape to close when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // lock body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus the close button (if present) after menu opens
    const focusTimer = setTimeout(() => {
      if (closeButtonRef.current) closeButtonRef.current.focus();
      else if (menuRef.current) menuRef.current.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        return;
      }

      if (e.key === "Tab") {
        // trap focus inside menu
        const menuNode = menuRef.current;
        if (!menuNode) return;
        const focusable = Array.from(
          menuNode.querySelectorAll<HTMLElement>(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled"));

        if (focusable.length === 0) {
          e.preventDefault();
          menuNode.focus();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      // restore body scroll
      document.body.style.overflow = prevOverflow || "";
      // restore focus to last focused element
      if (lastFocusedRef.current) {
        try {
          lastFocusedRef.current.focus();
        } catch (err) {
          /* ignore */
        }
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={isScrolled ? { y: 12 } : { y: 0 }}
        transition={{ type: 'tween', duration: 0.28 }}
        className={`fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? // When scrolled we inset the nav slightly from the edges so it appears "floating"
              theme === "light"
              ? "left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-white/85 backdrop-blur-sm shadow-lg border border-gray-200 rounded-2xl"
              : "left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-gray-900/95 backdrop-blur-sm shadow-lg border border-white-800 rounded-2xl"
            : "left-0 right-0 bg-transparent"
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#hero")}
            className='flex items-center space-x-2 cursor-pointer'>
            <div className='w-14 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#073f70] to-[#1f84d6]'>
              <span className='text-white font-bold text-base sm:text-lg'>
                OSW
              </span>
            </div>
          </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium transition-colors hover:scale-105 ${
                      isScrolled
                        ? theme === "light"
                          ? "text-secondary-700 hover:text-primary-600"
                          : "text-gray-300 hover:text-white"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Desktop Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? theme === "light"
                      ? "text-secondary-700 hover:bg-gray-100"
                      : "text-white hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] ${
                  isScrolled
                    ? theme === "light"
                      ? "text-secondary-700 hover:bg-gray-100"
                      : "text-white hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className={`p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] ${
                  isScrolled
                    ? theme === "light"
                      ? "text-secondary-700 hover:bg-gray-100"
                      : "text-white hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 md:hidden ${
                theme === "light"
                  ? "bg-white shadow-2xl"
                  : "bg-gray-900 shadow-2xl"
              }`}
              // Accessibility: menu container
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
              ref={menuRef}
              tabIndex={-1}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <div
                    className={`text-xl font-bold ${
                      theme === "light" ? "text-primary-600" : "text-white"
                    }`}
                  >
                    <h2 id="mobile-menu-title">Menu</h2>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={closeMobileMenu}
                    ref={closeButtonRef}
                    aria-label="Close menu"
                    className={`p-2 rounded-lg ${
                      theme === "light"
                        ? "text-gray-600 hover:bg-gray-100"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 py-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-6 py-4 text-lg font-medium transition-colors ${
                        theme === "light"
                          ? "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div
                  className={`p-4 border-t ${
                    theme === "light" ? "border-gray-200" : "border-gray-700"
                  }`}
                >
                  <div
                    className={`text-sm ${
                      theme === "light" ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Open Source World
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
