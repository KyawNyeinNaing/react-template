import styled from 'styled-components'
import colors from './../../constant/Color'
import { fontSize, fontWeight } from '../../constant'
import { Text } from '../../core'

const SideBarContainer = styled.div`
  position: relative;
  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }
`

const SideBarFilter = styled.div`
  margin-bottom: 30px;
  background: ${colors.white};
  padding: 20px;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      margin-right: 5px;
      margin-bottom: 0;
    }
    button {
      min-width: 35px;
      min-height: 35px;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${colors.secondary};
      border: 0 none;
      border-radius: 3px;
      svg {
        color: ${colors.white};
      }
    }
    input {
      height: 35px;
      padding: 0 10px;
      font-size: ${fontSize.sm}px;
    }
  }
  .custom-check,
  .custom-radio {
    margin: 20px 0;
    label {
      font-weight: ${fontWeight.md};
    }
  }
`

const FilterTitle = styled(Text)`
  position: relative;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: ${fontWeight.lg};
  padding-bottom: 15px;
  margin-bottom: 15px;
  &:before {
    content: '';
    width: 40px;
    height: 2px;
    background-color: ${colors.secondary};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${colors.light};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`

// sidebar style
const ProfileContainer = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-bottom: 20px;
  background: ${colors.white};
  li {
    position: relative;
    a {
      display: block;
      color: ${colors.primary};
      transition: color .3s ease;
      padding: 20px;
      cursor: pointer;
      transition: background-color .2s ease;
      text-decoration: none;
      &.active,
      &:hover {
        color: ${colors.secondary};
      }
    }
    &:after {
      content: "";
      width: calc(100% - 40px);
      height: 1px;
      background: ${colors.light};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`

export {
  SideBarContainer,
  SideBarFilter,
  FilterTitle,
  ProfileContainer
}