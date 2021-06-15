import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Components, { Container, Button, Text } from '../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Otp from './components/otp'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignUp = () => {
  const [useOtp, setuseOtp] = useState(false);
  let initialValues = {
    name: '',
    mobile: '',
    date: "",
    password: '',
    confirmpassword: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, 'Must be 20 characters or less!')
      .required("Name is required!"),
    mobile: Yup.string()
      .min(7, 'Your phone number at least 7 digits!')
      .max(15, 'Your phone number is too much digits!')
      .matches(phoneRegExp, 'Your Phone number is not valid!')
      .required("Phone is required!"),
    password: Yup.string()
      .required("Password is required!"),
    confirmpassword: Yup.string()
      .required("Confirm password is required!")
      .oneOf([Yup.ref('password'), null], "Password must match!")
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(async () => {
      console.log('values', values)
      actions.setSubmitting(false)
      setuseOtp(true)
    }, 1000)
  }

  return (
    useOtp === true ?
      <Otp type="signin" />
      :
      <>
        <Components.Section>
          <Container>
            <Components.AuthForm>
              <div className="auth-wrap">
                <Text className="title">Create a new account</Text>
                <Text className="sub-title">Already have an account? <Link to="/signin">Login</Link> here</Text>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, actions) => onDataSubmit(values, actions)}>
                  {
                    props => {
                      const {
                        values,
                        setFieldValue
                      } = props;
                      return (
                        <Form>
                          <div className='auth-form'>
                            <Components.TextInput label="Name" name="name" type="text" require={true} />
                            <Components.TextInput
                              label="Phone" name="mobile" type="text" require={true} isNumber={true}
                              onKeyDown={e => e.key !== "Backspace" &&
                                e.key !== "Enter" &&
                                e.keyCode !== 37 &&
                                e.keyCode !== 39 &&
                                e.keyCode !== 46 &&
                                e.keyCode !== 9 &&
                                e.key.match(/[^0-9]/)
                                && e.preventDefault()
                              } />
                            <Components.DatePickerField
                              label="Birthday"
                              name="date"
                              value={values.date}
                              onChange={setFieldValue}
                            />
                            <Components.TextInput label="Password" name="password" type="password" require={true} />
                            <Components.TextInput label="Confirm Password" name="confirmpassword" type="password" require={true} />
                          </div>
                          <div className='footer-btn'>
                            <Button type='submit' className="btn btn-default">Submit</Button>
                          </div>
                        </Form>
                      )
                    }
                  }
                </Formik>
              </div>
            </Components.AuthForm>
          </Container>
        </Components.Section>
      </>
  )
}

export default SignUp
