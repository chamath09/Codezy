import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's Build Something <br />
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Ready to take your digital presence to the next level? Contact us today to discuss your project requirements and see how Codezy can help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold mb-1">Email Us</h4>
                  <p className="text-zinc-400 text-sm">codezy.info@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold mb-1">Call Us</h4>
                  <p className="text-zinc-400 text-sm">+1 (555) 123-4567</p>
                  <p className="text-zinc-400 text-sm">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold mb-1">Visit Us</h4>
                  <p className="text-zinc-400 text-sm">123 Innovation Drive</p>
                  <p className="text-zinc-400 text-sm">Tech District, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm"
          >
            <form action="https://formsubmit.co/codezy.info@gmail.com" method="POST" className="space-y-6">
              {/* Optional: Add hidden inputs for formsubmit configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from Codezy Website" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-zinc-300">Service Required</label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-400 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="web-dev">Website Development</option>
                  <option value="web-app">Web Application</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="custom">Custom Software</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all resize-none"
                  placeholder="Tell us about your project goals, timeline, and budget..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-brand text-zinc-950 font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
              
              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] font-medium hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
