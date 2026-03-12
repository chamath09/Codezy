import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const allPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2026',
    excerpt: 'Explore the latest trends, frameworks, and technologies shaping the digital landscape this year.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
    date: 'Mar 10, 2026',
    author: 'Alex Carter',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Why UI/UX Design is Crucial for SaaS',
    excerpt: 'Learn how intuitive design can significantly increase user retention and conversion rates.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
    date: 'Feb 28, 2026',
    author: 'Sarah Jenkins',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Scaling Your Custom Software Architecture',
    excerpt: 'Best practices for building robust, scalable applications that grow with your business.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
    date: 'Feb 15, 2026',
    author: 'David Chen',
    category: 'Development',
  },
  {
    id: 4,
    title: 'How AI is Transforming E-commerce',
    excerpt: 'Discover the impact of artificial intelligence on personalized shopping experiences and inventory management.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070',
    date: 'Jan 22, 2026',
    author: 'Elena Rodriguez',
    category: 'AI & Tech',
  },
  {
    id: 5,
    title: 'The Rise of Serverless Computing',
    excerpt: 'Why more startups are moving to serverless architectures to reduce costs and improve scalability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034',
    date: 'Jan 10, 2026',
    author: 'Alex Carter',
    category: 'Cloud',
  },
  {
    id: 6,
    title: 'Mastering Tailwind CSS for Rapid Prototyping',
    excerpt: 'A comprehensive guide to using utility-first CSS frameworks to speed up your development workflow.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=2070',
    date: 'Dec 05, 2025',
    author: 'Sarah Jenkins',
    category: 'Development',
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Insights, tutorials, and updates from the Codezy team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
