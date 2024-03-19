import axios from 'axios'
import { UserProfile } from './type'

export interface UserProfileResponse extends UserProfile {
  username: string
  stripeId: string
  id: string
  isAdmin: boolean
}

export async function getUserProfile(userId: string) {
  const axiosInstance = axios.create({
    baseURL: 'https://api.linktome.xyz',
  })

  const { data } = await axiosInstance.get<UserProfileResponse>(
    `/user/${userId}?type=username`
  )

  return data
}
