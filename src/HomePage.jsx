import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Heart, Shield, Sparkles } from 'lucide-react';

export default function HomePage() {
  const values = [
    {
      icon: Zap,
      title: 'Expertise',
      description: 'Professional sound engineering with years of experience in premium installations'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every installation we create'
    },
    {
      icon: Shield,
      title: 'Lifelong Support',
      description: 'Your satisfaction doesn\'t end at installation—we\'re here for you always'
    },
    {
      icon: Sparkles,
      title: 'Premium Experience',
      description: 'Every detail matters. We deliver not just a service, but an unforgettable experience'
    }
  ];

  const services = [
    {
      title: 'Home Theatre Installation',
      description: 'Complete setup of premium audio-visual systems tailored to your space'
    },
    {
      title: 'Professional Sound Engineering',
      description: 'Expert acoustic design and calibration for perfect sound quality'
    },
    {
      title: 'Lifelong Support',
      description: 'Ongoing maintenance and support for all your installed systems'
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1699134816591-b4104e23eaa9?w=1200&h=800&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            MyTheatre by GearHouse India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Premium Home Theatre Installations & Professional Sound Engineering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Why Choose MyTheatre
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              We combine expertise, passion, and unwavering support to deliver premium home theatre experiences
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
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
              Our Services
            </h2>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              From installation to lifelong support, we've got everything you need
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary-foreground/10 p-8 rounded-xl hover:bg-secondary-foreground/20 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-secondary-foreground/80">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
