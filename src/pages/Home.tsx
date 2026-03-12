import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Blog />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
