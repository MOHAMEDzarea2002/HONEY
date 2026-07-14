// Icon
import { MdDone } from 'react-icons/md';

export default function MessageDon() {
  return (
    <div className="text-2xl   fixed flex justify-center  h-full w-full left-0 top-0 backdrop-blur-sm">
      {/* Progress_message */}
      <div className="w-full">
        <div className="progress_message h-1 bg-amber-200 absolute top-16 "></div>
      </div>
      {/* Message_done */}
      <div className="p-2  flex justify-center absolute top-50  gap-1.5 ">
        <div className="bg-amber-400  rounded-full flex justify-center items-center h-5 w-5 mt-1">
          <MdDone />
        </div>
        <div>
          <h2 className="text-amber-400">اكتمل الطلب</h2>
          <p className="text-lg text-white">سيتم التواصل معك بعد إرسال الطلب لتأكيده</p>
        </div>
      </div>
    </div>
  );
}
