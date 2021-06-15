import React from 'react'
import Components from '../../components'

const Home = () => {
  return (
    <Components.Section>
      <Components.Container>
        <Components.Row>
          <Components.Col space="12">
            <Components.Text as="h3" size="xl" weight="xl">
              Home Page
            </Components.Text>
            <Components.SuccessMsg>
              Success
            </Components.SuccessMsg>
          </Components.Col>
        </Components.Row>
      </Components.Container>
    </Components.Section>
  )
}

export default Home
