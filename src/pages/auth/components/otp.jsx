import React, { useState } from 'react'
import Components, { Container, Button, Text } from '../../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import NewPass from './newpass'

const Otp = ({ type, mobile }) => {
  const [state, setState] = useState(null);
  const [otpVal, setotpVal] = useState(null);
  let initialValues = {
    otp: '',
  }

  const validationSchema = Yup.object({
    otp: Yup.string()
      .required("Verify code is required!")
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(async () => {
      console.log('values', values)
      actions.setSubmitting(false)
      if (type === "forgetpass") {
        setState("newpass")
        setotpVal(values.otp)
      } else {
        setState("success")
      }
    }, 1000)
  }
  return (
    state === "newpass" ?
      <NewPass mobile={mobile} otpVal={otpVal} /> :
      state === "success" ?
        <Components.SuccessMsg /> :
        <>
          <Components.Section>
            <Container>
              <Components.AuthForm>
                <div className="auth-wrap">
                  <Text className="title">Verification</Text>
                  <Text className="sub-title">Enter the verification code we just sent you on your phone number</Text>
                  <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => onDataSubmit(values, actions)}>
                    {
                      formikProps => (
                        <Form>
                          <div className='auth-form'>
                            <Components.TextInput label="Verify Code" name="otp" type="text" require={true} />
                          </div>
                          <div className='footer-btn'>
                            <Button className="btn btn-link">Send code again</Button>
                          </div>
                          <div className='footer-btn'>
                            <Button type='submit' className="btn btn-default">Submit</Button>
                          </div>
                        </Form>
                      )
                    }
                  </Formik>
                </div>
              </Components.AuthForm>
            </Container>
          </Components.Section>
        </>
  )
}

export default Otp
