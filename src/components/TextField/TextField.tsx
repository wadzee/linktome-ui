import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import { Flex } from '../Flex/Flex'
import { HTMLInputTypeAttribute } from 'react'
import classNames from 'classnames'

interface TextFieldProps<T extends FieldValues> {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  required?: boolean
  type?: HTMLInputTypeAttribute
  errors?: FieldError
}

export function TextField<TValue extends FieldValues>({
  label,
  register,
  required = true,
  type = 'text',
  errors,
  name,
}: TextFieldProps<TValue>) {
  return (
    <>
      <Flex className={classNames('textfield', errors && '!border-red-500')}>
        <input
          required
          autoComplete="off"
          {...register(name, {
            required,
            ...(type === 'email' && {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            }),
          })}
          className={classNames('peer mt-3')}
        />
        <label
          className={classNames(
            'absolute left-5',
            'peer-focus:top-2 peer-focus:text-xs',
            'peer-valid:top-2 peer-valid:text-xs'
          )}
        >
          {label}
        </label>
      </Flex>
      {errors?.message && (
        <span className="-my-2 text-start text-xs mx-5 text-[rgb(239,68,68)]">
          {errors.message}
        </span>
      )}
    </>
  )
}
