import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupStatus, setPopupStatus] = useState<'success' | 'error' | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    // Email verification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    setEmailError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/codezy.info@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setPopupStatus('success');
        setShowPopup(true);
        setToastMessage('Message sent successfully!');
        setShowToast(true);
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setPopupStatus('error');
      setShowPopup(true);
      setToastMessage('Failed to send message. Please try again.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <>
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
                  <p className="text-zinc-400 text-sm">071 482 2623</p>
                  <p className="text-zinc-400 text-sm">Mon-Fri, 9am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold mb-1">Visit Us</h4>
                  <p className="text-zinc-400 text-sm">No.1459, padalangala</p>
                  <p className="text-zinc-400 text-sm">Sri Lanka</p>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Optional: Add hidden inputs for formsubmit configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from Codezy Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
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
                    onChange={() => setEmailError('')}
                    className={`w-full bg-zinc-950 border ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-zinc-800 focus:border-brand-500/50 focus:ring-brand-500/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all`}
                    placeholder="john@example.com"
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
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
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-brand text-zinc-950 font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              <div className="pt-4 flex justify-center">
                <a
                  href="https://wa.me/94714822623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] font-medium hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${
              popupStatus === 'success' 
                ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-400' 
                : 'bg-red-950/90 border-red-500/50 text-red-400'
            } backdrop-blur-md`}
          >
            {popupStatus === 'success' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            <span className="font-medium">{toastMessage}</span>
            <button onClick={() => setShowToast(false)} className="ml-4 text-current opacity-70 hover:opacity-100 transition-opacity">
              <XCircle className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${popupStatus === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
              
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                popupStatus === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
              }`}>
                {popupStatus === 'success' ? <CheckCircle className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                {popupStatus === 'success' ? 'Message Sent!' : 'Oops, Something Went Wrong'}
              </h3>
              
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {popupStatus === 'success' 
                  ? 'Thank you for reaching out. Your message has been successfully sent and we will get back to you as soon as possible.' 
                  : 'We encountered an error while trying to send your message. Please try again or contact us directly via WhatsApp.'}
              </p>
              
              <button
                onClick={() => setShowPopup(false)}
                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  popupStatus === 'success'
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(5,150,105,0.2)]'
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.2)]'
                }`}
              >
                {popupStatus === 'success' ? 'Done' : 'Try Again'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
