
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from "../pages/Home"
import Products from '../pages/Products ';
import Category from '../pages/Category';
import Footer from '../components/common/Footer';
import Cart from '../components/cart/Cart';
import Navbar from '../components/Header/Header';
// Hooks react
import { useEffect } from 'react';
// hooks redux
import { useDispatch } from 'react-redux';
// Redux Thunk
import { fetchProducts } from '../features/products/productThunk';
import { fetchCategory } from '../features/category/categoryThunk';
export default function AppRoutes() {
  const dispatch = useDispatch();
    const { product } = useDispatch((state) => state.product);
    useEffect(() => {
      if (product?.length >= 0) {
        return;
      }
      dispatch(fetchProducts({ limit: 10 }));
      dispatch(fetchCategory());
    }, [dispatch, product]);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/category" element={<h1>Category Page</h1>} /> */}
      </Routes>
      <Cart />
      <Footer />
    </BrowserRouter>
  );
}
