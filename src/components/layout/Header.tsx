"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleDropdown = (item: string) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  return (
    <header
    className={cn(
      'fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-100 ease-in-out transform',
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-md opacity-100' : 'bg-transparent py-6 opacity-95'
    )}
    
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="w-48 h-10 relative">
            <Image
              src="https://ext.same-assets.com/3568091972/155220083.png"
              alt="Verz Design Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {/* Dropdown Menu Items */}
          {[
            { name: "About Us", id: "about", links: [
              ["Values and Ethics", "/about-verz"],
              ["Our Culture", "/about-verz/our-culture"],
              ["Management Profile", "/about-verz/management-profile"],
              ["Our Team", "/about-verz/our-team"],
              ["Milestones & Awards", "/about-verz/milestones-awards"],
              ["Technology & Expertise", "/about-verz/technology-expertise"],
              ["Our Ambassadors", "/verz-ambassadors-singapore"]
            ]},
            { name: "Our Services", id: "services", links: [
              ["eCommerce Website Design", "/ecommerce-web-design"],
              ["Corporate Website Design", "/corporate-website-design"],
              ["UI/UX Design", "/ui-ux-design"],
              ["Copywriting Services", "/web-copywriting-services-singapore"],
              ["Shopify Plus Design & Development", "/shopify-plus-agency"]
            ]},
            { name: "Grants", id: "grants", links: [
              ["PSG E-Commerce Solution Grant", "/ecommerce-psg-grant-singapore"],
              ["Enterprise Development Grant (EDG)", "/edg-branding-marketing"],
              ["PSG Digital Marketing Solution Grant", "/psg-digital-marketing-grant"]
            ]},
            { name: "Our Clients", id: "clients", links: [
              ["Hall of Fame", "/our-clients"],
              ["Customer Success Stories", "/our-clients/customer-success-stories"],
              ["Testimonials", "/our-clients/clients-testimonials"]
            ]}
          ].map(menu => (
            <div className="relative group" key={menu.id}>
              <button
                className="text-verz-dark hover:text-verz-orange font-medium"
                onClick={() => toggleDropdown(menu.id)}
              >
                {menu.name}
              </button>
              <div className={cn(
                "absolute top-full left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all transform origin-top",
                dropdownOpen === menu.id ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
              )}>
                <div className="p-4 flex flex-col space-y-2">
                  {menu.links.map(([label, href]) => (
                    <Link key={label} href={href} className="text-sm hover:text-verz-orange">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <Link href="/our-work" className="text-verz-dark hover:text-verz-orange font-medium">
            Our Work
          </Link>

          <Link href="/blog" className="text-verz-dark hover:text-verz-orange font-medium">
            Blog
          </Link>

          <Link href="/contact-us" className="btn-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-verz-dark"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu - You can keep your existing logic here or animate it too */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform lg:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Your mobile nav content here... */}
        </div>
      </div>
    </header>
  );
};

export default Header;
