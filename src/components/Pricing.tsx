import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter Website',
    price: '$39',
    description: 'Perfect for small businesses establishing their online presence.',
    features: [
      '1 Page Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Support',
    ],
    popular: false,
  },
  {
    name: 'Business Website',
    price: '$69',
    description: 'Comprehensive solution for growing companies needing advanced features.',
    features: [
      '5-10 Pages',
      'Advanced UI/UX Design',
      'Comprehensive SEO Optimization',
      'Speed Optimization',
      'CMS Integration',
      '3 Months Support',
    ],
    popular: true,
  },
  {
    name: 'Custom Web App',
    price: '$149+',
    description: 'Tailored full-stack software solutions for complex business requirements.',
    features: [
      'Full Stack Custom Development',
      'Admin Dashboard',
      'API Integration',
      'Scalable Architecture',
      'Database Design',
      '6 Months Support',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Choose the perfect plan for your business needs. No hidden fees, just exceptional value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-zinc-900 border-2 border-brand-500 shadow-[0_0_40px_rgba(245,158,11,0.15)] transform md:-translate-y-4'
                  : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-brand text-zinc-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-brand-500/30">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                {plan.price !== '$149+' && <span className="text-zinc-500">/project</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-zinc-300">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-brand-400' : 'text-zinc-500'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-brand text-zinc-950 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02]'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700 hover:text-brand-400'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
