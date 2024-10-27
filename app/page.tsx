
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-home-img bg-cover bg-center bg-no-repeat max-w-7xl mx-auto">
     
        <div className='text-white text-center  text-2xl font-light flex flex-col  gap-4 bg-black/90 p-12 rounded-xl'>
          <h1 className='text-4xl'>Jarek&apos;s Computer <br />Repair Shop</h1>
          <address>
            78-100 Kołobrzeg <br />
            ul. Główna 123 
          </address>
          <p>Open Daily: 9:00 to 17:00</p>
          <Link href="tel:+48573219230" className='hover:underline'>573-219-230</Link>
        </div>
      
      
    </div>
  );
}
