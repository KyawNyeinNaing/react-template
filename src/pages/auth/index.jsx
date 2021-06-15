import { lazy } from 'react'

const SignUp = lazy(() => import('./signup'))
const SignIn = lazy(() => import('./signin'))
const ForgetPass = lazy(() => import('./forgetpass'))

const Auth = {
  SignUp,
  SignIn,
  ForgetPass
}

export default Auth