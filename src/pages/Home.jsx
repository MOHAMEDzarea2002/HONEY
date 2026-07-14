
// import './App.css';
import Navbar from '../components/Nav';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/About';
import Products from '../components/Products';
import Quality from '../components/Quality';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

// service
import { getProducts } from '../services/Product.Service';
// Hooks
import { useFetch } from '../Hooks/useFetch';
export default function Home() {
  const {Loading} =useFetch(getProducts)

if (Loading)
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="text-white animate-pulse text-xl">برجاء الأنتظار.....</div>
    </div>
  );
  return (
    <div className="">
      <Navbar />

      <main>
        <HeroSection />
        <AboutUs />
        <Products />
        <Quality />

        <Footer />


        <Cart />



      </main>
    </div>
  );
}
