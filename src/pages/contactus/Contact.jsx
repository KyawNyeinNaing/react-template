import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Components from '../../components'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const breadcrumb_data = [
  {
    name: 'Contact Us'
  }
]

const ContactUs = () => {
  let initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required("Name is required"),
    phone: Yup.string()
      .min(7, 'Your phone number at least 7 digits!')
      .max(15, 'Your phone number is too much digits!')
      .matches(phoneRegExp, 'Your Phone number is not valid!')
      .required("Phone is required"),
    city: Yup.string()
      .required("City is required"),
    township: Yup.string()
      .required("Township is required"),
    address: Yup.string()
      .required("Address is required"),
    customer_request: Yup.string()
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(async () => {
      console.log('values', values)
      actions.setSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <Components.Breadcrumb data={breadcrumb_data} />
      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col space="12">
              <Components.Text className="title" as="h3" size="xl" weight="xl">Contact Information</Components.Text>
            </Components.Col>
            <Components.Col md="6">

            </Components.Col>
            <Components.Col md="6">
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => onDataSubmit(values, actions)}>
                {
                  formikProps => (
                    <Form>
                      <div className='contact-form'>
                        <Components.TextInput label="Name" name="name" type="text" require={true} />
                        <Components.TextInput label="Email" name="email" type="email" />
                        <Components.TextInput
                          label="Phone" name="phone" type="text" require={true} isNumber={true}
                          onKeyDown={e => e.key !== "Backspace" &&
                            e.key !== "Enter" &&
                            e.keyCode !== 37 &&
                            e.keyCode !== 39 &&
                            e.keyCode !== 46 &&
                            e.keyCode !== 9 &&
                            e.key.match(/[^0-9]/)
                            && e.preventDefault()
                          } />
                        <Components.TextInput label="Subject" name="subject" type="text" />
                        <Components.TextArea label="Message" name="message" type="text" rows_height='80' require={true} />
                        <Components.Button type='submit' className="btn-default">Submit</Components.Button>
                      </div>
                    </Form>
                  )
                }
              </Formik>
            </Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>
      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col space="12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.769871917471!2d96.18594481439455!3d16.837768822856063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193203bd5519f%3A0xaed662230890481f!2sYadanar%20Rd%2C%20Yangon!5e0!3m2!1sen!2smm!4v1616047621134!5m2!1sen!2smm" width="100%" height="400" style={{ border: "none", overflow: "hidden" }} allowFullScreen={true} loading="lazy" title='contact map' />
            </Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>
    </>
  )
}

export default ContactUs
