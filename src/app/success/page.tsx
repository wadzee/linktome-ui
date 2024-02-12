import { List } from 'src/components/List/List'
import { Text } from 'src/components/Text/Text'

export default function SuccessPage() {
  return (
    <main className="container mx-auto h-[85vh]">
      <List className="text-center h-full justify-center max-w-[600px] mx-auto">
        <h1>Thank you for your support</h1>
        <Text className="text-light-navy text-xl">
          Shortly, you’ll receive a receipt from our payment processing platform
          Stripe Connect for your record keeping.
        </Text>
      </List>
    </main>
  )
}
