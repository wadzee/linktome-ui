import { List } from '../List/List'
import { ReactNode } from 'react'
import { Text } from '../Text/Text'
import classNames from 'classnames'

interface CardProps {
  label: string
  children: ReactNode
  order?: string | number
  className?: string
}

export const Card = ({ label, children, order, className }: CardProps) => {
  return (
    <List
      className={classNames(
        className,
        'sm:border-y first:border-y [&:not(:first-child)]:border-b',
        'border-dotted border-brand-gray py-5 sm:px-5'
      )}
      gap="gap-4"
    >
      {order && <Text>{order}.</Text>}
      <Text className={classNames(order && 'text-2xl')}>{label}</Text>
      {children}
    </List>
  )
}
