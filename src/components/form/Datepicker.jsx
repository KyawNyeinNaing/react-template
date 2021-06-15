import React from 'react'
import { useField, useFormikContext } from 'formik'
import { InputGroup, Label, ErrorMessage, Span } from '../core/Form'
import colors from '../constant/Color'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props)
  return (
    <InputGroup {...props}>
      <Label htmlFor={props?.id || props?.name}>
        {label}
        {props?.require === true && <span style={{ color: colors.secondary }}> *</span>}
      </Label>
      <DatePicker
        id={props?.id || props?.name}
        className={`${meta.touched && meta.error ? 'error' : ''} ${props?.isNumber === true && 'phone'} datepicker`}
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={val => {
          setFieldValue(field.name, val);
        }}
      />
      {props?.isNumber === true && <Span InputPhone />}
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </InputGroup>
  )
}

export default DatePickerField
