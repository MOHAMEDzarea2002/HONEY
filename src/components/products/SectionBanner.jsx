
export default function ProductsBanner() {
  return (
    <div className=" relative ">
      <div
        className="absolute top-0 left-0 w-full h-full

          bg-black/50
          "
      ></div>
      <img
        src={
          'https://res.cloudinary.com/dvvfnrprr/image/upload/v1786610233/ProductsBanner_nmooml.png'
        }
        loading='lazy'
        className="h-80 w-full object-cover "
      />
    </div>
  );
}
