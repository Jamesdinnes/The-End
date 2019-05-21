import * as React from 'react'
import './input.scss'

interface IProps {
  label?: string
  placeholder?: string
  defaultValue?: string
}

export const Input = ({ label, placeholder, defaultValue }: IProps): JSX.Element => (
  <label>
    {label}
    <input name={label} placeholder={placeholder} value={defaultValue || ""}/>
  </label>
)