// icons React
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import { Link } from 'react-router';
export default function Footer() {
  return (
    <section className="dark:bg-amber-950/15 py-10 dark:text-black bg-black text-white ">
      <div className="footer grid grid-cols-1 md:grid-cols-3  text-center md:text-right  container  py-5 gap-3 ">
        {/* Logo */}
        <div className=" w-fit">
          <h1 className="text-2xl font-bold primary border-b-2 w-fit">قطوف النحل</h1>
          <p className="text-prg text-gray-400 my-2">
            منتجات عسل طبيعية 100% من الطبيعة إلى مائدتكم
          </p>
          <div className="social-icons flex  gap-4 ">
            <a
              href="https://web.facebook.com/profile.php?id=61574387085541"
              className="text-gray-400  transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/qutof.alnahl/"
              className="text-gray-400  transition-colors duration-300 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="text-2xl" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=201092309835&text&type=phone_number&app_absent=0"
              className="text-gray-400  transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
        {/* Links */}
        <div className=" w-fit">
          <h3 className="text-[22px] text-amber-400 border-b-2 w-fit">الصفحات</h3>
          <ul className="links dark:text-white my-2">
            <li className="relative my-2">
              <Link
                to={'/'}
                className="md:after:absolute after:content-[''] after:h-2 after:w-2 after:rounded-full  after:top-2 after:-right-3 text-sm after:transition-all after:duration-300 cursor-pointer hover:after:bg-amber-100"
              >
                الرئيسية
              </Link>
            </li>
            <li className="relative my-2">
              <Link
                to={'/products'}
                className=" md:after:absolute after:content-[''] after:h-2 after:w-2 after:rounded-full  after:top-2 after:-right-3 text-sm after:transition-all after:duration-300 cursor-pointer hover:after:bg-amber-100"
              >
                منتجاتنا
              </Link>
            </li>
            <li className="relative my-2 ">
              <Link
                to={'/about'}
                className="md:after:absolute after:content-[''] after:h-2 after:w-2 after:rounded-full  after:top-2 after:-right-3 text-sm after:transition-all after:duration-300 cursor-pointer hover:after:bg-amber-100
                translate-3.5
                hover:translate-2.5
                "
              >
                معلومات عنا
              </Link>
            </li>
          </ul>
        </div>
        {/*  contact us */}
        <div className=" w-fit">
          <h3 className="text-[22px] text-amber-400 border-b-2 w-fit ">تواصل معنا</h3>
          <ul className="text-sm my-2">
            <li className="flex items-center my-2">
              <span className=" text-lg mr-2 ml-2">
                <FaPhoneAlt />
              </span>
              01066498560
            </li>
            <li className="flex items-center ">
              <span className="text-lg mr-2 ml-2">
                <MdEmail />
              </span>
              <span>mohamedzarea84@gmail.com</span>
            </li>
          </ul>
          {/* social */}

          {/* Location
           */}
          <div className="flex items-center">
            <span className=" text-lg mr-2 ml-2">
              <FaLocationDot />
            </span>
            المنصوره-ميت-غمر
          </div>
        </div>
      </div>
    </section>
  );
}
