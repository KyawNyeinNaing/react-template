import React from 'react'
import { Link } from 'react-router-dom'
import Components, { Container, Row, Col, Text, Tr, Td } from '../../components'
import { Profile } from './style/profilestyle'

const MyService = () => {
  const headerData = [
    {
      title: "Service Tickets"
    },
    {
      title: "Available"
    },
    {
      title: "Used"
    },
    {
      title: "Expired"
    },
    {
      title: ""
    }
  ]

  const tableBody = () => (
    <>
      <Tr>
        <Td halign="center">
          <Text className="mobile-caption">Service Tickets</Text>
          <Text>Service Ticket Title 1</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Available</Text>
          <Text>4</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Used</Text>
          <Text>2</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Expired</Text>
          <Text>2</Text>
        </Td>
        <Td halign="center" className='link'>
          <Link to='/myservice/myservicedetail/01'>Detail</Link>
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
              <Components.Sidebar profile={true} />
            </Col>
            <Col sm="9">
              <Profile>
                <Text className="title">My Service Ticket</Text>
                <Components.TableCom header={headerData} body={tableBody()} />
              </Profile>
            </Col>
          </Row>
        </Container>
      </Components.Section>
    </>
  )
}

export default MyService
