import React, { useState } from 'react'
import Components, { Container, Button, Text } from '../../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const NewPass = (data) => {
  const [showSuccess, setshowSuccess] = useState(false);
  let initialValues = {
    password: '',
    confirmpassword: ''
  }

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required!"),
    confirmpassword: Yup.string()
      .required("Confirm password is required!")
      .oneOf([Yup.ref('password'), null], "Password must match!")
  })

  const onDataSubmit = (values, actions) => {
    const { confirmpassword, ...postValues } = values
    let postData = { ...data, ...postValues }
    setTimeout(async () => {
      console.log('postData', postData)
      actions.setSubmitting(false)
      setshowSuccess(true)
    }, 1000)
  }
  return (
    showSuccess === true ?
    <Components.SuccessMsg />
    :
    <>
      <Components.Section>
        <Container>
          <Components.AuthForm>
            <div className="auth-wrap">
              <Text className="title">New Password</Text>
              <Text className="sub-title">Please provide new password</Text>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => onDataSubmit(values, actions)}>
                {
                  formikProps => (
                    <Form>
                      <div className='auth-form'>
                        <Components.TextInput label="New Password" name="password" type="password" require={true} />
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

export default NewPass
