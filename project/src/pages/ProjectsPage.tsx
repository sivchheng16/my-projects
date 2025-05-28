import React from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Explore the diverse initiatives that make up VitaminAir's sustainable ecosystem"
        backgroundImage="https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <Section background="default" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Current Initiatives"
            subtitle="At VitaminAir, we're engaged in a variety of projects that work together to create a holistic approach to sustainability."
          />
          
          <div className="prose prose-forest prose-lg mt-8">
            <p>
              Each of our projects represents a facet of sustainable living, from ecosystem restoration to community building, renewable energy to natural construction. Together, they form an integrated system that demonstrates how humans can live in harmony with nature while meeting our needs for food, shelter, energy, and community.
            </p>
          </div>
        </div>
      </Section>
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Forest Preservation & Restoration"
          subtitle="Protecting and enhancing the natural ecosystem that surrounds us"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Native Species Conservation",
              image: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We're documenting and protecting the diverse plant and animal species that call our forest home, with special attention to rare and endangered species."
            },
            {
              title: "Reforestation",
              image: "https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "In areas previously degraded by logging or agriculture, we're replanting native tree species and facilitating natural forest regeneration."
            },
            {
              title: "Forest Monitoring",
              image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Our team regularly surveys the forest to track biodiversity, monitor for threats, and assess the health of the ecosystem."
            }
          ].map((project, index) => (
            <Card key={index} animate={true} delay={index} image={project.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Sustainable Agriculture"
          subtitle="Growing food in ways that regenerate rather than deplete the ecosystem"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Food Forest",
              image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Our multi-layered agroforestry system mimics natural forest structure while producing abundant fruit, nuts, and other edibles."
            },
            {
              title: "Organic Gardens",
              image: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Using permaculture principles, we grow a diverse range of vegetables, herbs, and medicinal plants without synthetic inputs."
            },
            {
              title: "Seed Saving",
              image: "https://images.pexels.com/photos/7728094/pexels-photo-7728094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We maintain a growing library of locally-adapted, open-pollinated seeds to preserve genetic diversity and food sovereignty."
            }
          ].map((project, index) => (
            <Card key={index} animate={true} delay={index} image={project.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Sustainable Building"
          subtitle="Creating structures that are beautiful, functional, and ecologically sound"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Natural Materials Construction",
              image: "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We build using locally-sourced natural materials like bamboo, earth, and sustainably harvested timber, minimizing embodied carbon and toxins."
            },
            {
              title: "Community Structures",
              image: "https://images.pexels.com/photos/2079223/pexels-photo-2079223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Our communal kitchen, workshop, library, and gathering spaces facilitate sharing resources and strengthening community bonds."
            },
            {
              title: "Eco-Housing",
              image: "https://images.pexels.com/photos/16119033/pexels-photo-16119033/free-photo-of-traditional-asian-house-with-thatched-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Residential structures are designed for comfort, energy efficiency, and harmony with the surrounding environment."
            }
          ].map((project, index) => (
            <Card key={index} animate={true} delay={index} image={project.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Renewable Energy"
          subtitle="Powering our community through clean, sustainable sources"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Solar Power",
              image: "https://images.pexels.com/photos/9875391/pexels-photo-9875391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Our photovoltaic system provides electricity for the village, with battery storage to ensure consistent power availability."
            },
            {
              title: "Biogas",
              image: "https://images.pexels.com/photos/217367/pexels-photo-217367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Organic waste is transformed into cooking gas and nutrient-rich fertilizer through our biodigester system."
            },
            {
              title: "Micro-Hydro Power",
              image: "https://images.pexels.com/photos/2437926/pexels-photo-2437926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "A small-scale hydroelectric system harnesses the power of a seasonal stream to supplement our energy needs."
            }
          ].map((project, index) => (
            <Card key={index} animate={true} delay={index} image={project.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Education & Community Outreach"
          subtitle="Sharing knowledge and building connections beyond our village"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Workshops & Courses",
              image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We offer regular hands-on learning opportunities in permaculture, natural building, forest ecology, and more."
            },
            {
              title: "School Programs",
              image: "https://images.pexels.com/photos/8471767/pexels-photo-8471767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Local schools visit VitaminAir for experiential learning about ecology, sustainable living, and forest conservation."
            },
            {
              title: "Community Exchange",
              image: "https://images.pexels.com/photos/6592361/pexels-photo-6592361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We collaborate with nearby villages on sustainable development initiatives that benefit the broader region."
            }
          ].map((project, index) => (
            <Card key={index} animate={true} delay={index} image={project.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="forest-800" spacing="lg" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Get Involved"
            subtitle="There are many ways to participate in and support our projects"
            centered={true}
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button 
              to="/visit" 
              variant="primary" 
              size="lg"
              className="bg-white text-forest-800 hover:bg-forest-50"
            >
              Visit & Volunteer
            </Button>
            <Button 
              to="/contact" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Support Our Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProjectsPage;