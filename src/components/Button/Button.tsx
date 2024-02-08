import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        variant === 'primary' ? 'button-primary' : 'button-secondary',
        'py-3 px-16',
        className
      )}
      {...rest}
    />
  )
}
