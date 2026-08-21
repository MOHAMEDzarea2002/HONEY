import { useEffect, useRef, useState } from 'react';
// react icons
import { MdMenuOpen } from 'react-icons/md';

// React Router
import { Link, useNavigate } from 'react-router';

export default function Navbar() {
  // navigate
  // refIcon
  const RefIconNavbar = useRef();
  // refNav
  const RefNavbar = useRef();
  // State Active Link
  const [activeNavbar, setActiveNavbar] = useState('الصفحة الرئيسية');
  // state Menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // handleClickOutSide Menu Mobile
  useEffect(() => {

    const handleClickOutSide = (event) => {
      if (
        RefNavbar.current &&
        !RefNavbar.current.contains(event.target) &&
        RefIconNavbar.current &&
        !RefIconNavbar.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutSide);

    return () => document.removeEventListener('pointerdown', handleClickOutSide);
  }, []);

  // Links Navbar
  const navLinks = [
    { name: 'الصفحة الرئيسية', type: 'section' },
    { name: 'منتجاتنا', type: 'route', path: '/products' },
    { name: 'التصنيفات', type: 'route', path: '/category' },
    { name: 'معلومات عنا', type: 'section', id: 'about' },
    { name: 'الجودة لدينا', type: 'section', id: 'quality' },
  ];

    const handleSectionClick = (id, name) => {
      setActiveNavbar(name);
      if (!id) {
        navigate('/');
        return;
      }
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/#${id}`);
      }
    };

  return (
    <div>
      <nav className=" flex   items-center relative ">
        {/* icon navbar */}
        <MdMenuOpen
          ref={RefIconNavbar}
          className={`text-2xl cursor-pointer md:hidden primary transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/*Brand Name */}
        <h1 className=" primary text-2xl ml-3">قطوف النحل</h1>

        {/* Desktop */}
        <ul className=" md:flex items-center space-x-2  hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.type.includes('route') ? (
                <Link
                  onClick={() => setActiveNavbar(link.name)}
                  className={` px-2  cursor-pointer transition-all duration-200 ease-in text-amber-500 ${activeNavbar === link.name ? 'border-b-2 border-black  ' : 'bg-transparent  hover:bg-amber-400/20'}`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleSectionClick(link.id, link.name)}
                  className={` px-2 py-1  cursor-pointer transition-all duration-200 ease-in text-amber-500 ${activeNavbar === link.name ? 'border-b-2 border-black ' : 'bg-transparent  hover:bg-amber-400/20'}`}
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
        {/* nav mobile */}
        <ul
          className={`nav-links flex-col items-center space-y-5 z-100  absolute top-12  bg-black   text-white p-4 rounded-lg shadow-lg text-black min-h-screen  w-50   ${isMobileMenuOpen ? '-right-3' : '-right-70'} transition-all duration-300 md:hidden `}
          ref={RefNavbar}
        >
          {/* lOGO */}
          <li className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dvvfnrprr/image/upload/v1785856690/logo_afk2f1.jpg"
              loading="lazy"
              alt="logo"
              className="rounded-full w-30
            "
            />
          </li>
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.type.includes('route') ? (
                <Link
                  onClick={() => handleSectionClick(link.id, link.name)}
                  className={` px-2 cursor-pointer transition-all duration-200 ease-in ${activeNavbar === link.name ? 'border-b-2' : 'bg-transparent text-amber-500 hover:bg-amber-400/20'}`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleSectionClick(link.id, link.name)}
                  className={`px-2  cursor-pointer transition-all duration-200 ease-in ${
                    activeNavbar === link.name
                      ? 'border-b-2 '
                      : 'bg-transparent text-amber-500 hover:bg-amber-400/20'
                  }`}
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
