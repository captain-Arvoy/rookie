import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex flex-row rounded-2xl bg-neutral-600 m-4'>
        <div className='flex flex-row items-center p-4'>
          <a href="#" className='text-base p-4' >Home</a>
          <a href="#" className='text-base p-4' >About</a>
          <a href="#" className='text-base p-4' >Movies</a>
        </div>
        <div className='flex flex-row space-x-4 p-4 ml-auto items-center'>
          <a href="#" className='text-base p-4'> Sign Up </a>
          <a href="#" className='text-base p-4 bg-purple-600 decoration-8 rounded-2xl hover:px-8 '> Login </a>
        </div>
      </div>
    </>
  )
}
