import React from 'react'
import { Link } from 'react-router-dom'
import Components, { Container, Button, Text } from '../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { AiFillFacebook } from 'react-icons/ai'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignIn = () => {
  let initialValues = {
    mobile: '',
    password: ''
  }

  const validationSchema = Yup.object({
    mobile: Yup.string()
      .min(7, 'Your phone number at least 7 digits!')
      .max(15, 'Your phone number is too much digits!')
      .matches(phoneRegExp, 'Your Phone number is not valid!')
      .required("Phone is required!"),
    password: Yup.string()
      .required("Password is required!")
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(async () => {
      console.log('values', values)
      actions.setSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <Components.Section>
        <Container>
          <Components.AuthForm>
            <div className="auth-wrap">
              <Text className="title">Log in to your Account</Text>
              <Text className="sub-title">Don't have an account? <Link to="/signup">Register</Link> here</Text>
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
                        <Components.TextInput label="Password" name="password" type="password" require={true} />
                      </div>
                      <div className='footer-btn forget-btn'>
                        <Link to="/forgetpassword" className="btn btn-link">Forget password?</Link>
                      </div>
                      <div className='footer-btn'>
                        <Button type='submit' className="btn btn-default">Login</Button>
                      </div>
                      <div className="divider"><span>or</span></div>
                      <div className='footer-btn fb-btn'>
                        <Button className="btn btn-default"><AiFillFacebook /> Login with facebook</Button>
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

export default SignIn
