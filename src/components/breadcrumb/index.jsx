import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from '../core'
import { BreadcrumbSection } from './style/BreadcrumbStyle'
import Media from 'react-media'

const Breadcrumb = ({ data }) => {
  return (
    <Media query="(min-width: 768px)" render={() => (
      <BreadcrumbSection>
        <Container>
          <Row>
            <Col space="12">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {data?.length > 0 &&
                  data.map((item, key) =>
                    <li key={key}>
                      {item?.link ?
                        <Link to={item?.link}>{item.name}</Link>
                        :
                        <span>
                          {
                            item?.name?.length > 17 ?
                              item?.name?.slice(0, 17).padEnd(20, '.')
                              :
                              item?.name
                          }
                        </span>
                      }
                    </li>
                  )
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </BreadcrumbSection>
    )} />
  )
}

export default Breadcrumb
