import React from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Revitalizing Earth Through Sustainable Living"
        subtitle="Preserving 100 hectares of precious forest land while building a vibrant community centered around ecological harmony"
        backgroundImage="/img/hero-bg.png"
        primaryButtonText="Explore Our Projects"
        primaryButtonLink="/projects"
        secondaryButtonText="Visit Us"
        secondaryButtonLink="/visit"
      />

      <Section background="alt" spacing="lg">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading
            title="Welcome to VitaminAir"
            subtitle="VitaminAir is a sustainable living village dedicated to forest conservation, community building, and developing regenerative solutions for a harmonious future."
            centered={true}
          />
          <p className="mt-6 text-gray-700">
            Founded on the principles of permaculture and ecological restoration, our community spans 100 hectares of protected forest land, where we're pioneering sustainable living practices while preserving precious ecosystems.
          </p>
        </div>
      </Section>

      <Section background="default" spacing="lg">
        <SectionHeading
          title="Upcoming Events"
          subtitle="Join us for workshops, volunteer days, and community gatherings at VitaminAir."
          centered={true}
        />
        <div className="text-center mt-12">
          <Button 
            to="/visit" 
            variant="outline" 
            size="lg"
          >
            View All Events
          </Button>
        </div>
      </Section>

      <Section background="earth-50" spacing="md" className="rounded-xl mx-4 md:mx-6 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Our Location"
              subtitle="VitaminAir is located in Earth Province, Cambodia, surrounded by natural beauty and diverse ecosystems."
              animate={false}
            />
            <Button 
              to="/contact" 
              variant="primary" 
              size="md"
              className="mt-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;