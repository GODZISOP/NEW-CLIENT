"use client";
import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideRightVariant, fadeUpVariant, staggerContainerVariant } from '@/lib/animation';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src="https://ext.same-assets.com/3568091972/3237332392.webp"
            alt="Hero Background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-verz-dark bg-opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariant}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={slideRightVariant}
          >
            Singapore&apos;s Trusted<br />
            Website Design &<br />
            Digital Agency
          </motion.h1>

          <motion.div
            variants={fadeUpVariant}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Link href="#services" className="btn-primary mt-8 inline-block">
              Learn More
            </Link>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUpVariant}>
              <h3 className="text-white font-bold text-xl mb-6">Build</h3>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/corporate-website-design"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Website Design
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/shopify-plus-agency"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Shopify Plus eCommerce Design
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/enterprise-cms-solutions"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Enterprise Solutions
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/ui-ux-design"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    UI/UX Design
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/web-copywriting-services-singapore"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Copywriting Services
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <h3 className="text-white font-bold text-xl mb-6">Grow</h3>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/digital-marketing"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Digital Marketing Services
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/seo-services"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Search Engine Optimisation
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/sem-services"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Search Engine Marketing
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/social-media-marketing-singapore"
                    className="text-white hover:text-verz-orange transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-verz-orange rounded-full mr-2" />
                    Social Media Marketing
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
