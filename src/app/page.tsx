import { Country } from 'src/constant/country'
import { Flag } from 'src/components/Flag/Flag'
import { Grid2Cols } from 'src/components/Grid/Grid2Cols'
import { Grid3Cols } from 'src/components/Grid/Grid3Cols'
import Image from 'next/image'
import { Text } from 'src/components/Text/Text'

export default function Home() {
  return (
    <main className="container mx-auto p-5 sm:p-0">
      <Grid2Cols className="sm:h-[60vh] sm:mx-20 sm:my-16 gap-8">
        <div className="flex flex-col gap-8">
          <h1>
            Streamlining donations in a <u>safe</u> and <u>secure</u> way
          </h1>
          <Text className="text-light-navy sm:text-xl sm:max-w-[300px]">
            Have your voice heard. Support your politician by donating now!
          </Text>
        </div>
        <div className="relative h-[50vh] sm:h-[70%]">
          <Image
            src="/home-hero.png"
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div>
      </Grid2Cols>
      <section className="my-12 sm:my-0">
        <h2 className="max-w-[600px] mx-auto sm:text-center">
          Accepting donations for politicians around the world
        </h2>
        <Grid3Cols className="gap-6 my-16 mx-auto">
          {Country.map((country, idx) => {
            return (
              <div key={idx} className="w-[50%] sm:mx-auto">
                <Flag {...country} key={idx} />
              </div>
            )
          })}
        </Grid3Cols>
      </section>
      <Grid2Cols className="sm:h-[60vh] sm:mx-20 sm:my-16 gap-8">
        <div className="relative h-[60vh] sm:h-[70%] order-2 sm:order-1">
          <Image
            src="/politician.png"
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-8 order-1 sm:order-2">
          <h2>Donate directly to intended recipient at all times</h2>
          <Text className="text-light-navy sm:max-w-[300px]">
            Paragraph about how all our profiles are manually verified and that
            we use secure payment processing platform Stripe Connect to collect
            and distribute donations directly to the politician.
          </Text>
        </div>
      </Grid2Cols>
    </main>
  )
}
