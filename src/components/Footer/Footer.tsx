import Image from 'next/image'
import Link from 'next/link'
import { Text } from 'src/components/Text/Text'

export const Footer = () => {
  return (
    <footer className="p-4 sm:py-8 sm:px-0 container mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
      <Link href="/" className="order-2 sm:order-1">
        <Image
          src="/linktome-logo-light.svg"
          alt="linktome-logo"
          height={24}
          width={126}
        />
      </Link>
      <div className="flex flex-col sm:flex-row gap-8 order-1 sm:order-2 items-center">
        <button>
          <Text className="underline text-yellow">Terms and conditions</Text>
        </button>
        <button>
          <Text className="underline text-yellow">Privacy policy</Text>
        </button>
      </div>
    </footer>
  )
}
