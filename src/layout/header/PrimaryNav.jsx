import React from 'react'
import { NavLink } from 'react-router-dom'
import Components from '../../components'
import { NavContainer, MenuDropdown } from './style/HeaderStyle'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { closeDrawer } from '../../utils'

export default function PrimaryNav() {

  return (
    <NavContainer className="nav">
      <Components.Container>
        <Components.Row>
          <Components.Col space="12">
            <div className="nav-container">
              <ul>
                <li onClick={() => closeDrawer()}>
                  <NavLink to="/grid">Grid</NavLink>
                </li>
                <li onClick={() => closeDrawer()}>
                  <NavLink to="/type">Typography</NavLink>
                </li>
                <li onClick={() => closeDrawer()}>
                  <NavLink to="/form">Form</NavLink>
                </li>
                <li onClick={() => closeDrawer()}>
                  <NavLink to="/card">Card</NavLink>
                </li>
              </ul>
              <MenuDropdown className="language">
                <p className="selected-lang">
                  <img src={require("../../assets/img/icons/england-flag.jpg").default} alt="language" />
                  <span>English</span>
                  <MdKeyboardArrowDown />
                </p>
                <div className="drp-wrap">
                  <ul className="drp-ul lang-list">
                    <li onClick={() => closeDrawer()}><img src={require("../../assets/img/icons/england-flag.jpg").default} alt="england" /><span>English</span></li>
                    <li onClick={() => closeDrawer()}><img src={require("../../assets/img/icons/myanmar-flag.jpg").default} alt="myanmar" /><span>Myanmar</span></li>
                  </ul>
                </div>
              </MenuDropdown>
            </div>
          </Components.Col>
        </Components.Row>
      </Components.Container>
    </NavContainer>
  )
}