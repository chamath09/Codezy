import { motion } from 'motion/react';
import { Layout, MonitorSmartphone, Code, Wrench, Globe } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, high-performance websites built with modern frameworks to elevate your brand.',
    icon: Globe,
    color: 'from-brand-400 to-orange-500',
  },
  {
    title: 'Web Applications',
    description: 'Scalable and secure web applications tailored to your complex business needs.',
    icon: MonitorSmartphone,
    color: 'from-orange-400 to-brand-600',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed to maximize conversions and user satisfaction.',
    icon: Layout,
    color: 'from-brand-300 to-orange-400',
  },
  {
    title: 'Custom Software',
    description: 'Bespoke software solutions engineered from the ground up for your unique requirements.',
    icon: Code,
    color: 'from-orange-500 to-brand-500',
  },
  {
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and optimization to keep your digital assets running smoothly.',
    icon: Wrench,
    color: 'from-brand-500 to-orange-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Comprehensive digital solutions designed to accelerate your business growth
            in the modern technological landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-1 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-brand-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-orange-500/0 group-hover:from-brand-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
              
              <div className="relative bg-zinc-950 p-8 rounded-xl h-full flex flex-col items-start">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-zinc-950" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-6 w-full flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold text-brand-400">Learn more</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-brand-500/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
