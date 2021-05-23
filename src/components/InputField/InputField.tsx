import { useField } from 'formik'
import React, { InputHTMLAttributes } from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { InputType } from 'reactstrap/es/Input'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  placeholder: string
  name: string
  size?: undefined
  type?: InputType
  className?: string
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, className, ...props }) => {
  const [field, { error }] = useField(props)

  return (
    <FormGroup {...{ className }}>
      <Label for={field.name}>{label}</Label>
      <Input {...field} {...props} id={field.name} {...{ placeholder }} invalid={!!error} />
      {error && <FormFeedback invalid="true">{error}</FormFeedback>}
    </FormGroup>
  )
}

export default InputField
