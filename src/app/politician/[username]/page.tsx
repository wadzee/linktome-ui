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
import { useCallback, useEffect, useState } from 'react'
import {
  UserProfileResponse,
  getUserProfile,
} from 'src/services/auth/getUserProfile'
import { useRouter } from 'next/navigation'

export default function PoliticanProfile({
  params,
}: {
  params: { username: string }
}) {
  const router = useRouter()
  const [data, setData] = useState<UserProfileResponse>()
  const [showCustomDonationField, setShowCustomDonationField] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormProps>()

  const onSubmit = async ({ amount }: PaymentFormProps) => {
    const stripeUrl = await createPaymentIntent({
      amount: parseFloat(amount.toString()),
      accountId: data?.stripeId!,
    })

    if (stripeUrl) {
      window.location.assign(stripeUrl)
    }
  }

  const fetchUserProfile = useCallback(
    async (username: string) => {
      const data = await getUserProfile(username)

      if (!data) {
        router.replace('/')
      }

      setData(data)
    },
    [router]
  )

  useEffect(() => {
    if (params.username) {
      fetchUserProfile(params.username)
    }
  }, [fetchUserProfile, params.username])

  if (!data) {
    return (
      <div className="relative min-h-[85vh]">
        <span className="absolute left-[49%] top-[50%]">
          <svg
            className="animate-spin -ml-1 mr-3 text-yellow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={48}
            height={48}
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      </div>
    )
  }

  return (
    <Grid2Cols className="sm:h-[75vh] sm:mx-20 sm:my-16 gap-8">
      <div className="relative sm:h-[70%] aspect-square w-1/2 mx-auto sm:aspect-auto sm:w-full">
        {data?.image && (
          <Image
            fill
            src={`https://linktome-assets.s3.ap-southeast-1.amazonaws.com/${data?.id}/${data?.image}`}
            alt="user-profile"
            className="object-contain rounded-full sm:rounded-2xl"
          />
        )}
      </div>
      <List gap="gap-12">
        <List gap="gap-4">
          <h2>{data?.firstName + ' ' + data?.lastName}</h2>
          <Flag
            name={`${data?.role} ${data?.party}`}
            flag={`/flags/${data?.country?.toLowerCase()}.png`}
          />
        </List>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2Cols className="gap-4 mb-6">
            <Button
              disabled={isSubmitting}
              type="button"
              onClick={() => onSubmit({ amount: 5 })}
            >
              Donate MYR 5
            </Button>
            <Button
              disabled={isSubmitting}
              type="button"
              onClick={() => onSubmit({ amount: 20 })}
            >
              Donate MYR 20
            </Button>
            <Button
              disabled={isSubmitting}
              type="button"
              onClick={() => onSubmit({ amount: 10 })}
            >
              Donate MYR 50
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
                label="Amount (MYR)"
                name="amount"
                register={register}
                required={false}
                type="tel"
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
              content: data?.about,
            },
          ]}
        />
      </List>
    </Grid2Cols>
  )
}
