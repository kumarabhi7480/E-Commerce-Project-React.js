import {useTitle} from '../../hooks/useTitle';

import { FeaturedProducts } from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonials} from "./components/Testimonials";
import {Faq} from './components/Faq';
export default function HomePage() {
  useTitle("Access Latest Computer Science eBooks")
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}
