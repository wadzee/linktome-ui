'use client'

import { Button } from '../Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { List } from '../List/List'
import { Text } from '../Text/Text'
import classNames from 'classnames'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export const Navbar = () => {
  const router = useParams()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  console.log('showMobileMenu', showMobileMenu)

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
      {!router?.profileId && (
        <div className="hidden sm:block h-[68px]">
          <Button variant="secondary">Login</Button>
          <Link href="/politician">
            <Button isSquare>I&apos;m a politician</Button>
          </Link>
        </div>
      )}
      {router?.profileId && (
        <div className="h-[68px]">
          <Text>Share</Text>
        </div>
      )}
      <div className="sm:hidden" onClick={() => setShowMobileMenu(true)}>
        <Image
          src="/mobile-menu.svg"
          alt="hamburger-logo"
          height={28}
          width={28}
        />
      </div>
      <div
        className={classNames(
          showMobileMenu && 'max-w-screen-sm overscroll-none',
          'fixed z-50 top-0 right-0 h-screen max-w-0 transition-[max-width] duration-500 w-full bg-primary-dark'
        )}
      >
        {showMobileMenu && (
          <span
            className="absolute top-4 right-5 scale-[4] rotate-45 text-yellow"
            onClick={() => setShowMobileMenu(false)}
          >
            +
          </span>
        )}
        <List
          className={classNames(
            'h-full justify-center text-center p-5 overflow-hidden',
            !showMobileMenu && 'hidden'
          )}
          gap="gap-6"
        >
          <h2>Join our platform</h2>
          <Text>
            If you are politician from any of these countries, you can join our
            platform and start raising funds.
          </Text>
          <Link href="/politician" onClick={() => setShowMobileMenu(false)}>
            <Button className="w-full">I&apos;m a politician</Button>
          </Link>
          <Button
            className="h-fit border border-secondary-dark text-white"
            variant="secondary"
          >
            Login
          </Button>
        </List>
      </div>
    </nav>
  )
}
