import { PiShootingStar } from 'react-icons/pi';
import Video from '../assets/Honey_dripping_from_dipper_202605291937.mp4';
export default function HeroSection() {
  return (
    <section>
      <div className="hero-section     z-30">
        {/* Hero Image */}
        <div
          className="relative

         "
        >
          <div
            className="absolute top-0 left-0 w-full h-full
          dark:bg-linear-to-l bg-linear-to-t from-yellow-100/60 dark:from-black/95 to-transparent
          "
          ></div>

          <video className=" w-full object-cover h-[calc(100dvh-40px)] " autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>

          {/* Content */}
          <div
            className=" absolute top-0 left-0 w-full h-full flex items-center justify-center
       "
          >
            <div className="  p-4  text-black dark:text-white ">
              <span className="bg-amber-50/20 px-2 py-1 rounded-lg flex  items-center w-fit gap-1 mb-4">
                <PiShootingStar className="text-white " />
                عمل طبيعي %100
              </span>
              <h1 className="primary text-4xl  font-bold my-5 ">قطوف النحل</h1>
              <p className="text-lg ">أفضل أنواع العسل الطبيعي</p>
              <p className=" w-3/5 my-4 font-bold">
                نقدم لكم أرقي انواع العسل البلدي والبري المستخلص بعناية من مناحلنا في مناطق مختلفة
                من المحافظات, حيث يتم جمع ، مما يمنحه نكهات فريدة وفوائد صحية متعددة. نحن نضمن جودة
                منتجاتنا من خلال عمليات استخراج طبيعية وبدون أي إضافات كيميائية، مما يجعل عسلنا
                خيارًا مثاليًا لعشاق العسل الطبيعي والصحي.
              </p>
              <div className="buttons flex space-x-4">

                <a
                  href="#منتجاتنا"
                  className="button  hover:bg-amber-100 cursor-pointer  text-black"
                >
                  تسوق الأن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
