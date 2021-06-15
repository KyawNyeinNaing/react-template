import React from 'react'
import Components from '../../components'

const breadcrumb_data = [
  {
    name: 'Privacy Policy'
  }
]

const PrivacyPolicy = () => {
  return (
    <>
      <Components.Breadcrumb data={breadcrumb_data} />
      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col md='3'>
              <Components.Sidebar />
            </Components.Col>
            <Components.Col md="9">
              <Components.RTEContent>
                <h5>Privacy Policy</h5>
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </Components.RTEContent>
            </Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>
    </>
  )
}

export default PrivacyPolicy