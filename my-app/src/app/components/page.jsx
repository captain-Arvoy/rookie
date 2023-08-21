import Link from 'next/link'
export default function Navbar(){
 return (
    <>
      <div className='flex flex-row rounded-2xl bg-neutral-600'>
        <div className='flex flex-row items-center p-4'>
          <Link href="/Home" className='text-base p-4' >Home</Link>
          <Link href="/About" className='text-base p-4' >About</Link>
          <Link href="/Movies" className='text-base p-4' >Movies</Link>
          <Link href="/dogs" className="text-base p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl hover:after:content-['powered-by-zuckrgram'] hover:after:p-4 hover:after:text-blue-700 hover:after:font-medium " >The great Dog show</Link>
        </div>
        <div className='flex flex-row space-x-4 p-4 ml-auto items-center'>
          <Link href="/signup" className='text-base p-4'> Sign Up </Link>
          <Link href="/login" className='text-base p-4 bg-purple-600 decoration-8 rounded-2xl hover:px-8 '> Login </Link>
        </div>
      </div>
    </>
  );
}
