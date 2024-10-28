import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className='px-2 w-full min-h-dvh flex flex-col justify-center items-center'>
      <div className='mx-auto py-4 flex flex-col justify-center items-center gap-4'>
        <h2 className='text-2xl'>Page Not Found</h2>
        <Image
          className='m-0 rounded-xl'
          src='/images/not-found.png'
          width={300}
          height={300}
          sizes='300px'
          alt='Page Not Found'
          priority={true}
          title='Page Not Found'
        />
        <Link
          className='underline text-green-700 text-xl'
          href='/home'
        >
          Come back Home
        </Link>
      </div>
    </div>
  )
}
