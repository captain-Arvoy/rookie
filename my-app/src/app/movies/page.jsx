import Image from 'next/image'
export default function Movies(){
  return(
    <div className="m-4">
      <Image src="/Movies/spiderman.jpg" fill={true} alt="Spiderman-homecoming" />
    </div>
  )
}
