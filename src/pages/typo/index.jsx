import { lazy } from 'react'

const grid = lazy(() => import('./Grid'))

const type = lazy(() => import('./Type'))

const form = lazy(() => import('./Form'))

const card = lazy(() => import('./Card'))

const Typo = {
  grid,
  type,
  form,
  card
}

export default Typo