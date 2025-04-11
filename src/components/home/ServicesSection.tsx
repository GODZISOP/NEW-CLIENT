import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      title: 'AI-Powered eCommerce Website Development',
      description: 'Grow your online business with a scalable eCommerce solution, powered by Shopify and Shopify Plus. Built for high conversions, we integrate AI-powered eCommerce features to support advanced product filtering, express shipping, mobile responsiveness, and POS integrations. Reach local and international customers faster than ever before.',
      link: '/ecommerce-web-design'
    },
    {
      title: 'Digital Marketing',
      description: 'Growth doesn\'t come from hoping your customers somehow find you. You have to get out there. Where your customers are searching, shopping, and scrolling. With SEO, SEM, social media, email marketing and more, our digital marketing services do the hunting to win your customers over.',
      link: '/digital-marketing'
    },
    {
      title: 'Website Design & Development',
      description: 'Your website wears many hats. It\'s your receptionist desk. Your service catalogue. Your reputation builder. It speaks to your customers even when you are asleep. So, we make sure it loads fast, it looks good, and it\'s easy to navigate. With WordPress and a slew of plug-ins, we work on corporate web design to meet your business needs.',
      link: '/corporate-website-design'
    },
    {
      title: 'UI/UX Design',
      description: 'Interfaces built by humans, for humans. We go beyond aesthetics to design intuitive screens to help users find their way on your site. With heuristic evaluation and prototyping, you can click, swipe, and tap your way to a better user journey.',
      link: '/ui-ux-design'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Elevate your business operations with our cutting-edge enterprise solutions that are designed to deliver results. Experience the power of modern Intranet portals, supercharged by SharePoint Online, and tailor-made websites crafted through top-tier enterprise content management systems or custom development. Our team of experts, boasting a wealth of experience in enterprise CMS development, is committed to collaborating closely with you. Together, we will pinpoint and deploy the ideal enterprise CMS platform that aligns perfectly with your business\'s unique needs and goals.',
      link: '/enterprise-cms-solutions'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-verz-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Success Starts Here</h2>
          <p className="text-lg text-verz-gray max-w-3xl mx-auto">
            We're the go-to for all things digital. Website design services, eCommerce website design, digital marketing services and more. Check out our full-suite of digital services. We do it all and we do it well.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-verz-dark h-64 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-medium">Service Image Placeholder</span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-verz-dark">{service.title}</h3>
                <p className="text-verz-gray mb-6">{service.description}</p>
                <Link href={service.link} className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
