import React from 'react'
import Components from '../../components'

const Grid = () => {
  return (
    <>
      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col space="12">12 Columns</Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>

      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col md="6">6 Columns</Components.Col>
            <Components.Col md="6">6 Columns</Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>

      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col md="4">4 Columns</Components.Col>
            <Components.Col md="4">4 Columns</Components.Col>
            <Components.Col md="4">4 Columns</Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>

      <Components.Section>
        <Components.Container>
          <Components.Row>
            <Components.Col md="3">3 Columns</Components.Col>
            <Components.Col md="3">3 Columns</Components.Col>
            <Components.Col md="3">3 Columns</Components.Col>
            <Components.Col md="3">3 Columns</Components.Col>
          </Components.Row>
        </Components.Container>
      </Components.Section>
    </>
  )
}

export default Grid
