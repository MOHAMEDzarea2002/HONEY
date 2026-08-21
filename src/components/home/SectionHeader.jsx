
export default function SectionHeader({title,supTitle}) {
  return (
    <div className="text-right ">
      <p className="text-sm md:text-base font-medium"> {supTitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title} </h2>
    </div>
  );
}
