import { lazy } from 'react'

const notfound = lazy(() => import('./404'))

const Result = {
  notfound
}

export default Result