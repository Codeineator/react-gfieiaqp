import React, { useState, useEffect } from 'react';
import { client } from '../sanityClient.js';
import { Monitor, Speaker, Shield, Zap, Home, Settings } from 'lucide-react';

const iconMap = {
  Monitor: <Monitor className="w-12 h-12 text-[#b89b5e]" />,
  Speaker: <Speaker className="w-12 h-12 text-[#b89b5e]" />,
  Shield: <Shield className="w-12 h-12 text-[#b89b5e]" />,
  Zap: <Zap className="w-12 h-12 text-[#b89b5e]" />,
  Home: <Home className="w-12 h-12 text-[#b89b5e]" />,
  Settings: <Settings className="w-12 h-12 text-[#b89b5e]" />,
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "service"]';
    
    client.fetch(query)
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Loading Gearhouse Services...</div>;

  return (
    <section className="bg-[#fbfaf5] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">
            Our Specialized Services
          </h2>
          <div className="w-24 h-1 bg-[#b89b5e] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service._id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="mb-6">
                {iconMap[service.icon] || <Settings className="w-12 h-12 text-[#b89b5e]" />}
              </div>
              <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
