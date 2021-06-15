import React from 'react'
import Placeholder from '../fakeimg'
import { Section, Container, Row, Col } from '../core'
import colors from '../constant/Color'

const CenterAds = props => {
  const tmp = {
    ...props,
    height: 250,
    backgroundColor: colors.light,
    text: 'ADS - 1170 x 250'
  }
  return (
    <Section className="center-ads" style={{ padding: 0 }}>
      <Container>
        <Row>
          <Col space="12">
            <Placeholder {...tmp} />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default CenterAds
