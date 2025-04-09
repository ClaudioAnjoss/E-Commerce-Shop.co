export default function Count() {
  return (
    <div className="bg-[#F0EEED] flex items-center border rounded-3xl overflow-hidden">
      <button className="px-5 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white text-lg font-bold">
        -
      </button>
      <span className="px-4">1</span>
      <button className="px-5 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-lg font-bold">
        +
      </button>
    </div>
  )
}
