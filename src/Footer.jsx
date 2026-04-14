import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'About', path: '/about' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Home Theatre Installation', path: '/services' },
        { label: 'Sound Engineering', path: '/services' },
        { label: 'Lifelong Support', path: '/services' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">MT</span>
              </div>
              <span className="font-bold text-lg">MyTheatre</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              Premium home theatre installations and professional sound engineering services
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary hover:text-black rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+919611968888"
                className="flex items-start gap-3 text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>+91 9611968888</span>
              </a>
              <a
                href="mailto:raojp72@gmail.com"
                className="flex items-start gap-3 text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>raojp72@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          {/* Bottom Footer */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} MyTheatre by GearHouse India. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
