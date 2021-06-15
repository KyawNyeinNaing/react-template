import React from 'react'
import Components from '../../components'

const breadcrumb_data = [
  {
    name: 'About Us'
  }
]

const AboutUs = () => {
  return (
    <>
      <Components.Breadcrumb data={breadcrumb_data} />
      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col space="12">
              <Components.Text as="h3" size="xl" weight="xl">
                About Us
              </Components.Text>
            </Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>
    </>
  )
}

export default AboutUs
