import axios from 'axios'

export interface PaymentFormProps {
  amount: number
}

interface PaymentIntentResponse {
  url: string
}

export const createPaymentIntent = async (
  props: PaymentFormProps & { accountId: string }
) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.linktome.xyz',
  })

  const { data } = await axiosInstance.post<PaymentIntentResponse>(
    '/transaction',
    props
  )

  return data.url
}
