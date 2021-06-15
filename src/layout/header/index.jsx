import React, { useLayoutEffect } from 'react'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'
import { openDrawer, NavSticky } from '../../utils/'
import { HeaderDiv } from './style/HeaderStyle'

export default function Header() {
  useLayoutEffect(() => {
    window.addEventListener('openDrawer', openDrawer())

    window.addEventListener('scroll', () => NavSticky())

    return () => {
      window.removeEventListener('openDrawer', openDrawer())
      window.removeEventListener('scroll', NavSticky())
    }
  }, [])
  return (   
    <HeaderDiv>
      <SecondaryNav />
      <PrimaryNav />
    </HeaderDiv>
  )
}