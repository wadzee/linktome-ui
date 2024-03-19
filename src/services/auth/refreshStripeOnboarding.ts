import axios from 'axios'

interface RefreshStripeOnboardingURLResponse {
  url: string
}

export const RefreshStripeOnboardingURL = async (stripeId: string) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.linktome.xyz',
  })

  const { data } = await axiosInstance.post<RefreshStripeOnboardingURLResponse>(
    '/stripe/refresh',
    {
      stripeId,
    }
  )

  return data.url
}
