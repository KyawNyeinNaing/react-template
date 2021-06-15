import React from 'react'
import { Link } from 'react-router-dom'
import Components, { Container, Row, Col, Text, Tr, Td, Image } from '../../components'
import { Profile } from './style/profilestyle'
import { BiArrowBack } from "react-icons/bi"

const OrderDetail = () => {
  const headerData = [
    {
      title: "Product"
    },
    {
      title: "Price"
    },
    {
      title: "Quantity"
    },
    {
      title: "Subtotal"
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
        <Td halign="center">
          <Text className="mobile-caption">Quantity</Text>
          <Text>1</Text>
        </Td>
        <Td halign="center">
          <Text className="mobile-caption">Subtotal</Text>
          <Text>10000</Text>
        </Td>
      </Tr>
      <Tr className="total">
        <Td colSpan="3" halign="right">
          <Text className="total-title">Subtotal</Text>
        </Td>
        <Td halign="center">
          <Text className="total-price">12000</Text>
        </Td>
      </Tr>
      <Tr className="total">
        <Td colSpan="3" halign="right">
          <Text className="total-title">Discount</Text>
        </Td>
        <Td halign="center">
          <Text className="total-price">(-)300</Text>
        </Td>
      </Tr>
      <Tr className="total">
        <Td colSpan="3" halign="right">
          <Text className="total-title">Delivery Charge</Text>
        </Td>
        <Td halign="center">
          <Text className="total-price">0</Text>
        </Td>
      </Tr>
      <Tr className="total border">
        <Td colSpan="3" halign="right">
          <Text className="total-title">Tax</Text>
        </Td>
        <Td halign="center">
          <Text className="total-price">12000</Text>
        </Td>
      </Tr>
      <Tr className="total">
        <Td colSpan="3" halign="right">
          <Text className="total-title title-bold">Total</Text>
        </Td>
        <Td halign="center">
          <Text className="total-price title-bold">12000</Text>
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
                <Text className="title">Order Detail</Text>
                <Text className="order-number">Order No. 0001</Text>
                <Text className="order-address">Deliver To : No.97, Xxxxxxxxx Street, Lanmadaw, Yangon</Text>
                <Components.TableCom header={headerData} body={tableBody()} />
              </Profile>
              <Link to="/orderhistory" className="btn-back"><BiArrowBack /> Back To My Order</Link>
            </Col>
          </Row>
        </Container>
      </Components.Section>
    </>
  )
}

export default OrderDetail
