import React from 'react'
import Components from '../../components'
import Placeholder from '../../components/fakeimg'
import { FooterContainer, FooterCol, Contact } from './style/FooterStyle'
import { BiMap } from 'react-icons/bi'
import { ImPhone } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'

const Footer = () => {
  const tmp = {
    width: 196,
    height: 76,
    backgroundColor: Components?.colors.light,
    color: Components?.colors.muted,
    text: 'Logo (196 x 76)'
  }
  return (
    <>
      <FooterContainer>
        <Components.Container>
          <Components.Row>
            <FooterCol md="3" sm="6">
              <Contact>
                <Placeholder {...tmp} />
              </Contact>
              <Contact>
                <BiMap />
                <Components.Text color="muted">No 23, Yadana Street, 16/2 Ward, Thingangyun Township, Yangon, Myanmar.</Components.Text>
              </Contact>
              <Contact>
                <ImPhone />
                <div className="contact">
                  <a href="tel:+959123456">+959123456</a>
                  <a href="tel:+959123456">+959123456</a>
                  <a href="tel:+959123456">+959123456</a>
                  <a href="tel:+959123456">+959123456</a>
                </div>
              </Contact>
              <Contact>
                <IoIosMail />
                <div className="contact">
                  <a href="mailto: info@mail.com">xxxx@mail.com</a>
                  <a href="mailto: info@mail.com">xxxx@mail.com</a>
                  <a href="mailto: info@mail.com">xxxx@mail.com</a>
                </div>
              </Contact>
            </FooterCol>
          </Components.Row>
        </Components.Container>
      </FooterContainer>
      <Components.Copyright data="React Template" bgColor="dark" color="muted" />
    </>
  )
}

export default Footer