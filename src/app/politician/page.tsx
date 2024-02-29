'use client'

import { RegisterFormProps, RegisterUser } from 'src/services/auth/register'

import { Accordian } from 'src/components/Accordian/Accordian'
import { Button } from 'src/components/Button/Button'
import { Card } from 'src/components/Card/Card'
import { Flex } from 'src/components/Flex/Flex'
import { Grid2Cols } from 'src/components/Grid/Grid2Cols'
import { Grid3Cols } from 'src/components/Grid/Grid3Cols'
import { HomeFaqs } from 'src/constant/homeFaq'
import { HowItWorks } from 'src/constant/howItWorks'
import Image from 'next/image'
import Link from 'next/link'
import { List } from 'src/components/List/List'
import { SelectField } from 'src/components/Inputs/SelectField'
import { Text } from 'src/components/Text/Text'
import { TextField } from 'src/components/Inputs/TextField'
import { useForm } from 'react-hook-form'

export default function PolictianPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormProps>()

  const onSubmit = async (input: RegisterFormProps) => {
    const onboardingUrl = await RegisterUser(input)
    if (onboardingUrl) {
      window.location.assign(onboardingUrl)
    }
  }

  return (
    <main className="container mx-auto p-5 sm:p-0">
      <Grid2Cols className="sm:h-[60vh] sm:mx-20 sm:my-16 gap-8">
        <List className="order-2 sm:order-1">
          <h1>
            <u>Start today</u> and collect donations from your supporters
          </h1>
          <Text className="text-light-navy sm:text-xl sm:max-w-[300px]">
            Join our platform to start your political fundraising journey.
          </Text>
          <Button className="sm:w-fit">Join now</Button>
        </List>
        <div className="relative h-[60vh] sm:h-[70%] order-1 sm:order-2">
          <Image
            src="/politician-hero.png"
            alt="poltician-hero-image"
            fill
            className="object-contain"
          />
        </div>
      </Grid2Cols>
      <Grid2Cols className="sm:h-[60vh] sm:mx-20 sm:my-16 gap-8 mt-12">
        <div className="relative h-[60vh] sm:h-[70%] order-2 sm:order-1">
          <Image
            src="/how-it-works.png"
            alt="how-it-works-image"
            fill
            className="object-contain"
          />
        </div>
        <List className="order-1 sm:order-2">
          <h2>Donate paid directly to your bank account</h2>
          <Text className="text-light-navy sm:max-w-[75%]">
            Simplify your finances. Experience swift and direct transfers your
            funds, your account. Say goodbye to delays and paperwork, and keep
            your campaign running smoothly.
          </Text>
        </List>
      </Grid2Cols>
      <section>
        <List>
          <List className="sm:text-center max-w-[650px] mx-auto">
            <h2>Monitor your fundraising performance</h2>
            <Text className="text-light-navy">
              Stay in control with real-time insights. Our platform equips you
              with comprehensive analytics to track donor engagement, identify
              trends, and make informed decisions, ensuring your fundraising
              strategy is always optimized
            </Text>
          </List>
          <Grid3Cols className="sm:gap-10">
            <Card label="Funds raised to date">
              <h2>$10,500</h2>
            </Card>
            <Card label="No. of donations">
              <h2>32</h2>
            </Card>
            <Card label="Next payment">
              <Flex>
                <h2>$250.00</h2>
                <List gap="gap-0">
                  <Flex gap="gap-2">
                    <Image
                      src="/uptrend.svg"
                      alt="uptrend-logo"
                      height={24}
                      width={24}
                    />
                    <Text>3%</Text>
                  </Flex>
                  <Text>since last week</Text>
                </List>
              </Flex>
            </Card>
          </Grid3Cols>
        </List>
      </section>
      <section className="relative w-full h-[500px] my-8 sm:my-24">
        <Image
          src="/politician-rally.png"
          fill
          alt="rally-pic"
          className="rounded-2xl object-center object-cover"
        />
      </section>
      <section>
        <Grid3Cols className="sm:gap-10">
          {HowItWorks.map(({ title, content }, idx) => (
            <Card label={title} order={idx + 1} key={idx} className="h-full">
              <Text className="text-light-navy">{content}</Text>
            </Card>
          ))}
        </Grid3Cols>
      </section>
      <Accordian className="my-12" accordians={HomeFaqs} />
      <section className="border border-brand-gray border-dotted rounded-2xl p-5 sm:p-12">
        <List className="text-center" gap="gap-6">
          <h2>Join now</h2>
          <Text>
            Fill in your details and we&apos;ll create an account for you
          </Text>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <Grid2Cols className="gap-6 sm:gap-4">
              <TextField<RegisterFormProps>
                label="First Name"
                name="firstName"
                register={register}
                errors={errors.firstName}
              />
              <TextField<RegisterFormProps>
                label="Last Name"
                name="lastName"
                register={register}
                errors={errors.lastName}
              />
              <TextField<RegisterFormProps>
                label="Email"
                name="email"
                register={register}
                type="email"
                errors={errors.email}
              />
              <SelectField<RegisterFormProps>
                name="country"
                register={register}
                defaultValue="Malaysia"
                options={[
                  {
                    label: 'Malaysia',
                    value: 'Malaysia',
                  },
                  { label: 'New Zealand', value: 'New Zealand' },
                ]}
              />
              {/* <TextField<RegisterFormProps>
                label="Country"
                name="country"
                register={register}
                defaultValue="Malaysia"
                disabled
                errors={errors.country}
              /> */}
            </Grid2Cols>
            <Text isTextCenter className="max-w-[400px] mx-auto">
              By clicking &apos;Submit&apos; you agree to our{' '}
              <Link href="/">Privacy Policy</Link> and {''}
              <Link href="/">Terms & Conditions</Link>
            </Text>
            <Button
              isLoading={isSubmitting}
              className="sm:w-fit sm:mx-auto rounded-full "
            >
              Submit
            </Button>
          </form>
        </List>
      </section>
    </main>
  )
}
