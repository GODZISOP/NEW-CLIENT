import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Saturday Club',
      description: 'Saturday Club is a global women\'s fashion brand known for its trendy clothing and accessories.',
      image: 'https://ext.same-assets.com/3568091972/975173911.png',
      link: '/portfolio-new/saturday-club'
    },
    {
      id: 2,
      title: 'Food Junction',
      description: 'Food Junction is a food court chain offering a diverse array of local and international cuisines.',
      image: 'https://ext.same-assets.com/3568091972/2805652870.png',
      link: '/portfolio-new/food-junction'
    },
    {
      id: 3,
      title: 'Panasonic',
      description: 'Panasonic enhances lives through its innovative consumer electronics and home appliances.',
      image: 'https://ext.same-assets.com/3568091972/3223598948.png',
      link: '/portfolio-new/panasonic'
    },
    {
      id: 4,
      title: 'GovTech',
      description: 'GovTech is the government tech agency of Singapore that drives digital transformation in the public sector.',
      image: 'https://ext.same-assets.com/3568091972/277714290.png',
      link: '/portfolio-new/govtech-stack'
    },
    {
      id: 5,
      title: 'Lady M',
      description: 'LadyM is a luxury pâtisserie famous for their delectable Mille Crêpes and cakes.',
      image: 'https://ext.same-assets.com/3568091972/3546410490.png',
      link: '/portfolio-new/lady-m'
    },
    {
      id: 6,
      title: 'NUS',
      description: 'NUS is one of the country\'s and the world\'s most prestigious universities, offering extensive degree courses.',
      image: 'https://ext.same-assets.com/3568091972/3405964328.png',
      link: '/portfolio-new/nus-teaching-academy'
    },
    {
      id: 7,
      title: 'Sharp',
      description: 'SHARP is a leading electronics corporation dedicated to tech advancement in consumer and industrial sectors.',
      image: 'https://ext.same-assets.com/3568091972/46415150.png',
      link: '/portfolio-new/sharp-singapore-electronics-corp'
    },
    {
      id: 8,
      title: 'Mount Faber',
      description: 'Mount Faber Leisure is a leading operator of attractions, guided tours and event venues in Singapore.',
      image: 'https://ext.same-assets.com/3568091972/762513748.png',
      link: '/portfolio-new/mount-faber-leisure'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-verz-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Case Studies</h2>
        <p className="text-center text-verz-gray max-w-3xl mx-auto mb-16">
          Check out how we have transformed our talent into our clients&apos; success stories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.link}
              className="group block overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-verz-dark">{study.title}</h3>
                <p className="text-sm text-verz-gray mb-4">{study.description}</p>
                <div className="text-verz-orange font-medium flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio" className="btn-primary">
            View More Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
