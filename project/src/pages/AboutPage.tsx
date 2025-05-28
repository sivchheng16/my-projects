import React from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import ImageText from '../components/sections/ImageText';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  return (
    <>
      <Hero
        title="About VitaminAir"
        subtitle="Our story, mission, and the people behind our sustainable living village"
        backgroundImage="https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <Section background="default" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Our Story"
            subtitle="The journey of VitaminAir from concept to thriving ecological community"
          />
          
          <div className="prose prose-forest prose-lg mt-8">
            <p>
              VitaminAir began in 2018 with a vision to create a model of sustainable living that could help address the dual challenges of environmental degradation and community disconnection. Our founders, a diverse group of environmentalists, permaculturists, and community builders, came together around the shared belief that humanity needs new ways of living in harmony with nature.
            </p>
            <p>
              When the opportunity arose to protect 100 hectares of forest land in Cambodia that was at risk of exploitation, we mobilized quickly. Through a combination of private investment, crowdfunding, and grants from environmental organizations, we secured the land with the explicit mission of preservation and sustainable development.
            </p>
            <p>
              Since then, VitaminAir has grown into a thriving community of permanent residents, regular volunteers, and visitors from around the world. We've developed sustainable housing, food production systems, and educational programs while maintaining our core commitment to forest preservation.
            </p>
          </div>
        </div>
      </Section>
      
      <ImageText
        title="Our Mission"
        description={
          <>
            <p>
              At VitaminAir, our mission is to develop and demonstrate regenerative ways of living that restore ecosystems, strengthen communities, and provide fulfilling livelihoods while minimizing ecological impact.
            </p>
            <p>
              We believe that by combining traditional wisdom with appropriate modern technologies, we can create systems that meet human needs while enhancing the health of the planet. Through our living example and educational programs, we aim to inspire and empower others to adopt more sustainable ways of living.
            </p>
          </>
        }
        image="https://images.pexels.com/photos/4503756/pexels-photo-4503756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="VitaminAir sustainable community initiatives"
      />
      
      <ImageText
        title="Our Vision"
        description={
          <>
            <p>
              We envision a world where human communities live in regenerative relationship with the natural world, where forests thrive, biodiversity flourishes, and people are connected to the land and to each other.
            </p>
            <p>
              We see VitaminAir as a seed for this vision—a living laboratory where we explore what truly sustainable living looks like in practice. Our hope is that the models we develop can be adapted and replicated in diverse contexts around the world, contributing to a global transition toward ecological harmony.
            </p>
          </>
        }
        image="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Vision for sustainable future at VitaminAir"
        reverse={true}
      />
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Our Values"
          subtitle="The core principles that guide everything we do at VitaminAir"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Ecological Harmony",
              description: "We strive to create systems that work with rather than against natural processes, recognizing that human wellbeing depends on the health of the entire ecosystem."
            },
            {
              title: "Community Resilience",
              description: "We believe in the power of connected communities to solve problems, support individual growth, and create meaningful lives based on cooperation rather than competition."
            },
            {
              title: "Traditional Wisdom",
              description: "We honor indigenous and traditional knowledge about living sustainably with the land, while being open to appropriate modern innovations."
            },
            {
              title: "Regeneration",
              description: "Beyond sustainability, we aim to actively regenerate damaged ecosystems and social systems, leaving things better than we found them."
            },
            {
              title: "Accessible Education",
              description: "We believe knowledge about sustainable living should be freely shared and accessible to all who seek it, regardless of economic means."
            },
            {
              title: "Holistic Health",
              description: "We recognize the interconnection between personal, community, and planetary health, and work to nurture all three simultaneously."
            }
          ].map((value, index) => (
            <Card key={index} animate={true} delay={index} className="border border-forest-100 h-full">
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Our Team"
          subtitle="Meet the dedicated individuals who make VitaminAir possible"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {[
            {
              name: "Maya Johnson",
              role: "Founder & Director",
              image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              bio: "With a background in environmental conservation and community development, Maya founded VitaminAir to create a model of regenerative living."
            },
            {
              name: "David Chen",
              role: "Head of Agroforestry",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              bio: "An expert in tropical forest ecosystems, David oversees our forest preservation efforts and sustainable agricultural practices."
            },
            {
              name: "Aisha Nkosi",
              role: "Community Coordinator",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              bio: "Aisha brings together diverse community members and facilitates collaborative decision-making and culture-building."
            },
            {
              name: "Thomas Mueller",
              role: "Sustainable Building Lead",
              image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              bio: "With decades of experience in natural building, Thomas designs and implements our ecological housing solutions."
            },
            {
              name: "Sunita Patel",
              role: "Education Coordinator",
              image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              bio: "Sunita develops our educational programs and workshops, sharing sustainable living knowledge with visitors and volunteers."
            },
            {
              name: "Jean-Claude Mbeki",
              role: "Renewable Energy Specialist",
              image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              bio: "Jean-Claude designs and maintains our off-grid energy systems, ensuring reliable power with minimal environmental impact."
            }
          ].map((person, index) => (
            <Card key={index} animate={true} delay={index} className="text-center">
              <div className="mb-4 mx-auto overflow-hidden rounded-full w-32 h-32">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest-800">{person.name}</h3>
              <p className="text-forest-600 font-medium mb-3">{person.role}</p>
              <p className="text-gray-600">{person.bio}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="forest-900" spacing="lg" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Join Our Journey"
            subtitle="There are many ways to be part of the VitaminAir community and contribute to our mission."
            centered={true}
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="prose prose-invert prose-lg mx-auto mt-8">
            <p>
              Whether you're interested in visiting, volunteering, participating in workshops, or supporting our work from afar, we welcome your involvement. Together, we can build a more sustainable and connected world.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/visit" className="px-6 py-3 bg-white text-forest-800 rounded-md font-medium hover:bg-forest-50 transition-colors">
              Plan Your Visit
            </a>
            <a href="/contact" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;