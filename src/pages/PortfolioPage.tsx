import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Monitor, Smartphone, LayoutDashboard, Code, Globe, Database, ChevronLeft, ChevronRight } from 'lucide-react';

const allProjects = [
  {
    title: 'FinTech Dashboard',
    category: 'SaaS Platforms',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    icon: LayoutDashboard,
    description: 'A comprehensive financial analytics dashboard with real-time data visualization and reporting tools.',
  },
  {
    title: 'Global E-commerce',
    category: 'E-commerce Websites',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=2064',
    icon: Smartphone,
    description: 'A high-conversion e-commerce platform with multi-currency support and advanced inventory management.',
  },
  {
    title: 'Corporate Portal',
    category: 'Business Websites',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    icon: Monitor,
    description: 'A modern corporate website with integrated CRM and employee portal functionalities.',
  },
  {
    title: 'Analytics Platform',
    category: 'Dashboards',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    icon: LayoutDashboard,
    description: 'Custom analytics solution for marketing agencies to track campaign performance across multiple channels.',
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Applications',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070',
    icon: Smartphone,
    description: 'A telemedicine application connecting patients with doctors for virtual consultations and prescription management.',
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Applications',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2073',
    icon: Globe,
    description: 'Property listing and management platform with virtual tours and integrated mortgage calculators.',
  },
  {
    title: 'Logistics System',
    category: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070',
    icon: Database,
    description: 'End-to-end supply chain management software with real-time tracking and automated dispatching.',
  },
  {
    title: 'EdTech Portal',
    category: 'E-Learning',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2074',
    icon: Code,
    description: 'Interactive learning management system with video streaming, quizzes, and progress tracking.',
  }
];

const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            Explore our comprehensive collection of digital solutions. From enterprise software to stunning web applications, see how we bring ideas to life.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="relative mb-16 max-w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none md:hidden"></div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory justify-start md:justify-center gap-3 pb-4 px-4 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`snap-center whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-500 text-zinc-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-brand-500/50 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90 z-20"></div>
                  
                  <div className="absolute inset-0 p-6 z-30 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-semibold backdrop-blur-md border border-brand-500/30 flex items-center gap-1.5 uppercase tracking-wider">
                        <project.icon className="w-3 h-3" />
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span>View Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    currentPage === i + 1
                      ? 'bg-brand-500 text-zinc-950'
                      : 'border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-brand-500/50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
