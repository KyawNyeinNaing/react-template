
import styled from 'styled-components'
import { rgba } from 'polished'
import Components from '../../../components'

const FooterContainer = styled.footer`
  position: relative;
  padding-top: 40px;
  padding-bottom: 20px;
  margin-top: 30px;
  background-color: ${Components.colors.black};
`

const FooterCol = styled(Components.Col)`
  @media screen and (max-width: ${Components.media.md}px) {
    margin-bottom: 15px;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: ${Components.colors.white};
    flex: none;
  }
  .contact {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    a {
      text-decoration: none;
      color: ${Components.colors.muted};
      margin-right: 10px;
      &:after {
        content: ',';
      }
      &:last-child {
        &:after {
          content: '';
        }
      }
    }
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-bottom: 5px;
    color: ${Components.colors.label};
    font-weight: ${Components.fontWeight.xl};
    text-decoration: none;
    cursor: pointer;
    a {
      color: ${Components.colors.label};
      text-decoration: none;
    }
    &.go-to {
      margin-top: 30px;
    }
  }
`

const Floating = styled.div`
  cursor: pointer;
  position: fixed;
  right: 16px;
  bottom: 70px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${rgba(Components.colors.secondary, .4)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  &.show {
    visibility: visible;
    opacity: 1;
  }
  @media screen and (min-width: ${Components.media.md}px) {
    right: 5em;
    bottom: 5em;
  }
  &:hover {
    box-shadow: 0 2px 5px 0 ${rgba(Components.colors.black, .15)}, 0 2px 10px 0 ${rgba(Components.colors.black, .2)};
  }
  svg {
    width: 30px;
    height: 25px;
    color: ${Components.colors.white};
  }
`

export { FooterContainer, FooterCol, Contact, List, Floating }