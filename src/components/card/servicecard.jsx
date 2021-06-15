import React from 'react'
import { ServiceBgImg, ServiceCardWrap } from './style/cardstyle'
import { Link } from 'react-router-dom'
import { Row, Col, Text } from '../../components'

const ServiceCard = ({ data }) => {
  return (
    <ServiceCardWrap>
      <Row>
        {
          data?.map((x, key) => 
          <Col key={key} lg="4" md="6" className="service-card-col">
            <div className="service-bg-color">
              <div className="service-wrap">
                <div className="service-img">
                  <ServiceBgImg data={x?.image || require('../../assets/img/no-img.jpg').default} title={x?.name} className="service-bg-img" />
                </div>
                <div className="service-desc">
                  <Text className="name">{x?.name}</Text>
                  <Text className="desc">{x?.desc}</Text>
                  <Link className="btn btn-white">Explore More</Link>
                </div>
              </div>
            </div>
          </Col>
          )
        }
      </Row>
    </ServiceCardWrap>
  )
}

export default ServiceCard