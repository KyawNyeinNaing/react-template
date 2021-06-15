import React, { useState } from 'react'
import Components, { Container, Button, Text } from '../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Otp from "./components/otp"

const ForgetPass = () => {
  const [useOtp, setuseOtp] = useState(false);
  const [mobile, setmobile] = useState(null);
  let initialValues = {
    mobile: ''
  }

  const validationSchema = Yup.object({
    mobile: Yup.string()
      .required('Phone is required!')
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(async () => {
      console.log('values', values)
      actions.setSubmitting(false)
      setuseOtp(true)
      setmobile(values.mobile)
    }, 1000)
  }

  return (
    useOtp === true ?
      <Otp type="forgetpass" mobile={mobile} />
      :
      <>
        <Components.Section>
          <Container>
            <Components.AuthForm>
              <div className="auth-wrap">
                <Text className="title">Forgot password</Text>
                <Text className="sub-title">Enter phone number associated with your account</Text>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, actions) => onDataSubmit(values, actions)}>
                  {
                    formikProps => (
                      <Form>
                        <div className='auth-form'>
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

export default ForgetPass
