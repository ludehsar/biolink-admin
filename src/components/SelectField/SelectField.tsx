import React from 'react'
import Select, { OptionTypeBase } from 'react-select'

export interface SelectFieldProps {
  onChange: (value: OptionTypeBase | null) => void
  options?: OptionTypeBase[]
  value: string | number
  handleInputChange?: (newValue: string) => void
  className?: string
  name?: string
  id?: string
}

const SelectField: React.FC<SelectFieldProps> = ({
  className,
  onChange,
  options,
  value,
  handleInputChange,
  name,
  id,
}) => {
  const defaultValue = (
    options: OptionTypeBase[] | undefined,
    value: string | number
  ): OptionTypeBase | '' | undefined => {
    return options ? options.find((option) => option.value === value) : ''
  }

  return (
    <div className={className}>
      <Select
        name={name}
        id={id}
        isClearable={true}
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
        onInputChange={handleInputChange}
      />
    </div>
  )
}

export default SelectField
