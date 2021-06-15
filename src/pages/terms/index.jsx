import { lazy } from 'react'

const term = lazy(() => import('./TermsCondition'))
const privacy = lazy(() => import('./PrivacyPolicy'))

const Terms = {
  term,
  privacy
}

export default Terms