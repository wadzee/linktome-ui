'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { List } from 'src/components/List/List'
import { Text } from 'src/components/Text/Text'
import { RefreshStripeOnboardingURL } from 'src/services/auth/refreshStripeOnboarding'

export default function RefreshStripeOnboarding() {
  const queryParam = useSearchParams()
  const stripeId = queryParam.get('id')

  const fetchRefreshStripeURL = useCallback(async (id: string) => {
    const url = await RefreshStripeOnboardingURL(id)
    if (url) {
      window.location.assign(url)
    }
  }, [])

  useEffect(() => {
    if (stripeId) {
      fetchRefreshStripeURL(stripeId)
    }
  }, [stripeId, fetchRefreshStripeURL])

  return (
    <List
      alignItems="items-center"
      justifyContent="justify-center"
      className="min-h-[85vh]"
    >
      <span>
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
      <Text className="font-bold">Redirecting you to Stripe Onboarding...</Text>
    </List>
  )
}
