import axios from 'axios'

export interface RegisterFormProps {
  firstName: string
  lastName: string
  email: string
  country: string
}

interface RegisterResponse {
  url: string
}

export const RegisterUser = async (props: RegisterFormProps) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.linktome.xyz',
  })

  const { data } = await axiosInstance.post<RegisterResponse>(
    '/register',
    props
  )

  return data.url
}
