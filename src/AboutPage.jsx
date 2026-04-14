import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Award, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Raj Kumar',
      role: 'Founder & Lead Technician',
      bio: 'With over 15 years of experience in audio-visual installations, Raj leads our team with expertise and passion'
    },
    {
      name: 'Priya Singh',
      role: 'Sound Engineer',
      bio: 'Certified sound engineer specializing in acoustic design and professional calibration'
    },
    {
      name: 'Amit Patel',
      role: 'Installation Specialist',
      bio: 'Expert in custom installations with a keen eye for detail and customer satisfaction'
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: '500+',
      label: 'Installations Completed'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Customers'
    },
    {
      icon: Zap,
      number: '15+',
      label: 'Years of Experience'
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
              About MyTheatre
            </h1>
            <p className="text-xl text-foreground/70">
              Transforming homes into premium entertainment spaces with expert installations and lifelong support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Our Story
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                MyTheatre by GearHouse India was founded with a simple mission: to bring the magic of premium home theatre experiences to every home. What started as a passion project has grown into a trusted name in professional audio-visual installations.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                We believe that entertainment should be immersive, accessible, and tailored to your unique needs. Our team of experts combines cutting-edge technology with personalized service to create unforgettable experiences.
              </p>
              <p className="text-lg text-foreground/70">
                From the initial consultation to lifelong support, we're committed to exceeding your expectations at every step of the journey.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="MyTheatre Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Our Achievements
            </h2>
            <p className="text-lg text-secondary-foreground/70">
              Trusted by thousands of customers across the region
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <Icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-5xl font-bold mb-2">{achievement.number}</p>
                  <p className="text-lg text-secondary-foreground/80">{achievement.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
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
              Our Core Values
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-foreground/70">
                We pursue excellence in every installation, ensuring premium quality and attention to detail
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Customer Focus</h3>
              <p className="text-foreground/70">
                Your satisfaction is our priority. We listen, understand, and deliver solutions tailored to your needs
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-foreground/70">
                We stay ahead of technology trends to bring you the latest and greatest in home entertainment
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-secondary-foreground/70">
              Experienced professionals dedicated to your satisfaction
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary-foreground/10 p-8 rounded-xl hover:bg-secondary-foreground/20 transition-colors duration-300"
              >
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center font-semibold mb-4">{member.role}</p>
                <p className="text-secondary-foreground/80 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-12 md:p-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-display">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-6">
              Consultations are completely free with no obligation. Let's discuss how we can bring your home theatre vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+919611968888"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a
                href="mailto:raojp72@gmail.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              <div>
                <p className="text-sm text-foreground/60 mb-1">Phone</p>
                <p className="text-lg font-semibold">+91 9611968888</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Email</p>
                <p className="text-lg font-semibold">raojp72@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
