import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'The Future of Web Development in 2026',
    excerpt: 'Explore the latest trends, frameworks, and technologies shaping the digital landscape this year.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
    date: 'Mar 10, 2026',
    author: 'Alex Carter',
    category: 'Technology',
  },
  {
    title: 'Why UI/UX Design is Crucial for SaaS',
    excerpt: 'Learn how intuitive design can significantly increase user retention and conversion rates.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
    date: 'Feb 28, 2026',
    author: 'Sarah Jenkins',
    category: 'Design',
  },
  {
    title: 'Scaling Your Custom Software Architecture',
    excerpt: 'Best practices for building robust, scalable applications that grow with your business.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
    date: 'Feb 15, 2026',
    author: 'David Chen',
    category: 'Development',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-zinc-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Latest <span className="text-gradient">Insights</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg"
            >
              Stay updated with our latest thoughts on web development, design, and technology.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors group"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-brand-400 text-xs font-semibold border border-zinc-800">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-sm line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
