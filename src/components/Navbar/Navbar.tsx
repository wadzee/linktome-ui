import { Button } from '../Button/Button'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="p-4 sm:p-0 container mx-auto flex justify-between items-center">
      <Link href="/">
        <Image
          src="/linktome-logo-light.svg"
          alt="linktome-logo"
          height={32}
          width={126}
        />
      </Link>
      <div className="hidden sm:block h-[68px]">
        <Button variant="secondary">Login</Button>
        <Link href="/politician">
          <Button>I&apos;m a politician</Button>
        </Link>
      </div>
      <div className="sm:hidden">
        <Image
          src="/mobile-menu.svg"
          alt="hamburger-logo"
          height={28}
          width={28}
        />
      </div>
    </nav>
  )
}
