import React from 'react'

import { Container } from './styles'

type Options = {
  label: string
  value: string
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Options[]
  helperText?: string
}

const Select: React.FC<Props> = ({
  children,
  options,
  helperText,
  ...props
}) => {
  return (
    <Container>
      <select {...props}>
        <option selected></option>
        {options &&
          options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}

        {!options && <option selected>{helperText}</option>}
      </select>
    </Container>
  )
}

export default Select
