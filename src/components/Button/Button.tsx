import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  isSquare?: boolean
}

export const Button = ({
  variant = 'primary',
  isSquare = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        variant === 'primary' ? 'button-primary' : 'button-secondary',
        isSquare && 'py-3 px-16 rounded-none',
        'py-4 px-6 rounded-full',
        className
      )}
      {...rest}
    />
  )
}
