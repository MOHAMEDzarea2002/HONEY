// ui component
import LinkButton from '../ui/linkButton';

export default function CtaSection() {
  return (
    <div className="relative text-center">
      <div className=" relative ">
        <div
          className="absolute top-0 left-0 w-full h-full

          bg-black/50
          "
        ></div>

        <video
          className="h-80 w-full object-cover "
          // autoPlay

          // loop
          playsInline
          preload="metadata"
        >
          {/* <source
            src={
              'https://res.cloudinary.com/dvvfnrprr/video/upload/v1786842151/CTA_SECTION_qixcr4.mp4'
            }
          /> */}
        </video>
      </div>
      <div className=" absolute top-1/2 left-1/2 -translate-1/2  text-white   ">
        <h3 className="text-2xl">اكتشف مذاق العسل الطبيعي</h3>
        <p className="text-sm my-5 text-gray-300">
          استمتع بأجود أنواع العسل الطبيعي ومنتجات النحل المختارة بعناية.
        </p>

        <LinkButton to={'products'} children={'اكتشف المنتجات'} />

      </div>
    </div>
  );
}
