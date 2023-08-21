import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className='navbar flex flex-row rounded-2xl bg-neutral-600'>
        <div className='flex flex-row items-center p-4'>
          <a href="/Home" className='text-base p-4' >Home</a>
          <a href="/About" className='text-base p-4' >About</a>
          <a href="/Movies" className='text-base p-4' >Movies</a>
        </div>
        <div className='flex flex-row space-x-4 p-4 ml-auto items-center'>
          <Link href="/signup" className='text-base p-4'> Sign Up </Link>
          <Link href="/login" className='text-base p-4 bg-purple-600 decoration-8 rounded-2xl hover:px-8 '> Login </Link>
        </div>
      </div>
      <div className='p-28 bg-purple-700 m-4 rounded-2xl'>
        Hello
      </div>
    </>
  )
}
