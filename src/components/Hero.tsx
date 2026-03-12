import { motion } from 'motion/react';
import { ArrowRight, Code2, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/40 via-zinc-950/90 to-zinc-950 z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-medium text-zinc-300">
              Modern Software Solutions for 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight"
          >
            Building Powerful <br className="hidden md:block" />
            <span className="text-gradient">Digital Solutions</span> <br className="hidden md:block" />
            for Modern Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Professional Web Development, UI/UX Design, and Custom Software
            Solutions designed to scale and attract international clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/#contact"
              className="group relative px-8 py-4 rounded-xl bg-gradient-brand text-zinc-950 font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </Link>
            <Link
              to="/#portfolio"
              className="px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-semibold text-lg hover:bg-zinc-800 hover:border-brand-500/50 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Abstract Tech Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="aspect-[21/9] rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-xl overflow-hidden relative shadow-2xl shadow-brand-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-orange-500/10"></div>
            
            {/* Mockup UI Elements */}
            <div className="absolute top-0 left-0 right-0 h-12 border-b border-zinc-800/50 flex items-center px-4 gap-2 bg-zinc-950/50">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            
            <div className="p-8 pt-20 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              <div className="col-span-2 space-y-4">
                <div className="h-8 w-1/3 bg-zinc-800/50 rounded-lg animate-pulse"></div>
                <div className="h-4 w-3/4 bg-zinc-800/30 rounded-lg animate-pulse delay-75"></div>
                <div className="h-4 w-1/2 bg-zinc-800/30 rounded-lg animate-pulse delay-150"></div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="h-32 bg-zinc-800/20 rounded-xl border border-zinc-700/30 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-brand-500/50" />
                  </div>
                  <div className="h-32 bg-zinc-800/20 rounded-xl border border-zinc-700/30 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-orange-500/50" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 hidden md:block">
                <div className="h-full bg-zinc-800/20 rounded-xl border border-zinc-700/30 p-4">
                  <div className="h-4 w-1/2 bg-zinc-700/50 rounded mb-4"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-2 w-full bg-zinc-800/50 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
