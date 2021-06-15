import React from 'react'
import styled from 'styled-components'
import colors from '../../components/constant/Color'
import { Section, Container, Row, Col, Text } from '../../components'
const Support = () => {
  return (
    <SupportSection>
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="support-wrap">
              <div className="support-img">
                <img src={require("../../assets/img/delivery.svg").default} alt="" />
              </div>
              <div className="support-desc">
                <Text weight="xl" size="md">Free Shipping</Text>
                <Text className="desc">For orders from 30000Ks</Text>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="support-wrap">
              <div className="support-img">
                <img src={require("../../assets/img/delivery.svg").default} alt="" />
              </div>
              <div className="support-desc">
                <Text weight="xl" size="md">Free Shipping</Text>
                <Text className="desc">For orders from 30000Ks</Text>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="support-wrap">
              <div className="support-img">
                <img src={require("../../assets/img/delivery.svg").default} alt="" />
              </div>
              <div className="support-desc">
                <Text weight="xl" size="md">Free Shipping</Text>
                <Text className="desc">For orders from 30000Ks</Text>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="support-wrap">
              <div className="support-img">
                <img src={require("../../assets/img/delivery.svg").default} alt="" />
              </div>
              <div className="support-desc">
                <Text weight="xl" size="md">Free Shipping</Text>
                <Text className="desc">For orders from 30000Ks</Text>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SupportSection>
  )
}

const SupportSection = styled(Section)`
  background: ${colors.white};
  .support-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 767px) {
      margin-bottom: 15px;
    }
    .support-img {
      margin-right: 15px;
    }
    .support-desc {
      .desc {
        margin-top: 10px;
        color: ${colors.muted};
      }
    }
  }
`

export default Support
