import React from 'react';
import Image from 'next/image';
import styles from './clients.module.css'; // 👈 import your CSS module

const ClientsSection = () => {
  const clients = [
    { name: 'Singapore Airlines', logo: 'https://ext.same-assets.com/3568091972/2100033233.jpeg' },
    { name: 'DBS', logo: 'https://ext.same-assets.com/3568091972/2630509158.png' },
    { name: 'ERA', logo: 'https://ext.same-assets.com/3568091972/803292001.jpeg' },
    { name: 'Singtel', logo: 'https://ext.same-assets.com/3568091972/1219479812.png' },
    { name: 'NUS', logo: 'https://ext.same-assets.com/3568091972/3060307230.jpeg' },
    { name: 'CapitaLand', logo: 'https://ext.same-assets.com/3568091972/3641971636.png' },
  ];

  const partners = [
    { name: 'Shopify Plus', logo: 'https://ext.same-assets.com/3568091972/2265345399.png' },
    { name: 'Sitefinity', logo: 'https://ext.same-assets.com/3568091972/2551670824.png' },
    { name: 'SharePoint', logo: 'https://ext.same-assets.com/3568091972/1502466863.png' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Over 5,000 Brands</h2>
          <p className="text-lg text-verz-gray max-w-3xl mx-auto">
            We are honoured to be the trusted digital solution provider for organisations of every size and industry. Give us the chance to grow your digital presence and have your logo join the ranks. We&apos;ve saved you a spot.
          </p>
        </div>

        {/* Marquee using CSS Module */}
        <div className={styles.marqueeWrapper}>
  <div className={styles.marqueeContent}>
    {clients.concat(clients).map((client, index) => (
      <div key={index} className={styles.marqueeItem}>
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          width={120}
          height={60}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ))}
  </div>
</div>



        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            We Partner with the Best of the Best.
          </h3>
          <p className="text-center text-verz-gray max-w-3xl mx-auto mb-12">
            Birds of a feather flock together. That&apos;s why we only work with leaders of every industry. Whether it&apos;s content management systems, payment gateways, marketing moguls and more, our partnerships sharpen our services so we give every client the best there is.
          </p>
          <p className="text-center text-verz-gray max-w-3xl mx-auto mb-16">
            Talk to us and we&apos;ll connect you with vendors worth working with.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center p-4">
                <div className="relative h-24 w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
