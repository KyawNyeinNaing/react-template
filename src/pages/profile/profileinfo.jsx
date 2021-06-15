import React from 'react'
import { Link } from 'react-router-dom'
import Components, { Container, Row, Col, Text } from '../../components'
import { Profile } from './style/profilestyle'
import { FiEdit } from 'react-icons/fi'

const MyProfile = () => {
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
                <Text className="title">Profile</Text>
                <div className="profile-info-wrap">
                  <div className="profile-info">
                    <Text className="label">Name</Text>
                    <Text>Sai Sai</Text>
                  </div>
                  <div className="profile-info">
                    <Text className="label">State/Division</Text>
                    <Text>Yangon</Text>
                  </div>
                  <div className="profile-info">
                    <Text className="label">Phone</Text>
                    <Text>09xxxxxxxxx</Text>
                  </div>
                  <div className="profile-info">
                    <Text className="label">Township</Text>
                    <Text>Hlaing</Text>
                  </div>
                  <div className="profile-info">
                    <Text className="label">Email</Text>
                    <Text>xxxx@xxx.com</Text>
                  </div>
                  <div className="profile-info">
                    <Text className="label">Address</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                  </div>
                  <div className="profile-info">
                    <Text className="label">Birthday</Text>
                    <Text>20/02/1990</Text>
                  </div>
                </div>
                <div class="profile-btn">
                  <Link to="/profile/profileedit" className="btn btn-gray"><FiEdit /> Edit Profile</Link>
                  <Link to="/changepassword" className="btn btn-gray"><FiEdit /> Change Password</Link>
                </div>
              </Profile>
            </Col>
          </Row>
        </Container>
      </Components.Section>
    </>
  )
}

export default MyProfile
