import React from 'react'
import styled from 'styled-components'
import Placeholder from '../fakeimg'
import colors from '../constant/Color'

const AdsContainer = styled.div`
  > * {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const SideAds = props => {
  const tmp = {
    first_ads: {
      ...props,
      height: 300,
      backgroundColor: colors.light,
      text: 'ADS - 270 x 300'
    },
    second_ads: {
      ...props,
      height: 750,
      backgroundColor: colors.light,
      text: 'ADS - 270 x 750'
    }
  }
  return (
    <AdsContainer>
      <Placeholder {...tmp.first_ads} />
      <Placeholder {...tmp.second_ads} />
    </AdsContainer>
  )
}

export default SideAds
