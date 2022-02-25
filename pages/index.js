import { useState } from 'react'
import { signInWithGoogle, useAuth, logout } from '../firebase'

const Home = () => {
  //! for tracking user
  const current_user = useAuth()
  console.log(current_user)
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#121212]">
      <div className="flex h-[300px] w-[500px] flex-col p-10 text-2xl text-white">
        <span>User Mail: {current_user?.email}</span>
        <span>username: {current_user?.displayName}</span>
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={current_user ? logout : signInWithGoogle}
            className="rounded-lg bg-sky-400 p-2 px-6"
          >
            {current_user?.displayName ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
