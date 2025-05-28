import React from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import ImageText from '../components/sections/ImageText';
import Card from '../components/ui/Card';

const SustainabilityPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Sustainability Approach"
        subtitle="How we're preserving 100 hectares of forest while demonstrating regenerative practices"
        backgroundImage="https://images.pexels.com/photos/1122629/pexels-photo-1122629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <Section background="default" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Forest Conservation"
            subtitle="Protecting and enhancing the natural ecosystem that is the heart of VitaminAir"
          />
          
          <div className="prose prose-forest prose-lg mt-8">
            <p>
              At the core of VitaminAir's mission is the preservation of our 100-hectare forest. This diverse ecosystem is home to countless plant and animal species, many of which are endemic to the region. Our forest also serves as a crucial carbon sink, helping to mitigate climate change while providing clean air and water.
            </p>
            <p>
              Our approach to forest conservation is multi-faceted:
            </p>
            <ul>
              <li>Regular biodiversity monitoring to track the health of the ecosystem</li>
              <li>Protection against illegal logging and poaching</li>
              <li>Restoration of previously degraded areas through reforestation with native species</li>
              <li>Creating wildlife corridors to connect with other forest fragments</li>
              <li>Sustainable harvesting of non-timber forest products to demonstrate economic value of intact forests</li>
            </ul>
            <p>
              By preserving this forest, we're not only protecting biodiversity but also demonstrating the value of intact ecosystems for human wellbeing and sustainable development.
            </p>
          </div>
        </div>
      </Section>
      
      <Section background="image" backgroundImage="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" spacing="xl" className="relative">
        <div className="absolute inset-0 bg-forest-900/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Our Forest Impact"
            subtitle="The measurable outcomes of our forest preservation efforts"
            centered={true}
            titleClassName="text-white"
            subtitleClassName="text-white/90"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                number: "100",
                unit: "hectares",
                description: "of forest land protected from deforestation"
              },
              {
                number: "20,000+",
                unit: "trees",
                description: "planted in reforestation efforts"
              },
              {
                number: "300+",
                unit: "species",
                description: "of plants and animals documented on our land"
              },
              {
                number: "15,000",
                unit: "tons CO₂",
                description: "sequestered annually by our protected forest"
              }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm text-white">
                <div className="text-4xl font-bold font-serif">{stat.number}</div>
                <div className="text-lg mb-2">{stat.unit}</div>
                <div className="text-white/80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <ImageText
        title="Regenerative Agriculture"
        description={
          <>
            <p>
              Our food production systems work with nature rather than against it. Instead of the conventional agricultural approach that often depletes soil and requires chemical inputs, we use permaculture and agroecology principles to create gardens and food forests that build soil health and biodiversity.
            </p>
            <p>
              These systems minimize external inputs, maximize water efficiency through careful design, and create habitat for beneficial insects and wildlife. The result is nutritious food production that actually improves the land over time rather than degrading it.
            </p>
          </>
        }
        image="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Regenerative agriculture at VitaminAir"
      />
      
      <ImageText
        title="Water Management"
        description={
          <>
            <p>
              Water is life, and how we manage this precious resource is central to our sustainability approach. Our integrated water management system includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Rainwater harvesting from rooftops</li>
              <li>Greywater recycling for irrigation</li>
              <li>Constructed wetlands for natural water filtration</li>
              <li>Swales and ponds to slow, spread, and sink water across the landscape</li>
              <li>Protection of natural springs and waterways</li>
            </ul>
            <p>
              These systems ensure clean water availability while enhancing the resilience of the local watershed.
            </p>
          </>
        }
        image="https://images.pexels.com/photos/1550913/pexels-photo-1550913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Water management systems at VitaminAir"
        reverse={true}
      />
      
      <Section background="alt" spacing="lg">
        <SectionHeading
          title="Circular Economy"
          subtitle="Minimizing waste by designing cyclical systems"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Waste Reduction",
              description: "We prioritize reusable items, bulk purchasing, and careful consumption to minimize packaging waste. What little waste we do generate is carefully sorted for composting, recycling, or upcycling."
            },
            {
              title: "Composting Systems",
              description: "Organic waste from kitchens and gardens is transformed into rich compost that returns nutrients to the soil. Our multi-stage composting system handles everything from food scraps to human waste safely and effectively."
            },
            {
              title: "Resource Recovery",
              description: "Materials that might be considered 'waste' in conventional systems are viewed as resources in our circular economy. From using glass bottles in construction to repurposing old clothing into new items, we find creative ways to keep resources in use."
            }
          ].map((item, index) => (
            <Card key={index} animate={true} delay={index} className="h-full">
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="default" spacing="lg">
        <SectionHeading
          title="Energy Systems"
          subtitle="Meeting our energy needs through renewable sources"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              title: "Solar Power",
              image: "https://images.pexels.com/photos/9875393/pexels-photo-9875393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Our photovoltaic array captures abundant tropical sunlight, providing electricity for the entire village. Battery storage ensures power availability even during cloudy periods."
            },
            {
              title: "Biogas Production",
              image: "https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Our biodigester transforms organic waste into methane gas for cooking, with nutrient-rich effluent used as fertilizer—a perfect example of our circular economy approach."
            },
            {
              title: "Passive Design",
              image: "https://images.pexels.com/photos/19031622/pexels-photo-19031622/free-photo-of-wooden-house-with-veranda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Buildings are designed to minimize energy needs through natural ventilation, optimal solar orientation, thermal mass, and other passive strategies that maintain comfort without active cooling."
            },
            {
              title: "Efficient Appliances",
              image: "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "We carefully select equipment that minimizes energy use while meeting community needs, from efficient LED lighting to low-energy refrigeration systems."
            }
          ].map((item, index) => (
            <Card key={index} animate={true} delay={index} image={item.image}>
              <h3 className="font-serif text-xl font-semibold text-forest-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section background="forest-50" spacing="lg">
        <SectionHeading
          title="Measuring Our Impact"
          subtitle="How we track and improve our sustainability performance"
          centered={true}
        />
        
        <div className="max-w-3xl mx-auto mt-8">
          <div className="prose prose-forest prose-lg">
            <p>
              At VitaminAir, we believe in transparent, data-driven approaches to sustainability. We regularly measure key indicators to assess our environmental impact and identify areas for improvement:
            </p>
            
            <h3>Ecological Monitoring</h3>
            <ul>
              <li>Annual biodiversity surveys documenting plant and animal species</li>
              <li>Soil health assessments measuring organic matter, microbial activity, and nutrient content</li>
              <li>Water quality testing of springs, streams, and ponds</li>
              <li>Forest growth and carbon sequestration estimates</li>
            </ul>
            
            <h3>Resource Use Tracking</h3>
            <ul>
              <li>Energy production and consumption monitoring</li>
              <li>Water usage measurements</li>
              <li>Waste production and diversion rates</li>
              <li>Food production quantities and nutritional analysis</li>
            </ul>
            
            <h3>Social Sustainability Metrics</h3>
            <ul>
              <li>Community wellbeing assessments</li>
              <li>Educational impact measurements</li>
              <li>Local economic benefits analysis</li>
              <li>Cultural preservation and integration evaluation</li>
            </ul>
            
            <p>
              These measurements help us implement continuous improvement processes and share evidence-based practices with others seeking to adopt more sustainable approaches.
            </p>
          </div>
        </div>
      </Section>
      
      <Section background="earth-100" spacing="lg">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Sustainability Resources"
            subtitle="We're committed to sharing our knowledge and experience"
            centered={true}
          />
          
          <div className="prose prose-forest prose-lg mx-auto mt-8">
            <p>
              If you're interested in learning more about our sustainability practices or implementing similar approaches in your own context, we offer workshops, courses, and consulting services. We also maintain a comprehensive resource library with practical guides, case studies, and research findings.
            </p>
            <p>
              Contact us to learn more about our educational offerings or to arrange a visit to see our sustainability systems in action.
            </p>
          </div>
          
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-forest-600 px-6 py-3 text-white font-medium hover:bg-forest-700 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SustainabilityPage;