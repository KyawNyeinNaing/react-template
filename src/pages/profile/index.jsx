import { lazy } from 'react'

const ProfileInfo = lazy(() => import('./profileinfo'))
const ProfileEdit = lazy(() => import('./profileedit'))
const ChangePass = lazy(() => import('./changepass'))
const OrderHistory = lazy(() => import('./orderhistory'))
const OrderDetail = lazy(() => import('./orderdetail'))
const MyService = lazy(() => import('./myservice'))
const MyServiceDetail = lazy(() => import('./myservicedetail'))
const Wishlist = lazy(() => import('./wishlist'))

const Profile = {
  ProfileInfo,
  ProfileEdit,
  ChangePass,
  OrderHistory,
  OrderDetail,
  MyService,
  MyServiceDetail,
  Wishlist
}

export default Profile