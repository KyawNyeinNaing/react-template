import React from 'react'
import Components, { Container, Button, Text } from '../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const ChangePass = () => {
  let initialValues = {
    oldpassword: '',
    newpassword: '',
    confirmpassword: ''
  }

  const validationSchema = Yup.object({
    oldpassword: Yup.string()
      .required("Old password is required!"),
    newpassword: Yup.string()
      .required("New password is required!"),
    confirmpassword: Yup.string()
      .required("Confirm new password is required!")
      .oneOf([Yup.ref('password'), null], "Confirm password & new password must match!")
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
              <Text className="title">Change Password</Text>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => onDataSubmit(values, actions)}>
                {
                  formikProps => (
                    <Form>
                      <div className='auth-form'>
                        <Components.TextInput label="Old Password" name="oldpassword" type="password" require={true} />
                        <Components.TextInput label="New Password" name="newpassword" type="password" require={true} />
                        <Components.TextInput label="Confirm Password" name="confirmpassword" type="password" require={true} />
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

export default ChangePass
