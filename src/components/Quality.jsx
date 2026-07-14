// icons React
import { ImPower } from 'react-icons/im';
import { FaMicroscope, FaHandFist  } from 'react-icons/fa6';
import {  MdLocalFlorist } from 'react-icons/md';
export default function Quality() {
  return (
    <section className="py-10" id="الجودة لدينا">
      <h1 className="text-3xl font-bold text-center ">الجودة لدينا</h1>
      <div className="box-flex flex justify-center items-center flex-wrap gap-8 pt-8">
        <div className="box  flex justify-center items-center flex-col">
          <FaHandFist className="text-5xl primary" />
          <h2 className="text-lg mt-4">تعزيز المناعة</h2>
          <p className="mt-2 text-gray-600 text-sm">مضادات أكسدة طبيعية قوية</p>
        </div>
        <div className="box  flex justify-center items-center flex-col">
          <ImPower className="text-5xl primary" />
          <h2 className="text-lg mt-4">طاقة طبيعية</h2>
          <p className="mt-2 text-gray-600 text-sm">مصدر فوري للحيوية والنشاط</p>
        </div>
        <div className="box  flex justify-center items-center flex-col">
          <FaMicroscope className="text-5xl primary" />
          <h2 className="text-lg  mt-4">مفحوص مخبرياً</h2>
          <p className="mt-2 text-gray-600 text-sm">ضمان الجودة والنقاء التام</p>
        </div>
        <div className="box  flex justify-center items-center flex-col">
          <MdLocalFlorist className="text-5xl primary" />
          <h2 className="text-lg  mt-4">100% عضوي</h2>
          <p className="mt-2 text-gray-600 text-sm"> من الضبيعة مباشرة لمائدتكم</p>
        </div>
      </div>
    </section>
  );
}
