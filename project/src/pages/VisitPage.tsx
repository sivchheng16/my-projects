import React from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const VisitPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Visit VitaminAir"
        subtitle="Experience our sustainable living village and forest conservation project"
        backgroundImage="https://images.pexels.com/photos/7299465/pexels-photo-7299465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Book Your Visit"
        primaryButtonLink="/contact"
      />
      
      <Section background="default" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Plan Your Visit"
            subtitle="We welcome visitors who are interested in experiencing and learning from our sustainable village"
          />
          
          <div className="prose prose-forest prose-lg mt-8">
            <p>
              Visiting VitaminAir offers a unique opportunity to experience sustainable living in action. Whether you're interested in a day tour, an overnight stay, or a longer immersive experience, we provide various options to explore our community and projects.
            </p>
            <p>
              All visits need to be arranged in advance, as we have limited capacity and want to ensure a meaningful experience for both visitors and residents. Please contact us at least two weeks before your intended visit to check availability and make arrangements.
            </p>
            <div className="not-prose mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-forest-50 rounded-lg">
                <Calendar className="h-6 w-6 text-forest-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-forest-800">Open for Visits</h3>
                  <p className="text-sm text-forest-600">Year-round except January</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-forest-50 rounded-lg">
                <Clock className="h-6 w-6 text-forest-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-forest-800">Advance Booking</h3>
                  <p className="text-sm text-forest-600">Required for all visits</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-forest-50 rounded-lg">
                <Users className="h-6 w-6 text-forest-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-forest-800">Group Size</h3>
                  <p className="text-sm text-forest-600">Maximum 15 people per group</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-forest-50 rounded-lg">
                <MapPin className="h-6 w-6 text-forest-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-forest-800">Location</h3>
                  <p className="text-sm text-forest-600">Earth Province, Cambodia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Visitor Options"
          subtitle="Choose the experience that best matches your interests and schedule"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Day Tour",
              image: "https://images.pexels.com/photos/5325768/pexels-photo-5325768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              duration: "3-4 hours",
              price: "$25 per person",
              description: "Get an overview of VitaminAir with a guided tour of our main areas. Learn about our projects, forest conservation efforts, and sustainable living systems.",
              includes: [
                "Guided village tour",
                "Forest walk",
                "Q&A session",
                "Refreshments"
              ]
            },
            {
              title: "Overnight Stay",
              image: "https://images.pexels.com/photos/2496880/pexels-photo-2496880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              duration: "1-3 nights",
              price: "$60 per person per night",
              description: "Experience daily life at VitaminAir with accommodations in our guest facilities. Participate in community activities and enjoy locally grown meals.",
              includes: [
                "Simple accommodations",
                "Three meals daily",
                "Village tour",
                "Participation in daily activities",
                "Evening gatherings"
              ]
            },
            {
              title: "Immersive Experience",
              image: "https://images.pexels.com/photos/6647081/pexels-photo-6647081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              duration: "5-14 days",
              price: "$50 per person per night",
              description: "Dive deeper into sustainable living with a longer stay. Participate in projects, learn specific skills, and become part of our community temporarily.",
              includes: [
                "Simple accommodations",
                "Three meals daily",
                "In-depth workshops",
                "Hands-on project participation",
                "Community integration"
              ]
            }
          ].map((option, index) => (
            <Card key={index} animate={true} delay={index} image={option.image} className="h-full">
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-1">{option.title}</h3>
              <div className="flex justify-between mb-3">
                <span className="text-sm text-forest-600">{option.duration}</span>
                <span className="text-sm font-medium text-forest-700">{option.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="mb-5">
                <h4 className="font-medium text-forest-800 mb-2">Includes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {option.includes.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-forest-500">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Button 
                  to="/contact" 
                  variant="primary" 
                  className="w-full"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Workshops & Events"
          subtitle="Specialized learning opportunities and experiences at VitaminAir"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Permaculture Design Course",
              date: "June 15-29, 2025",
              image: "https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "A comprehensive two-week certified PDC covering permaculture principles, design methods, and practical applications in a tropical context.",
              price: "$1,200 (includes accommodation and meals)"
            },
            {
              title: "Forest Restoration Volunteer Week",
              date: "July 10-17, 2025",
              image: "https://images.pexels.com/photos/6647120/pexels-photo-6647120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Help us plant native trees, build erosion control structures, and monitor forest health while learning about tropical forest ecology.",
              price: "$350 (includes accommodation and meals)"
            },
            {
              title: "Natural Building Workshop",
              date: "August 5-12, 2025",
              image: "https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Learn bamboo construction, earthbag building, and natural plasters through hands-on participation in our ongoing building projects.",
              price: "$600 (includes accommodation and meals)"
            },
            {
              title: "Medicinal Plants Intensive",
              date: "September 3-10, 2025",
              image: "https://images.pexels.com/photos/4150257/pexels-photo-4150257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Explore traditional and modern uses of medicinal plants, with hands-on experience in identification, cultivation, harvesting, and preparation.",
              price: "$750 (includes accommodation and meals)"
            },
            {
              title: "Sustainable Living Retreat",
              date: "October 15-22, 2025",
              image: "https://images.pexels.com/photos/3770079/pexels-photo-3770079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "A gentle introduction to sustainable living practices combined with nature connection activities, community experience, and personal reflection.",
              price: "$800 (includes accommodation and meals)"
            },
            {
              title: "Agroforestry Practicum",
              date: "November 5-19, 2025",
              image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "An intensive exploration of tropical agroforestry systems, from design and establishment to management and harvesting of multi-story food forests.",
              price: "$900 (includes accommodation and meals)"
            },
          ].map((event, index) => (
            <Card key={index} animate={true} delay={index} image={event.image}>
              <div className="text-earth-600 font-medium text-sm mb-1">
                {event.date}
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-3">{event.description}</p>
              <p className="font-medium text-forest-700 mb-4">{event.price}</p>
              <Button 
                to="/contact" 
                variant="outline" 
                className="w-full"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="earth-100" spacing="md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <SectionHeading
              title="Volunteer Program"
              subtitle="Contribute to our projects while learning practical sustainability skills"
              animate={false}
            />
            
            <div className="prose prose-forest mt-6">
              <p>
                Our volunteer program offers a deeper level of engagement with VitaminAir. As a volunteer, you'll contribute to meaningful projects while developing practical skills in areas like permaculture, natural building, forest management, and community living.
              </p>
              <p>
                Volunteers typically stay for 2-8 weeks, working approximately 25 hours per week on community projects. In exchange, we provide simple accommodations, delicious meals, learning opportunities, and integration into our community life.
              </p>
              <h3>Volunteer Requirements</h3>
              <ul>
                <li>Minimum age of 18 years</li>
                <li>Commitment to a minimum 2-week stay</li>
                <li>Physical ability to participate in farm and construction work</li>
                <li>Interest in sustainable living and community</li>
                <li>Willingness to adapt to community rhythms and guidelines</li>
              </ul>
            </div>
            
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg"
              className="mt-6"
            >
              Apply to Volunteer
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/8942992/pexels-photo-8942992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Volunteers working together at VitaminAir" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </Section>
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Accommodations"
          subtitle="Where you'll stay during your visit to VitaminAir"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Shared Dormitory",
              image: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Our bamboo dormitory offers simple, comfortable accommodations with shared sleeping space for up to 8 people. Mosquito nets and bedding are provided.",
              features: [
                "Shared sleeping space",
                "Communal bathrooms",
                "Storage lockers",
                "Covered outdoor lounge"
              ]
            },
            {
              title: "Private Cabins",
              image: "https://images.pexels.com/photos/1173239/pexels-photo-1173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Small natural-built cabins offer more privacy while maintaining a close connection to nature. Each cabin accommodates 1-2 people with simple furnishings.",
              features: [
                "Private sleeping space",
                "Double or twin beds",
                "Small desk and chair",
                "Shared bathrooms nearby"
              ]
            },
            {
              title: "Family Bungalow",
              image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "For families or small groups, our bungalow provides more space and amenities. Built with natural materials, it accommodates up to 4 people comfortably.",
              features: [
                "Private bathroom",
                "Kitchenette",
                "Living area",
                "Covered porch"
              ]
            }
          ].map((accommodation, index) => (
            <Card key={index} animate={true} delay={index} image={accommodation.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-3">{accommodation.title}</h3>
              <p className="text-gray-600 mb-4">{accommodation.description}</p>
              <div>
                <h4 className="font-medium text-forest-800 mb-2">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {accommodation.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-forest-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-forest-50 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">Important Notes About Accommodations</h3>
              <p className="text-gray-600">
                All accommodations at VitaminAir are off-grid and designed for minimal environmental impact. This means:
              </p>
              <ul className="text-gray-600 mt-3 space-y-1">
                <li className="flex items-start">
                  <span className="mr-2 text-forest-500 mt-1">•</span> 
                  <span>Solar-powered electricity is limited (sufficient for lighting and charging small devices)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-forest-500 mt-1">•</span> 
                  <span>Compost toilets and gravity-fed showers use collected rainwater</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-forest-500 mt-1">•</span> 
                  <span>Wi-Fi is available in the community center only</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-forest-500 mt-1">•</span> 
                  <span>No air conditioning (buildings are designed for natural cooling)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="forest-900" spacing="lg" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Ready to Visit?"
            subtitle="Contact us to book your visit or learn more about our programs"
            centered={true}
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg"
              className="bg-white text-forest-800 hover:bg-forest-50"
            >
              Contact Us
            </Button>
            <Button 
              to="/community" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Meet Our Community
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default VisitPage;