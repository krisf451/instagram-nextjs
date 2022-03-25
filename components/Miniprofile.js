function Miniprofile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src="https://links.papareact.com/3ke"
        alt="temp"
        className="h-16 w-16 transform rounded-full border p-[2px] transition-all duration-150 ease-out hover:scale-125"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">krisf451</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign out</button>
    </div>
  )
}

export default Miniprofile
