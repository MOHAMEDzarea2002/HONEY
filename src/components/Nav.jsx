import { FaBagShopping } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';
import { MdMenuOpen } from 'react-icons/md';
import { useCart } from '../Hooks/useCart';

export default function Navbar() {
  const { cart } = useCart();

  // state
  const [showNavbar, setShowNavbar] = useState(false);
  const { setCartOpen, isCartOpen } = useCart();
  // ref
  const RefIconNavbar = useRef();
  const RefNavbar = useRef();
  // handleclickouteside
  useEffect(() => {
    const handleclickouteside = (event) => {
      if (
        RefNavbar.current &&
        !RefNavbar.current.contains(event.target) &&
        RefIconNavbar.current &&
        !RefIconNavbar.current.contains(event.target)
      ) {
        setShowNavbar(false);
      }
    };
    document.addEventListener('pointerdown', handleclickouteside);
    return () => document.removeEventListener('pointerdown', handleclickouteside);
  }, []);
  
  return (
    <div className="sticky  top-0 z-50 dark:bg-yellow-700/60  backdrop-blur-sm">
      <nav className="navbar md:container mx-auto flex   items-center  h-15 p-3 justify-between">
        <div className=" flex  items-center relative  space-x-10 ">
          {/* icon menu */}
          <div className="text-2xl cursor-pointer md:hidden primary " ref={RefIconNavbar}>
            <MdMenuOpen
              className={`transition-all duration-300 ease-in-out ${showNavbar ? 'rotate-180' : 'rotate-0'}`}
              onClick={() => setShowNavbar(!showNavbar)}
            />
          </div>
          {/* name brand */}
          <h1 className="logo primary text-2xl">قطوف النحل</h1>
          {/* Desktop */}
          <ul className="nav-links  items-center space-x-4  md:flex hidden">
            <li className="link">
              <a href="#">الصفحة الرئيسية</a>
            </li>

            <li className="link">
              <a href="#معلومات-عنا"> معلومات عنا</a>
            </li>
            <li className="link">
              <a href="#منتجاتنا"> منتجاتنا</a>
            </li>
            <li>
              <a href="#الجودة لدينا"> الجودة لدينا</a>
            </li>
            <li className="link">
              <a href="#اتصل-بنا">تواصل معنا</a>
            </li>
          </ul>
          {/* nav mobile */}
          <ul
            className={`nav-links flex-col items-center space-y-8 z-100  absolute top-12  bg-black   text-white p-4 rounded-lg shadow-lg text-black min-h-screen  w-50   ${showNavbar ? '-right-3' : '-right-70'} transition-all duration-300 md:hidden `}
            ref={RefNavbar}
          >
            <li className="flex justify-center">
              <img
                src="/src/assets/logo.jpg"
                alt="logo"
                className="rounded-full w-30
            "
              />
            </li>
            <li>
              <a href="#">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="#معلومات-عنا">معلومات عنا</a>
            </li>
            <li>
              <a href="#منتجاتنا"> منتجاتنا</a>
            </li>

            <li>
              <a href="#الجودة لدينا"> الجودة لدينا</a>
            </li>
            <li>
              <a href="#"> تواصل معنا</a>
            </li>
          </ul>
        </div>
        {/* Search and Cart Icons */}
        <div>
          <div className="icons flex space-x-4 items-center text-2xl text-black cursor-pointer ">
            <div
              className={`${isCartOpen ? 'hidden ' : 'block'} relative`}
              onClick={() => setCartOpen(!isCartOpen)}
            >
              <FaBagShopping className="primary" />
              {cart.length >= 1 ? (
                <span className="absolute -top-2  text-sm left-5 bg-neutral-400 rounded-full h-5 w-5 flex justify-center items-center">
                  {cart.length}
                </span>
              ) : null}
            </div>
            <IoSearch />
          </div>
        </div>
      </nav>
    </div>
  );
}
