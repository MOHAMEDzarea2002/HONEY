
// icons React
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
export default function Footer() {
  
  return (
    <section className="dark:bg-amber-950/15 py-10 dark:text-black bg-black text-white">
      <div
        className="footer  py-5 flex md:flex-row flex-col
      items-center  justify-between     text-center container m-auto"
      >
        <div className="logo ">
          <h1 className="text-2xl font-bold my-3 primary">قطوف النحل</h1>
          <p className="text-prg text-gray-400">منتجات عسل طبيعية 100% من الطبيعة إلى مائدتكم</p>
        </div>
        {/* Links */}
        <div className="links ">
          <ul className="links flex justify-center items-center gap-4  my-2 dark:text-white">
            <li>
              <a href="#" className="  transition-colors duration-300 cursor-pointer">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#منتجاتنا" className="  transition-colors duration-300 cursor-pointer">
                منتجاتنا
              </a>
            </li>
            <li>
              <a href="#معلومات-عنا" className="  transition-colors duration-300 cursor-pointer">
                معلومات عنا
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="follow-us ">
            <p className=" text-sm dark:text-white ">تابعنا على وسائل التواصل الاجتماعي</p>
            {/* social */}
            <div className="social-icons flex justify-center gap-4 mt-2">
              <a
                href="https://web.facebook.com/profile.php?id=61574387085541"
                className="text-gray-400 primary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/qutof.alnahl/"
                className="text-gray-400  transition-colors duration-300 primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram className="text-2xl" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=201092309835&text&type=phone_number&app_absent=0"
                className="text-gray-400 primary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-prg ">&copy; 2024 قطوف النحل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </section>
  );
}
