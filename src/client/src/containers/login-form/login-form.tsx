import * as React from 'react'
import { Input, Button } from '../../components'

export const LoginForm = () => {
  const FIRST_NAME = 'First Name'
  const LAST_NAME = 'Last Name'
  return (
    <React.Fragment>
      <form>
        <Input placeholder={FIRST_NAME} label={FIRST_NAME} />
        <Input placeholder={LAST_NAME} label={LAST_NAME} />
      </form>
    </React.Fragment>
  )
}