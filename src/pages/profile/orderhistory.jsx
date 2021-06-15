import React from 'react'
import { Link } from 'react-router-dom'
import Components, { Container, Row, Col, Text, Tr, Td } from '../../components'
import { Profile } from './style/profilestyle'

const OrderHistory = () => {
  const headerData = [
    {
      title: "Order No."
    },
    {
      title: "Order Date"
    },
    {
      title: "Items"
    },
    {
      title: "Total Amount"
    },
    {
      title: "Status"
    },
    {
      title: ""
    }
  ]

  const tableBody = () => (
    <>
      <Tr>
        <Td halign="center">
          <Text className="mobile-caption">Order No.</Text>
          <Text>00001</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Order Date</Text>
          <Text>16/06/2020</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Items</Text>
          <Text>Item Name One</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Total Amount</Text>
          <Text>100,000 KS</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Status</Text>
          <Text>Shipped</Text>
        </Td>
        <Td halign="center" className='link'>
          <Link to='/orderhistory/orderdetail/01'>Detail</Link>
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
                <Text className="title">My Order</Text>
                <Components.TableCom header={headerData} body={tableBody()} />
              </Profile>
            </Col>
          </Row>
        </Container>
      </Components.Section>
    </>
  )
}

export default OrderHistory
