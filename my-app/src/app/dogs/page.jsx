import Image from 'next/image'
const getDogImage = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random",{
    next: {
      revalidate: 3,
    },
    });
  return res.json();
}
export default async function DogGram(){
  const dog = await getDogImage();
  return(
    <Image src={dog.message} alt="Dog image" width={300} height={400} className='m-auto rounded-2xl'/>
  )
} 
