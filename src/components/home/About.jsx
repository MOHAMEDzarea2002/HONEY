// component
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-16 bg-black text-white ">
      <div className="container">
        <SectionHeader title={'قصتنا وتاريخنا'} />
        <div className="   md:grid grid-cols-2  items-center gap-4 mt-10">
          <div className="flex items-center justify-center flex-1">
            <img
              src="https://res.cloudinary.com/dvvfnrprr/image/upload/v1784017596/honey_tbr4gg.png"
              loading="lazy"
              alt="about"
              className=" object-cover rounded-lg
      md:min-h-[600px] md:w-[500px] w-[260px] h-[400px] rotate-3
      transition-all duration-300
      cursor-pointer
      hover:rotate-0
      "
            />
          </div>
          {/* Content */}
          <div className="flex flex-col  gap-4  flex-1 text-center md:text-right mt-4 md:mt-0">
            {/* Section Title */}
            <h6>قصتنا وتاريخنا</h6>
            <h1 className=" text-2xl ">التزام بالجودة والاصالة</h1>
            {/* Section Description */}
            <p className="about text-balance 336+3+6-  text-prg ">
              بدأت رحلة قطوف النحل من شغف عميق عميق بالطبيعة والبحث عن افضل المصادر الإنتاج عسل
              يتميز بنقائة وخصائصة العلاجية الفريدة نحن نؤمن بأن العسل ليس مجرد منتج، بل هو هدية من
              الطبيعة تحمل في طياتها فوائد صحية لا حصر لها. نحن نعمل بجد لضمان أن كل قطرة من عسلنا
              تعكس جودة عالية ونقاء تام، مما يجعلها الخيار المثالي لمن يبحثون عن منتج طبيعي وصحي.
            </p>
            {/* experience stats */}

            <div className="stats flex justify-center md:justify-start gap-20 p-3">
              <div>
                <span className="flex flex-col items-center text-4xl font-bold text-amber-900">
                  %100
                </span>
                <span>عسل طبيعي</span>
              </div>
              <div>
                <span className="flex flex-col items-center text-4xl font-bold text-amber-900">
                  +10
                </span>
                <span> عام من الخبرة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
