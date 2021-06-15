import React from 'react'
import CenterAds from './CenterAds'
import SideAds from './SideAds'
import { adsKey } from '../../key'

const { center_ads, side_ads } = adsKey

const Advertisement = props => {
  const { position_code } = props
  return (
    <>
      {position_code === center_ads && <CenterAds {...props} />}
      {position_code === side_ads && <SideAds {...props} />}
    </>
  )
}

export default Advertisement
