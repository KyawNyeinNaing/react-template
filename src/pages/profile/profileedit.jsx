import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Components, { Container, Row, Col, Button } from '../../components'
import { Profile } from './style/profilestyle'

const ProfileEdit = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  let initialValues = { 
    name: '',  
    mobile: '', 
    email: '', 
    address1: '', 
    state_division: '', 
    township_id: ''
  }
  const onUpdateProfileSubmit = (values, actions) => {
    const { state_division, township_id, ...postValues } = values
    let postData = { ...postValues, state_division: +values.state_division, township_id: +values.township_id }
    actions.setSubmitting(true)
    setTimeout(async () => {
      actions.setSubmitting(false)
      console.log('postData', postData)
    }, 1000)
  }
  return (
    <>
      <Components.Breadcrumb />
      <Components.Section>
        <Container>
          <Row>
            <Col sm="12">
              <Profile background="" borderRadius="15" padding="25px 30px" sm_padding="10px 20px">
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={
                    Yup.object({
                      name: Yup.string()
                        .max(20, 'Must be 15 characters or less')
                        .required('Your Name is required'),
                      mobile: Yup.string()
                        .min(7, 'Your phone number at least 7 digits!')
                        .max(13, 'Your phone number is too much digits!')
                        .matches(phoneRegExp, 'Your Phone number is not valid!')
                        .required('Phone number is required'),
                      email: Yup.string()
                        .email('Invalid email address'),
                      state_division: Yup.string()
                        .required('State and Division is required'),
                      township_id: Yup.string()
                        .required('Township is required'),
                    })
                  }
                  onSubmit={(values, actions) => onUpdateProfileSubmit(values, actions)}>
                    
                  {
                    formikProps => (
                      <Form>
                        <Row>
                          <Col md="6" className="edit-col">
                            <Components.TextInput label="Name" name="name" type="text" />
                            <Components.TextInput
                              label="Phone" name="mobile" type="text" isNumber={true} disabled
                              onKeyDown={e => e.key !== "Backspace" &&
                                e.key !== "Enter" &&
                                e.keyCode !== 37 &&
                                e.keyCode !== 39 &&
                                e.keyCode !== 46 &&
                                e.keyCode !== 9 &&
                                e.key.match(/[^0-9]/)
                                && e.preventDefault()
                              } 
                            />
                            <Components.TextInput label="Email" name="email" type="email" placeholder="Enter your email" />
                            <Components.TextInput label="Birthday" name="birthday" type="text" />
                          </Col>
                          <Col md="6" className="edit-col">
                            <Components.TextArea label="Address" name="address1" type="text" rows_height="130" />
                            <Components.Select
                            label="State/ Division"
                            name="state_division"
                            >
                              <option value=''>Select State/ Division</option>
                              <option value=''>Yangon</option>
                              <option value=''>Mandalay</option>
                            </Components.Select>
                            <Components.Select label="Township" name="township_id" >
                              <option value=''>Select Township</option>
                              <option value=''>Hlaing</option>
                              <option value=''>Sanchaung</option>
                            </Components.Select>
                          </Col>
                        </Row>
                        <div className="edit-btn-wrap">
                          <Row className="edit-btn-row">
                            <Col md="6" className="save-btn edit-btn-col">
                              <Button type='submit' className="btn btn-gray">
                                Save
                              </Button>
                            </Col>
                            <Col md="6" className="edit-btn-col">
                              <Button type='button' className="btn btn-gray">
                                Cancel
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Form>
                    )
                  }
                </Formik>
              </Profile>
            </Col>
          </Row>
        </Container>
      </Components.Section>
    </>
  )
}

export default ProfileEdit
