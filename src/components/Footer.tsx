import { Code2, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-zinc-950">
                <Code2 size={24} strokeWidth={3} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Codezy
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Building powerful digital solutions for modern businesses worldwide. We specialize in web development, UI/UX design, and custom software.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Website Development</Link></li>
              <li><Link to="/#services" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Web Applications</Link></li>
              <li><Link to="/#services" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">UI/UX Design</Link></li>
              <li><Link to="/#services" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Custom Software</Link></li>
              <li><Link to="/#services" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Website Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/#about" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/portfolio" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Our Work</Link></li>
              <li><Link to="/#pricing" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Blog</Link></li>
              <li><Link to="/#contact" className="text-zinc-400 hover:text-brand-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-500/50 transition-colors"
              />
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-gradient-brand text-zinc-950 font-semibold text-sm hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Codezy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
