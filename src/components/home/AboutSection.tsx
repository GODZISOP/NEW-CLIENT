import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const stats = [
    { id: 1, value: '1+', label: 'Years of Success' },
    { id: 2, value: '5,000+', label: 'Websites Launched' },
    { id: 3, value: '$120M+', label: 'DTC ANNUAL GMV GENERATED' },
    { id: 4, value: '180+', label: 'Strong global team' },
  ];

  return (
    <section id="AboutUs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Web Design. Digital Marketing. All in One Agency.
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-verz-gray-dark mb-6">
            With thousands of websites and digital marketing campaigns under our belt, you might have seen our work before. Let us introduce ourselves proper – we are Verz Design, a web development and digital marketing agency in Singapore. Helping businesses outgrow competitors has always been our first priority.
          </p>
          <p className="text-lg text-verz-gray-dark mb-8">
            Armed with expertise in eCommerce web development, enterprise solutions, SEO, PPC, social media campaigns, and so much more, we are ready to help you conquer market share faster. Get to know us so your customers get to know you.
          </p>

          <Link href="/about-verz" className="btn-primary">
            More About Us
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-verz-orange mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-verz-dark">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
