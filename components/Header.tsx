import {HomeIcon, File, UsersRound, User, UserRound} from 'lucide-react'
import {NavButton} from '@/components/NavButton'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'

const Header = () => {
  return (
    <header className='w-full animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'>
      <div className="flex items-center justify-between h-8 ">
           <div className="flex items-center gap-2">
            <NavButton icon={HomeIcon} label='Home' href='/home'/>
            <Link href='/home' className='flex justify-center items-center gap-2 ml-0' title='Home'>
            <h1 className='hidden sm:block text-xl m-0 mt-1 '>Computer Repair Shop</h1>
            </Link>
           </div>
           <div className="flex items-center gap-4 px-4">
           <NavButton icon={File} label='Tickets' href='/tickets'/>
           <NavButton icon={UserRound} label='Customers' href='/customers'/>
           <ModeToggle/>
           </div>
      </div>
      </header>
  )
}

export default Header