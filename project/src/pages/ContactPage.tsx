import React from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Reach out to learn more about VitaminAir or plan your visit"
        backgroundImage="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <Section background="default" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Get in Touch"
              subtitle="We'd love to hear from you and answer any questions you might have"
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-forest-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-800">Location</h3>
                  <p className="text-gray-600">
                    VitaminAir Sustainable Village<br />
                    Earth Province<br />
                    Cambodia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-forest-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-800">Email</h3>
                  <p className="text-gray-600">info@vitaminair.org</p>
                  <p className="text-gray-500 text-sm mt-1">For general inquiries and information</p>
                  
                  <p className="text-gray-600 mt-2">visit@vitaminair.org</p>
                  <p className="text-gray-500 text-sm mt-1">For booking visits and volunteer inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-forest-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-800">Phone</h3>
                  <p className="text-gray-600">+855 12 345 678</p>
                  <p className="text-gray-500 text-sm mt-1">Monday to Friday, 9am - 5pm (GMT+7)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-forest-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-800">Response Time</h3>
                  <p className="text-gray-600">We aim to respond to all inquiries within 48 hours during regular business days.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-forest-100 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-forest-800">Social Media</h3>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-forest-600 hover:text-forest-800 transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-forest-600 hover:text-forest-800 transition-colors">
                      Facebook
                    </a>
                    <a href="#" className="text-forest-600 hover:text-forest-800 transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="font-serif text-2xl font-semibold text-forest-800 mb-6">Send us a Message</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="visit">Planning a Visit</option>
                    <option value="volunteer">Volunteer Program</option>
                    <option value="workshop">Workshop or Event</option>
                    <option value="collaboration">Partnership or Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 h-4 w-4 text-forest-600 focus:ring-forest-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                    I consent to having this website store my submitted information so they can respond to my inquiry.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Visit Us"
          subtitle="Plan your journey to VitaminAir"
          centered={true}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-forest max-w-none">
              <h3>Getting Here</h3>
              <p>
                VitaminAir is located in Earth Province, Cambodia, approximately 3 hours from the nearest major city. Detailed directions will be provided after booking your visit.
              </p>
              
              <h3 className="mt-8">Transportation Options</h3>
              <ul>
                <li>
                  <strong>By Air:</strong> Fly to Phnom Penh International Airport, then arrange ground transportation.
                </li>
                <li>
                  <strong>By Bus:</strong> Regular bus services run from Phnom Penh to the provincial capital, followed by local transport.
                </li>
                <li>
                  <strong>By Private Vehicle:</strong> Driving directions available upon request.
                </li>
              </ul>
              
              <p>
                For groups of 3 or more, we can arrange pickup from the nearest town for an additional fee.
              </p>
              
              <div className="mt-8 bg-forest-50 p-5 rounded-lg not-prose">
                <h3 className="font-serif text-lg font-semibold text-forest-800 mb-2">Visitor Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-forest-500 mt-1">•</span> 
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-forest-500 mt-1">•</span> 
                    <span>Comfortable walking shoes and weather-appropriate clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-forest-500 mt-1">•</span> 
                    <span>Personal medications and basic toiletries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-forest-500 mt-1">•</span> 
                    <span>Open mind and respectful attitude toward community life</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-full">
            {/* Map image placeholder - in a real implementation, this would be an interactive map */}
            <img 
              src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Map showing location of VitaminAir" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </Section>
      
      <Section background="forest-800" spacing="lg" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about visiting and contacting VitaminAir"
            centered={true}
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="mt-12 space-y-6 text-left">
            {[
              {
                question: "Do I need to book in advance to visit VitaminAir?",
                answer: "Yes, all visits must be booked in advance as we have limited capacity and need to prepare for your arrival. Please contact us at least two weeks before your intended visit."
              },
              {
                question: "What accommodations are available for visitors?",
                answer: "We offer shared dormitories, private cabins, and family bungalows. All accommodations are built with natural materials and designed for minimal environmental impact, with solar power and rainwater systems."
              },
              {
                question: "Is Wi-Fi available at VitaminAir?",
                answer: "Limited Wi-Fi is available in the community center during specific hours. We encourage visitors to disconnect and fully immerse in the natural and community experience while at VitaminAir."
              },
              {
                question: "Can I volunteer at VitaminAir?",
                answer: "Yes, we welcome volunteers who can stay for a minimum of two weeks. Volunteers contribute approximately 25 hours per week to community projects in exchange for accommodation, meals, and learning opportunities."
              },
              {
                question: "Are there medical facilities at VitaminAir?",
                answer: "We have basic first aid supplies and knowledge of herbal remedies, but no full medical facilities on site. The nearest clinic is 30 minutes away, and the nearest hospital is approximately 1 hour away. Visitors should bring any necessary personal medications."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-forest-700/50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-white mb-2">{faq.question}</h3>
                <p className="text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <p className="text-white/80 mb-4">
              Have a question that's not answered here?
            </p>
            <a href="#contact-form" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-forest-800 font-medium hover:bg-forest-50 transition-colors">
              Contact Us Directly
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;