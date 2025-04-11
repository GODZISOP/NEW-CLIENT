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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (item: string) => {
    if (dropdownOpen === item) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(item);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
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
          <div className="relative group">
            <button
              className="text-verz-dark hover:text-verz-orange font-medium"
              onClick={() => toggleDropdown('about')}
            >
              About Us
            </button>
            <div className={cn(
              "absolute top-full left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all transform origin-top",
              dropdownOpen === 'about' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
            )}>
              <div className="p-4 flex flex-col space-y-2">
                <Link href="/about-verz" className="text-sm hover:text-verz-orange">Values and Ethics</Link>
                <Link href="/about-verz/our-culture" className="text-sm hover:text-verz-orange">Our Culture</Link>
                <Link href="/about-verz/management-profile" className="text-sm hover:text-verz-orange">Management Profile</Link>
                <Link href="/about-verz/our-team" className="text-sm hover:text-verz-orange">Our Team</Link>
                <Link href="/about-verz/milestones-awards" className="text-sm hover:text-verz-orange">Milestones & Awards</Link>
                <Link href="/about-verz/technology-expertise" className="text-sm hover:text-verz-orange">Technology & Expertise</Link>
                <Link href="/verz-ambassadors-singapore" className="text-sm hover:text-verz-orange">Our Ambassadors</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              className="text-verz-dark hover:text-verz-orange font-medium"
              onClick={() => toggleDropdown('services')}
            >
              Our Services
            </button>
            <div className={cn(
              "absolute top-full left-0 w-80 bg-white shadow-lg rounded-md overflow-hidden transition-all transform origin-top",
              dropdownOpen === 'services' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
            )}>
              <div className="p-4 flex flex-col space-y-4">
                <div>
                  <h4 className="text-sm font-bold mb-2">WEBSITE DESIGN & DEVELOPMENT</h4>
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link href="/ecommerce-web-design" className="text-sm hover:text-verz-orange">eCommerce Website Design</Link>
                    <Link href="/corporate-website-design" className="text-sm hover:text-verz-orange">Corporate Website Design</Link>
                    <Link href="/ui-ux-design" className="text-sm hover:text-verz-orange">UI/UX Design</Link>
                    <Link href="/web-copywriting-services-singapore" className="text-sm hover:text-verz-orange">Copywriting Services</Link>
                    <Link href="/shopify-plus-agency" className="text-sm hover:text-verz-orange">Shopify Plus Design & Development</Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-2">DIGITAL MARKETING</h4>
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link href="/digital-marketing" className="text-sm hover:text-verz-orange">Digital Marketing Services</Link>
                    <Link href="/seo" className="text-sm hover:text-verz-orange">Search Engine Optimisation (SEO)</Link>
                    <Link href="/sem-services" className="text-sm hover:text-verz-orange">Search Engine Marketing (SEM)</Link>
                    <Link href="/social-media-marketing-singapore" className="text-sm hover:text-verz-orange">Social Media Marketing (SMM)</Link>
                    <Link href="/klaviyo-email-marketing-services-singapore" className="text-sm hover:text-verz-orange">Email Marketing</Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-2">ENTERPRISE SOLUTIONS</h4>
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link href="/custom-web-development-services" className="text-sm hover:text-verz-orange">Custom Web Development</Link>
                    <Link href="/enterprise-cms-solutions" className="text-sm hover:text-verz-orange">Enterprise CMS</Link>
                    <Link href="/mobile-app-development-services" className="text-sm hover:text-verz-orange">Mobile App Development</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              className="text-verz-dark hover:text-verz-orange font-medium"
              onClick={() => toggleDropdown('grants')}
            >
              Grants
            </button>
            <div className={cn(
              "absolute top-full left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all transform origin-top",
              dropdownOpen === 'grants' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
            )}>
              <div className="p-4 flex flex-col space-y-2">
                <Link href="/ecommerce-psg-grant-singapore" className="text-sm hover:text-verz-orange">PSG E-Commerce Solution Grant</Link>
                <Link href="/edg-branding-marketing" className="text-sm hover:text-verz-orange">Enterprise Development Grant (EDG)</Link>
                <Link href="/psg-digital-marketing-grant" className="text-sm hover:text-verz-orange">PSG Digital Marketing Solution Grant</Link>
              </div>
            </div>
          </div>

          <Link href="/our-work" className="text-verz-dark hover:text-verz-orange font-medium">
            Our Work
          </Link>

          <div className="relative group">
            <button
              className="text-verz-dark hover:text-verz-orange font-medium"
              onClick={() => toggleDropdown('clients')}
            >
              Our Clients
            </button>
            <div className={cn(
              "absolute top-full left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all transform origin-top",
              dropdownOpen === 'clients' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
            )}>
              <div className="p-4 flex flex-col space-y-2">
                <Link href="/our-clients" className="text-sm hover:text-verz-orange">Hall of Fame</Link>
                <Link href="/our-clients/customer-success-stories" className="text-sm hover:text-verz-orange">Customer Success Stories</Link>
                <Link href="/our-clients/clients-testimonials" className="text-sm hover:text-verz-orange">Testimonials</Link>
              </div>
            </div>
          </div>

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

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform lg:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="container mx-auto px-4 py-8 overflow-y-auto h-full">
            <nav className="flex flex-col space-y-6">
              <div>
                <button
                  className="flex justify-between items-center w-full text-verz-dark font-medium mb-2"
                  onClick={() => toggleDropdown('mobileAbout')}
                >
                  <span>About Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={cn("w-4 h-4 transition-transform", dropdownOpen === 'mobileAbout' ? "rotate-180" : "")}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={cn(
                  "transition-all duration-300 overflow-hidden",
                  dropdownOpen === 'mobileAbout' ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 flex flex-col space-y-3 pt-2">
                    <Link href="/about-verz" className="text-verz-gray hover:text-verz-orange">Values and Ethics</Link>
                    <Link href="/about-verz/our-culture" className="text-verz-gray hover:text-verz-orange">Our Culture</Link>
                    <Link href="/about-verz/management-profile" className="text-verz-gray hover:text-verz-orange">Management Profile</Link>
                    <Link href="/about-verz/our-team" className="text-verz-gray hover:text-verz-orange">Our Team</Link>
                    <Link href="/about-verz/milestones-awards" className="text-verz-gray hover:text-verz-orange">Milestones & Awards</Link>
                    <Link href="/about-verz/technology-expertise" className="text-verz-gray hover:text-verz-orange">Technology & Expertise</Link>
                    <Link href="/verz-ambassadors-singapore" className="text-verz-gray hover:text-verz-orange">Our Ambassadors</Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="flex justify-between items-center w-full text-verz-dark font-medium mb-2"
                  onClick={() => toggleDropdown('mobileServices')}
                >
                  <span>Our Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={cn("w-4 h-4 transition-transform", dropdownOpen === 'mobileServices' ? "rotate-180" : "")}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={cn(
                  "transition-all duration-300 overflow-hidden",
                  dropdownOpen === 'mobileServices' ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 flex flex-col space-y-4 pt-2">
                    <div>
                      <h4 className="text-verz-dark font-bold mb-2">WEBSITE DESIGN & DEVELOPMENT</h4>
                      <div className="pl-4 flex flex-col space-y-3">
                        <Link href="/ecommerce-web-design" className="text-verz-gray hover:text-verz-orange">eCommerce Website Design</Link>
                        <Link href="/corporate-website-design" className="text-verz-gray hover:text-verz-orange">Corporate Website Design</Link>
                        <Link href="/ui-ux-design" className="text-verz-gray hover:text-verz-orange">UI/UX Design</Link>
                        <Link href="/web-copywriting-services-singapore" className="text-verz-gray hover:text-verz-orange">Copywriting Services</Link>
                        <Link href="/shopify-plus-agency" className="text-verz-gray hover:text-verz-orange">Shopify Plus Design & Development</Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-verz-dark font-bold mb-2">DIGITAL MARKETING</h4>
                      <div className="pl-4 flex flex-col space-y-3">
                        <Link href="/digital-marketing" className="text-verz-gray hover:text-verz-orange">Digital Marketing Services</Link>
                        <Link href="/seo" className="text-verz-gray hover:text-verz-orange">Search Engine Optimisation (SEO)</Link>
                        <Link href="/sem-services" className="text-verz-gray hover:text-verz-orange">Search Engine Marketing (SEM)</Link>
                        <Link href="/social-media-marketing-singapore" className="text-verz-gray hover:text-verz-orange">Social Media Marketing (SMM)</Link>
                        <Link href="/klaviyo-email-marketing-services-singapore" className="text-verz-gray hover:text-verz-orange">Email Marketing</Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-verz-dark font-bold mb-2">ENTERPRISE SOLUTIONS</h4>
                      <div className="pl-4 flex flex-col space-y-3">
                        <Link href="/custom-web-development-services" className="text-verz-gray hover:text-verz-orange">Custom Web Development</Link>
                        <Link href="/enterprise-cms-solutions" className="text-verz-gray hover:text-verz-orange">Enterprise CMS</Link>
                        <Link href="/mobile-app-development-services" className="text-verz-gray hover:text-verz-orange">Mobile App Development</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="flex justify-between items-center w-full text-verz-dark font-medium mb-2"
                  onClick={() => toggleDropdown('mobileGrants')}
                >
                  <span>Grants</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={cn("w-4 h-4 transition-transform", dropdownOpen === 'mobileGrants' ? "rotate-180" : "")}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={cn(
                  "transition-all duration-300 overflow-hidden",
                  dropdownOpen === 'mobileGrants' ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 flex flex-col space-y-3 pt-2">
                    <Link href="/ecommerce-psg-grant-singapore" className="text-verz-gray hover:text-verz-orange">PSG E-Commerce Solution Grant</Link>
                    <Link href="/edg-branding-marketing" className="text-verz-gray hover:text-verz-orange">Enterprise Development Grant (EDG)</Link>
                    <Link href="/psg-digital-marketing-grant" className="text-verz-gray hover:text-verz-orange">PSG Digital Marketing Solution Grant</Link>
                  </div>
                </div>
              </div>

              <Link href="/our-work" className="text-verz-dark hover:text-verz-orange font-medium">
                Our Work
              </Link>

              <div>
                <button
                  className="flex justify-between items-center w-full text-verz-dark font-medium mb-2"
                  onClick={() => toggleDropdown('mobileClients')}
                >
                  <span>Our Clients</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={cn("w-4 h-4 transition-transform", dropdownOpen === 'mobileClients' ? "rotate-180" : "")}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={cn(
                  "transition-all duration-300 overflow-hidden",
                  dropdownOpen === 'mobileClients' ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 flex flex-col space-y-3 pt-2">
                    <Link href="/our-clients" className="text-verz-gray hover:text-verz-orange">Hall of Fame</Link>
                    <Link href="/our-clients/customer-success-stories" className="text-verz-gray hover:text-verz-orange">Customer Success Stories</Link>
                    <Link href="/our-clients/clients-testimonials" className="text-verz-gray hover:text-verz-orange">Testimonials</Link>
                  </div>
                </div>
              </div>

              <Link href="/blog" className="text-verz-dark hover:text-verz-orange font-medium">
                Blog
              </Link>

              <Link href="/contact-us" className="btn-primary text-center">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
