// component
import HeroSection from '../components/home/HeroSection';
import AboutUs from '../components/home/About';
import Quality from '../components/home/Quality';
import FeatureProduct from '../components/home/FeatureProducts';
import CtaSection from '../components/home/CtaSection';
import Category from '../components/home/SectionCategory';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const id = window.location.hash.substring(1);

    if (!id) return;

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);

  }, []);





  return (
    <main className="">
      <HeroSection />
      <Category/>
      <FeatureProduct />
      <AboutUs />
      <Quality />
      <CtaSection/>

    </main>
  );
}
