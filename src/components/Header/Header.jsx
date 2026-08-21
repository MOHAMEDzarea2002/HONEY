// react Icons

import Nav from './Navbar';
import Search from './Search';
export default function Navbar() {
  return (
    <header className="sticky  top-0 z-50  backdrop-blur-sm">
      <div className=" md:container mx-auto flex items-center justify-between h-15 p-3 ">
        {/* Links & Logo */}

        <Nav />

        {/* Search & Cart Icons */}

        <Search />
      </div>
    </header>
  );
}
// <nav className=" flex   items-center relative ">
//   {/* icon navbar */}
//   <MdMenuOpen
//     ref={RefIconNavbar}
//     className={`text-2xl cursor-pointer md:hidden primary transition-all duration-300 ease-in-out ${showNavbar ? 'rotate-180' : 'rotate-0'}`}
//     onClick={() => setShowNavbar(!showNavbar)}
//   />

//   {/*Brand Name */}
//   <h1 className=" primary text-2xl ml-3">قطوف النحل</h1>
//   {/* Desktop */}
//   <ul className=" md:flex items-center space-x-2  hidden">
//     {/* <Link to={'/Products'}>Products</Link> */}
//     {navLinks.map((link, index) => (
//       <li key={index}>
//         {link.type.includes('route') ? (
//           <Link
//             onClick={() => setActiveNavbar(link.name)}
//             className={` px-2 rounded-sm cursor-pointer transition-all duration-200 ease-in ${activeNavbar === link.name ? 'bg-amber-500 text-white' : 'bg-transparent text-amber-500 hover:bg-amber-400/20'}`}
//             to={link.path}
//           >
//             {link.name}
//           </Link>
//         ) : (
//           <button
//             onClick={() => handleSectionClick(link.id, link.name)}
//             className={`px-2 rounded-sm cursor-pointer transition-all duration-200 ease-in ${
//               activeNavbar === link.name
//                 ? 'bg-amber-500 text-black'
//                 : 'bg-transparent text-amber-500 hover:bg-amber-400/20'
//             }`}
//           >
//             {link.name}
//           </button>
//         )}
//       </li>
//     ))}
//   </ul>
//   {/* nav mobile */}
//   <ul
//     className={`nav-links flex-col items-center space-y-5 z-100  absolute top-12  bg-black   text-white p-4 rounded-lg shadow-lg text-black min-h-screen  w-50   ${showNavbar ? '-right-3' : '-right-70'} transition-all duration-300 md:hidden `}
//     ref={RefNavbar}
//   >
//     {/* lOGO */}
//     <li className="flex justify-center">
//       <img
//         src="https://res.cloudinary.com/dvvfnrprr/image/upload/v1785856690/logo_afk2f1.jpg"
//         loading="lazy"
//         alt="logo"
//         className="rounded-full w-30
//   "
//       />
//     </li>
//     {navLinks.map((link, index) => (
//       <li key={index}>
//         {link.type.includes('route') ? (
//           <Link
//             onClick={() => setActiveNavbar(link.name)}
//             className={` px-2 rounded-sm cursor-pointer transition-all duration-200 ease-in ${activeNavbar == link.name ? 'bg-amber-500 text-white' : 'bg-transparent text-amber-500 hover:bg-amber-400/20'}`}
//             to={link.path}
//           >
//             {link.name}
//           </Link>
//         ) : (
//           <a
//             onClick={() => setActiveNavbar(link.name)}
//             className={` px-2 rounded-sm cursor-pointer transition-all duration-200 ease-in ${activeNavbar == link.name ? 'bg-amber-500 text-white' : 'bg-transparent text-amber-500 hover:bg-amber-400/20'}`}
//             href={`#${link.id}`}
//           >
//             {link.name}
//           </a>
//         )}
//       </li>
//     ))}
//   </ul>
// </nav>;
