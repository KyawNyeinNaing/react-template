import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileContainer } from './style/sidebarstyle'

const ProfileSidebar = ({ profile }) => {
  return (
    <ProfileContainer>
      {
        profile ?
          <>
            <li>
              <NavLink activeClassName="active" to="/profile">My Profile</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/orderhistory">My Orders</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/myservice">My Service Tickets</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/wishlist">My Wishlist</NavLink>
            </li>
          </>
          :
          <>
            <li>
              <NavLink activeClassName="active" to="/termsandconditions">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/privacypolicy">Privacy Policy</NavLink>
            </li>
          </>
      }
    </ProfileContainer>
  )
}

export default ProfileSidebar
