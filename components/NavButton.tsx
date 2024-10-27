import Link from 'next/link'
import { Button } from './ui/button'
import { LucideIcon } from 'lucide-react'
type NavButtonProps = {
  icon: LucideIcon
  label: string
  href?: string
}


export const NavButton = ({ icon: Icon, label, href }: NavButtonProps) => {
  return (
    <Button
      variant='ghost'
      size='icon'
      aria-label={label}
      title={label}
      className='rounded-full'
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon/>
        </Link>
        ): (
        <Icon/>
        )}
    </Button>
  )
}


