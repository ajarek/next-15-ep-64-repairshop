
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-home-img bg-cover bg-center bg-no-repeat">
      <main>
        <div className='text-white text-center'>
          <h1>Jarek&apos;s Computer <br />Repair Shop</h1>
          <address>
            78-100 Kołobrzeg <br />
            ul. Główna 123 <br />
          </address>
          <p>Open Daily: 9:00 to 17:00</p>
          <Link href="tel:+48573219230" className='hover:underline'>573-219-230</Link>
        </div>
      </main>
      
    </div>
  );
}
