import React from 'react'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import Components from '../../components'
import Placeholder from '../../components/fakeimg'
import { NavContainer, MenuIcon } from './style/HeaderStyle'
import { BiSearch } from 'react-icons/bi'

export default function SecondaryNav() {
  const tmp = {
    dsk: {
      width: 196,
      height: 76,
      backgroundColor: Components?.colors.light,
      color: Components?.colors.muted,
      text: 'Logo (196 x 76)'
    },
    sp: {
      width: 144,
      height: 56,
      color: Components?.colors.muted,
      text: 'Logo (144 x 56)'
    }
  }
  return (
    <NavContainer className="top-nav">
      <Components.Container>
        <Components.Row>
          <Components.Col space="12">
            <div className="d-flex">
              <Link to="/" className="logo-img">
                <Media queries={{
                  dskView: '(min-width: 768px)',
                  spView: '(max-width: 767px)'
                }}>
                  {matches => (
                    <>
                      {matches.dskView && <Placeholder {...tmp.dsk} />}
                      {matches.spView && <Placeholder {...tmp.sp} />}
                    </>
                  )}
                </Media>

                {/* <img className="steadfast-logo" src={require('../../assets/img/icons/stead-fast-logo.png').default} alt="logo" /> */}
              </Link>

              <div className="nav-center">
                <Components.Input type="text" placeholder="Search product" className="search-box" />
                <div className="search-icon">
                  <BiSearch />
                </div>
              </div>

              <div className="nav-right">
                <MenuIcon className="menu-btn">
                  <div className="menu-icon"></div>
                </MenuIcon>
              </div>
            </div>
          </Components.Col>
        </Components.Row>
      </Components.Container>
    </NavContainer>
  )
}