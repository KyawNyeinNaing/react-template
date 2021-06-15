import React from 'react'
import { Link } from 'react-router-dom'
import Components, { Container, Row, Col, Text, Tr, Td } from '../../components'
import { Profile } from './style/profilestyle'
import { BiArrowBack } from "react-icons/bi"

const MyServiceDetail = () => {
  const headerData = [
    {
      title: "Index"
    },
    {
      title: "Service Tickets Number"
    },
    {
      title: "Expired Date"
    },
    {
      title: "Order ID"
    },
    {
      title: "Status"
    }
  ]

  const tableBody = () => (
    <>
      <Tr>
        <Td halign="center">
          <Text className="mobile-caption">Index</Text>
          <Text>1</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Service Tickets Number</Text>
          <Text>654994616</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Expired Date</Text>
          <Text>30/01/2021</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Order ID</Text>
          <Text>123</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Status</Text>
          <Text>Available</Text>
        </Td>
      </Tr>
    </>
  )

  return (
    <>
      <Components.Breadcrumb />
      <Components.Section>
        <Container>
          <Row>
            <Col sm="3">
              <Components.ProfileSidebar profile={true} />
            </Col>
            <Col sm="9">
              <Profile>
                <Text className="title">My Service Ticket 1</Text>
                <Components.TableCom header={headerData} body={tableBody()} />
              </Profile>
              <Link to="/myservice" className="btn-back"><BiArrowBack /> Back to My Service Tickets</Link>
            </Col>
          </Row>
        </Container>
      </Components.Section>
    </>
  )
}

export default MyServiceDetail
