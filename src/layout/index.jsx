import React, { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Components from '../components'
import AppRoute from './../router/router'
import { OpenBurger } from './header/style/HeaderStyle'

const Header = lazy(() => import('./header'))
const Footer = lazy(() => import('./footer'))

export default function index() {
  return (
    <BrowserRouter>
      <Components.GlobalStyle />
      <OpenBurger className="burger-wrap" />
      <Header />
      <Components.Main>
        <AppRoute />
      </Components.Main>
      <Footer />
    </BrowserRouter>
  )
}
