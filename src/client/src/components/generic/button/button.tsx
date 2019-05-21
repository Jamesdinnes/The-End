import * as React from 'react'

interface IProps {
  label: string
  disabled: boolean
  onClick: () => unknown
}

export const Button = ({ label, onClick, disabled }: IProps) => (
  <button onClick={onClick} disabled={disabled}> {label} </button>
)