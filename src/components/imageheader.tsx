// imageheader.tsx (Ultra Compact)
const ImageHeader = () => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="flex items-center gap-3">
        <img 
          className="w-12 h-12 object-contain transform hover:rotate-12 transition-transform duration-200" 
          src="https://img.icons8.com/color/96/000000/todo-list--v1.png" 
          alt="TaskFlow" 
        />
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            TaskFlow
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ImageHeader;