export default function HoneyButton({ children = "Add to Chrome — It's Free", onClick, disabled ,icon}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group ${disabled ? 'bg-gray-400' : 'bg-gradient-to-r from-[#FF7A00] to-[#FF9500]'} relative px-3 py-1  text-white font-semibold text-base    transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden cursor-pointer flex items-center gap-2.5`}
    >
      {icon && (
        <span className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}

      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
    </button>
  );
}
