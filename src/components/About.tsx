import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

const values = [
  {
    title: 'Innovation First',
    description: 'We constantly explore new technologies to deliver cutting-edge solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Global Reach',
    description: 'Serving international clients with world-class software engineering.',
    icon: Globe,
  },
  {
    title: 'Client Success',
    description: 'Your growth is our primary objective. We build to scale.',
    icon: Target,
  },
  {
    title: 'Expert Team',
    description: 'A dedicated team of senior developers and creative designers.',
    icon: Users,
  },
];

import { Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Driving Digital <br />
              <span className="text-gradient">Transformation</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Codezy is a modern software company focused on innovation, technology, and digital transformation. We specialize in creating high-end, international-level digital solutions that empower businesses to thrive in the modern economy.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Our approach combines state-of-the-art engineering with exceptional UI/UX design, ensuring that every product we build is not only powerful but also intuitive and engaging.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-display font-bold text-white mb-1">150+</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Projects Delivered</span>
              </div>
              <div className="w-px h-12 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-display font-bold text-white mb-1">40+</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Global Clients</span>
              </div>
              <div className="w-px h-12 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-display font-bold text-white mb-1">99%</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-900 hover:border-brand-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand-500/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300">
                  <value.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
