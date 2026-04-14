import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Headphones, Zap, Volume2, Wifi, Shield } from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Headphones,
      title: 'Home Theatre Installation',
      description: 'Complete setup of premium audio-visual systems tailored to your space and preferences',
      features: [
        'Custom system design and planning',
        'Professional equipment installation',
        'Acoustic treatment and optimization',
        'Integration with smart home systems',
        'Full calibration and testing'
      ]
    },
    {
      icon: Volume2,
      title: 'Professional Sound Engineering',
      description: 'Expert acoustic design and calibration for perfect sound quality in any environment',
      features: [
        'Acoustic analysis and measurement',
        'Speaker placement optimization',
        'Room treatment recommendations',
        'Audio calibration and tuning',
        'Surround sound setup and configuration'
      ]
    },
    {
      icon: Shield,
      title: 'Lifelong Support',
      description: 'Ongoing maintenance and support for all your installed systems',
      features: [
        'Regular maintenance and check-ups',
        'Technical support and troubleshooting',
        'System upgrades and expansions',
        'Software updates and optimization',
        'Priority customer service'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Expert Installation',
      description: 'Professional technicians with years of experience'
    },
    {
      icon: Wifi,
      title: 'Smart Integration',
      description: 'Seamless integration with your smart home ecosystem'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every installation meets our high quality standards'
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: 'Dedicated support team available for your needs'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Our Services
            </h1>
            <p className="text-xl text-foreground/70">
              Premium home theatre installations and professional sound engineering services designed to transform your entertainment experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <Icon className="w-12 h-12 text-primary flex-shrink-0" />
                      <h2 className="text-3xl md:text-4xl font-bold font-display">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-foreground/70 mb-8">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-12 h-96 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-primary/30" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Why Our Services Stand Out
            </h2>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              We deliver more than just installations—we deliver experiences
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-secondary-foreground/10 p-8 rounded-xl hover:bg-secondary-foreground/20 transition-colors duration-300"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-secondary-foreground/80">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Transform Your Entertainment?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your home theatre vision to life with our expert services
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
