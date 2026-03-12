import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Elena Rodriguez',
    role: 'CEO, TechFlow Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Codezy completely transformed our digital presence. Their attention to detail and modern design approach helped us increase our conversion rate by 150%.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, DataSync',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The custom web application they built for us is robust, scalable, and incredibly fast. They truly understand modern software architecture.',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Marketing Director, Elevate',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Working with Codezy was a seamless experience. Their UI/UX team is world-class, delivering a product that our users absolutely love.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'CTO, InnovateTech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The mobile app they developed for us exceeded all expectations. It is fast, intuitive, and has significantly boosted our user engagement.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Operations Manager, LogisticsPro',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Their custom software solution streamlined our entire supply chain. The ROI we have seen in just six months is absolutely incredible.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Client <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Don't just take our word for it. Hear from the businesses we've helped grow.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-16 testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name} className="!h-auto">
                <div
                  className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 relative group hover:border-brand-500/30 transition-all duration-300 h-full flex flex-col"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-800 group-hover:text-brand-500/10 transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                    ))}
                  </div>
                  
                  <p className="text-zinc-300 mb-8 leading-relaxed relative z-10 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800 group-hover:border-brand-500/50 transition-colors"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-white font-display font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
