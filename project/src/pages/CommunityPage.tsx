import React from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import ImageText from '../components/sections/ImageText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Quote } from 'lucide-react';

const CommunityPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Community"
        subtitle="Meet the diverse group of people who bring VitaminAir to life"
        backgroundImage="https://images.pexels.com/photos/7299586/pexels-photo-7299586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <Section background="default" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Life at VitaminAir"
            subtitle="A glimpse into our vibrant community and daily experiences"
          />
          
          <div className="prose prose-forest prose-lg mt-8">
            <p>
              VitaminAir is home to a diverse community of individuals united by shared values of sustainability, cooperation, and mindful living. Our residents include permaculture designers, natural builders, educators, artists, healthcare practitioners, and many others who bring their unique skills and perspectives to our collective endeavor.
            </p>
            <p>
              Daily life at VitaminAir balances individual pursuits with community engagement. Most residents contribute several hours each day to communal projects—tending gardens, preparing meals, maintaining infrastructure, or working on specific initiatives aligned with their skills and interests. The remainder of their time is dedicated to personal projects, rest, recreation, and continuing education.
            </p>
            <p>
              We gather regularly for community meals, meetings, celebrations, and cultural events that strengthen our bonds and enrich our shared experience. Through a combination of formal and informal structures, we practice collaborative decision-making that honors both individual autonomy and collective wisdom.
            </p>
          </div>
        </div>
      </Section>
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Community Values"
          subtitle="The principles that guide our interactions and decisions"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              title: "Cooperation & Support",
              description: "We believe in the power of working together and supporting each other through challenges and opportunities. By sharing resources, knowledge, and care, we create a community that is greater than the sum of its parts."
            },
            {
              title: "Diversity & Inclusion",
              description: "We value diverse perspectives, backgrounds, and approaches. Our community is strengthened by the unique contributions of each member, and we strive to create an environment where everyone feels welcome and respected."
            },
            {
              title: "Learning & Growth",
              description: "We approach life as a continuous learning journey. Our community fosters personal and collective growth through formal education, skill-sharing, mentorship, and the valuable lessons that come from both successes and failures."
            },
            {
              title: "Balance & Wellbeing",
              description: "We recognize that sustainable living includes caring for human needs—physical, emotional, social, and spiritual. We strive for balance in our work and rest, community engagement and personal space, giving and receiving."
            }
          ].map((value, index) => (
            <Card key={index} animate={true} delay={index} className="h-full border border-forest-100">
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <ImageText
        title="Community Governance"
        description={
          <>
            <p>
              At VitaminAir, we practice sociocracy—a governance system that distributes decision-making power throughout the community while ensuring all voices are heard. Our structure includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Specialized circles (working groups) focused on specific areas like agriculture, education, and infrastructure</li>
              <li>Regular community forums for sharing information and addressing whole-system questions</li>
              <li>Consent-based decision-making that seeks solutions acceptable to all rather than perfect for some</li>
              <li>Transparent processes for conflict resolution and continuous improvement</li>
            </ul>
            <p>
              This approach allows us to balance efficiency with inclusivity, making decisions that reflect our collective wisdom while respecting individual needs and perspectives.
            </p>
          </>
        }
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Community meeting at VitaminAir"
      />
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Community Stories"
          subtitle="Hear from the people who call VitaminAir home"
          centered={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {[
            {
              name: "Mei Lin",
              role: "Resident since 2019",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              quote: "What drew me to VitaminAir was the vision of living in harmony with nature while being part of a supportive community. Three years later, I'm amazed at how much I've learned and grown. From building my own natural home to learning permaculture design, every day brings new challenges and joys. The community has become like family—we celebrate together, problem-solve together, and create together."
            },
            {
              name: "Carlos Rodriguez",
              role: "Resident since 2020",
              image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              quote: "After 15 years in corporate finance, I was seeking something more meaningful. VitaminAir offered not just a different lifestyle but a different paradigm. Here, success isn't measured by acquisition but by contribution—to the community, to the land, to future generations. I've found purpose in applying my skills to developing our community's financial systems and social enterprise initiatives. It's challenging work, but deeply fulfilling."
            },
            {
              name: "Amara Okafor",
              role: "Resident since 2018",
              image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              quote: "As an ecologist, living at VitaminAir allows me to directly apply my knowledge to forest conservation while continually learning from the land. I coordinate our biodiversity monitoring program and love involving visitors in citizen science. The joy of watching someone identify their first butterfly species or understand the interconnections in a forest ecosystem never gets old."
            },
            {
              name: "Tomas Janssen",
              role: "Resident since 2021",
              image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              quote: "I came to VitaminAir seeking community after years of solitary artistic practice. What I found was not only connection with amazing people but a deeper connection with myself and my creative process. Living close to nature, engaged in meaningful work, surrounded by supportive community—it's transformed both my art and my sense of purpose. My sculptures now reflect the symbiotic relationships I observe in the forest around us."
            }
          ].map((testimonial, index) => (
            <Card key={index} animate={true} delay={index} className="flex flex-col md:flex-row gap-6 p-0 overflow-visible shadow-none border border-gray-200 rounded-2xl">
              <div className="md:w-1/3 p-6 bg-forest-50 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-forest-800">
                  {testimonial.name}
                </h3>
                <p className="text-forest-600 text-sm">{testimonial.role}</p>
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <Quote className="h-10 w-10 text-forest-200 mb-2" />
                <p className="text-gray-700 italic">
                  {testimonial.quote}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="image" backgroundImage="https://images.pexels.com/photos/6647052/pexels-photo-6647052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" spacing="xl" className="relative text-white">
        <div className="absolute inset-0 bg-forest-900/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Join Our Community"
            subtitle="Explore ways to connect with VitaminAir"
            centered={true}
            titleClassName="text-white"
            subtitleClassName="text-white/90"
          />
          
          <div className="prose prose-invert prose-lg mx-auto mt-8">
            <p>
              Whether you're interested in a short visit, extended volunteer stay, or exploring residency, we welcome your interest in our community. We regularly host visitors, volunteers, interns, and work-study participants who contribute to and learn from our village.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <Button 
              to="/visit" 
              variant="primary" 
              size="lg"
              className="bg-white text-forest-800 hover:bg-forest-50 w-full"
            >
              Visit & Volunteer
            </Button>
            <Button 
              to="/contact" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Community Events"
          subtitle="Regular gatherings and special occasions at VitaminAir"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Weekly Community Meals",
              image: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Every Sunday evening, we gather for a communal feast prepared with ingredients from our gardens. These meals strengthen our bonds and provide space for informal discussions about community life."
            },
            {
              title: "Seasonal Celebrations",
              image: "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We mark the changing seasons with special celebrations that honor natural cycles and cultural traditions from diverse backgrounds, featuring music, dance, storytelling, and ritual."
            },
            {
              title: "Skill-Share Workshops",
              image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Monthly skill-share sessions allow community members to teach and learn from each other—from fermentation techniques to natural dyeing, basketry to beekeeping."
            },
            {
              title: "New Moon Circles",
              image: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "These quiet gatherings provide space for reflection, intention-setting, and deeper connection. We practice various contemplative traditions that foster mindfulness and presence."
            },
            {
              title: "Work Parties",
              image: "https://images.pexels.com/photos/8942992/pexels-photo-8942992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "When larger projects need attention, we come together for focused work sessions that combine productivity with celebration—often culminating in shared meals and music."
            },
            {
              title: "Cultural Exchanges",
              image: "https://images.pexels.com/photos/6647095/pexels-photo-6647095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We regularly host cultural exchanges with neighboring communities, sharing food, music, practices, and knowledge that enrich both groups and foster regional connections."
            }
          ].map((event, index) => (
            <Card key={index} animate={true} delay={index} image={event.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default CommunityPage;