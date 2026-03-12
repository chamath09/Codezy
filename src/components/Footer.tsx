import { Code2, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.604 0 12.017 0z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

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
            <div className="flex items-center gap-4 flex-wrap">
              <a href="https://web.facebook.com/profile.php?id=61582203933911" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/code_z_y/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.pinterest.com/codezy_web/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <PinterestIcon className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCxsT_f6lC7hhsqZ7Hb9-FPw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@codezy_web" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors border border-zinc-800 hover:border-brand-500/30">
                <TikTokIcon className="w-5 h-5" />
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
