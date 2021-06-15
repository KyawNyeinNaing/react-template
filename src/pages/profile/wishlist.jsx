import React from 'react'
import Components, { Container, Row, Col, Text, Tr, Td, Image, Button } from '../../components'
import { Profile } from './style/profilestyle'

const Wishlist = () => {
  const headerData = [
    {
      title: "Product"
    },
    {
      title: "Price"
    },
    {
      title: ""
    },
    {
      title: ""
    }
  ]

  const tableBody = () => (
    <>
      <Tr>
        <Td>
          <Text className="mobile-caption">Product</Text>
          <div style={{ width: 100, margin: '5px 10px' }} className="img-wrap">
            {
              <Image src={require("../../assets/img/home_cart_1.png").default} alt="name" />
            }
            <Text style={{ textAlign: "center" }}>Name</Text>
          </div>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Price</Text>
          <Text>10000</Text>
        </Td>
        <Td halign="center" className="addcart-btn">
          <Button className="btn btn-default">Add to cart</Button>
        </Td>
        <Td halign="center">
          <img src={require("../../assets/img/icons/cancel.svg").default} alt="/" />
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
                <Text className="title">My Wishlist</Text>
                <Components.TableCom header={headerData} body={tableBody()} />
              </Profile>
            </Col>
          </Row>
        </Container>
      </Components.Section>
    </>
  )
}

export default Wishlist
