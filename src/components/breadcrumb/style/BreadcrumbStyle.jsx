import styled from 'styled-components'
import { Section } from '../../core'
import { fontSize } from '../../constant'
import colors from '../../constant/Color'

const BreadcrumbSection = styled(Section)`
  padding-top: 30px;
  padding-bottom: 0;
  border-radius: 10px;
  + section {
    &.center-ads {
      padding-top: 30px !important;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      position: relative;
      font-size: ${fontSize.sm}px;
      padding-right: 16px;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      &:after {
        content: '/';
        position: absolute;
        right: 5px;
      }
      &:first-child {
        a {
          color: ${colors.secondary};
        }
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
      a,
      span {
        color: ${colors.primary};
        text-decoration: none;
        font-size: ${fontSize.md}px;
      }
      svg {
        margin: 0 10px;
      }
    }
  }
`

export {
  BreadcrumbSection
}