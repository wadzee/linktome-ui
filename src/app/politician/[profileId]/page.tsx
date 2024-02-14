'use client'

import {
  PaymentFormProps,
  createPaymentIntent,
} from 'src/services/payment/createPaymentIntent'

import { Accordian } from 'src/components/Accordian/Accordian'
import { Button } from 'src/components/Button/Button'
import { Flag } from 'src/components/Flag/Flag'
import { Grid2Cols } from 'src/components/Grid/Grid2Cols'
import Image from 'next/image'
import { List } from 'src/components/List/List'
import { TextField } from 'src/components/Inputs/TextField'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function PoliticanProfile({
  params,
}: {
  params: { profileId: string }
}) {
  const [showCustomDonationField, setShowCustomDonationField] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormProps>()

  const onSubmit = async ({ amount }: PaymentFormProps) => {
    const stripeUrl = await createPaymentIntent({
      amount: parseFloat(amount.toString()),
      accountId: params.profileId,
    })

    if (stripeUrl) {
      window.location.assign(stripeUrl)
    }
  }

  return (
    <main className="container mx-auto p-5 sm:p-0">
      <Grid2Cols className="sm:h-[75vh] sm:mx-20 sm:my-16 gap-8">
        <div className="relative sm:h-[70%] aspect-square w-1/2 mx-auto sm:aspect-auto sm:w-full">
          <Image
            fill
            src="/profile.png"
            alt="user-profile"
            className="object-contain rounded-full sm:rounded-none"
          />
        </div>
        <List gap="gap-12">
          <List gap="gap-4">
            <h2>John Smith</h2>
            <Flag
              name="Prime Minister | Democrat"
              flag="/flags/australia.png"
            />
          </List>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2Cols className="gap-4 mb-6">
              <Button
                disabled={isSubmitting}
                type="button"
                onClick={() => onSubmit({ amount: 5 })}
              >
                Donate $5
              </Button>
              <Button
                disabled={isSubmitting}
                type="button"
                onClick={() => onSubmit({ amount: 20 })}
              >
                Donate $20
              </Button>
              <Button
                disabled={isSubmitting}
                type="button"
                onClick={() => onSubmit({ amount: 10 })}
              >
                Donate $10
              </Button>
              {!showCustomDonationField && (
                <Button
                  isLoading={isSubmitting}
                  variant="secondary"
                  onClick={() => setShowCustomDonationField(true)}
                  className="border border-secondary-dark text-[#fff]"
                >
                  Custom Amount
                </Button>
              )}
            </Grid2Cols>
            {showCustomDonationField && (
              <div>
                <TextField<PaymentFormProps>
                  label="Amount ($)"
                  name="amount"
                  register={register}
                  required={false}
                  errors={errors.amount}
                />
                <Button
                  className="mt-4 sm:float-right w-full"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Donate
                </Button>
              </div>
            )}
          </form>

          <Accordian
            className="border-t border-brand-gray border-dotted"
            accordians={[
              {
                title: 'About me',
                content:
                  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit ante, posuere vulputate sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit ante, posuere vulputate sollicitudin.</p>',
              },
            ]}
          />
        </List>
      </Grid2Cols>
    </main>
  )
}
