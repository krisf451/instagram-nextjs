import { useSession, signOut } from 'next-auth/react'

function Miniprofile() {
  const { data: session } = useSession()

  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src={session?.user?.image}
        alt="temp"
        className="h-16 w-16 transform rounded-full border p-[2px] transition-all duration-150 ease-out hover:scale-125"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-sm font-semibold text-blue-400">
        Sign out
      </button>
    </div>
  )
}

export default Miniprofile
