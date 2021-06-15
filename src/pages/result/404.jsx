import React from 'react'
import { Col, Container, Row, Text, Section } from '../../components/core'

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col space="6">
            <Text weight="xxl" size="md">404 Not Found</Text>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default NotFound