import Home from '../pages/home'
import About from '../pages/aboutus'
import Contact from '../pages/contactus'
import Terms from '../pages/terms'
import Result from '../pages/result'

// typo
import Typo from '../pages/typo'

const Routes = [
  {
    path: '/',
    component: Home.home
  },

  // typo
  {
    path: '/grid',
    component: Typo.grid
  },
  {
    path: '/type',
    component: Typo.type
  },
  {
    path: '/form',
    component: Typo.form
  },
  {
    path: '/card',
    component: Typo.card
  },
  {
    path: '/about',
    component: About.aboutus
  },
  {
    path: '/contact',
    component: Contact.contactus
  },
  {
    path: '/termsandconditions',
    component: Terms.term
  },
  {
    path: '/privacypolicy',
    component: Terms.privacy
  },
  {
    path: '*',
    component: Result.notfound
  },
]

export default Routes