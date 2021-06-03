import React from 'react'
import Select from 'react-select'

export interface SelectFieldProps {
  onChange: (value: string | number) => void
  options?: any[]
  value?: string | number
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
  const defaultValue = (options?: any[], value?: string | number): any => {
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
