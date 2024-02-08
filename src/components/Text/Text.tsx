import { ParamHTMLAttributes } from 'react'

export const Text = (props: ParamHTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props} />
}
