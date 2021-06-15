import React from 'react'
import styled from 'styled-components'
import colors from '../constant/Color'
import { Text } from '../core'
import { fontSize } from '../constant'

const PlaceholderStyle = styled(Text)`
  position: relative;
  width: ${props => props?.width}px;
  height: ${props => props?.height}px;
  color: ${props => props?.color};
  background-color: ${props => props?.backgroundColor};
  opacity: ${props => props?.opacity};
  ${props => props?.data && `background: url("${props?.data}") no-repeat center / cover`};
  &:before {
    content: "${props => !props?.data && props?.text}";
    color: ${props => props?.color ? props?.color : colors.text};
    font-size: ${fontSize.lg}px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Placeholder = props => {
  return (
    <PlaceholderStyle {...props} />
  )
}

export default Placeholder
