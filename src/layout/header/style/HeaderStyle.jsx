import styled from 'styled-components'
import { rgba } from 'polished'
import Components from '../../../components'

const HeaderDiv = styled.header`
  position: relative;
  width: 100%;
  &:after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 60px;
  }
  @media screen and (min-width: ${Components.media.xl}px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const NavContainer = styled.div`
  &.nav {
    background: ${Components.colors.primary};
    position: fixed;
    top: 0;
    left: 100%;
    width: 250px;
    height: 100vh;
    @media screen and (min-width: ${Components.media.lg}px) {
      position: initial;
      height: auto;
      width: 100%;
    }
    &.sticky {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      ul {
        max-width: 1140px;
        width: 100%;
        margin: 0 auto;
      }
    }
    .nav-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      @media screen and (min-width: ${Components.media.lg}px) {
        flex-direction: row;
      }
      ul {
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        list-style: none;
        display: flex;
        flex-direction: column;
        @media screen and (min-width: ${Components.media.lg}px) {
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          height: auto;
        }
        li {
          margin: 0 25px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          a {
            padding: 20px 0;
            display: block;
            color: ${Components.colors.white};
            text-decoration: none;
            transition: color .3s ease;
            &:hover {
              color: ${Components.colors.secondary};
            }
            &.active {
              color: ${Components.colors.black};
            }
          }
        }
      }
    }
  }

  &.top-nav {
    background: ${Components.colors.white};
    padding: 5px 0;
    .d-flex {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo-img {
        img {
          width: auto;
          height: 56px;
          @media screen and (min-width: ${Components.media.lg}px) {
            height: 76px;
          }
        }
      }
      .nav-center {
        display: none;
        position: relative;
        @media screen and (min-width: ${Components.media.lg}px) {
          display: block;
        }
        @media screen and (min-width: ${Components.media.xl}px) {
          min-width: 380px;
        }
        .search-box {
          border-radius: 25px;
          margin-top: 0;
        }
        .search-icon {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          width: 62px;
          height: 100%;
          background-color: ${Components.colors.secondary};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 23px;
          cursor: pointer;
          svg {
            width: 20px;
            height: auto;
            color: ${Components.colors.white}
          }
        }
      }
      .nav-right {
        /*Write here*/
      }
    }
  }
`

const MenuDropdown = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a,
  p {
    display: block;
    text-decoration: none;
    transition: border .2s ease;
    border-bottom: 2px solid transparent;
    position: relative;
    span.title {
      color: ${Components.colors.primary};
      font-size: 17px;
      font-weight: ${Components.fontWeight.lg};
    }
    span.sub {
      color: ${Components.colors.muted};
      font-size: 13px;
      display: inline-block;
      margin-bottom: 5px;
    }
  }
  .drp-wrap {
    width: 200px;
    position: absolute;
    top: 100%;
    right: 0;
    left: initial;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out;
    z-index: 99;
    border: ${Components.inputGeneral.border} ${Components.colors.light};
    border-radius: .1rem;
    background-color: ${Components.colors.white};
    box-shadow: 0 2px 5px 0 ${rgba(0, 0, 0, .01)}, 0 2px 10px 0 ${rgba(0, 0, 0, .05)};
    transform: translateY(10px);
    .drp-ul {
      display: block;
      padding: 0;
      margin: 0;
      li {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        transition: background .3s ease;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          background: ${Components.colors.light};
          width: calc(100% - 40px);
          height: 1px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        &:last-child {
          &:after {
            display: none;
          }
        }
        a {
          display: block;
          width: 100%;
          font-size: ${Components.fontSize.md}px;
          border-bottom: 0;
          padding-bottom: 0;
          padding: 20px;
          color: ${Components.colors.primary};
          &:hover {
            color: ${Components.colors.secondary};
          }
        }
      }
    }
  }
  &.language {
    position: relative;
    width: 120px;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (min-width: ${Components.media.lg}px) {
      margin-left: 30px;
    }
    .drp-wrap {
      right: initial;
      left: 0;
      @media scr9een and (min-width: ${Components.media.lg}px) {
        right: 0;
        left: initial;
      }
    }
    .selected-lang {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${Components.colors.white};
      border: 1px solid ${Components.colors.white};
      padding: 5px;
      img {
        width: 25px;
        height: 15px;
        margin-right: 5px;
      }
    }
    .lang-list {
      li {
        padding: 20px;
        &:hover {
          color: ${Components.colors.secondary};
        }
        img {
          width: 25px;
          height: 15px;
          margin-right: 5px;
        }
      }
    }
  }

  &:hover {
    .drp-wrap {
      opacity: 1;
      visibility: visible;
      z-index: 99;
      transform: translateY(0);
    }
  }
`

const OpenBurger = styled.div`
  &.burger-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
    opacity: 0;
    transform: opacity .3s ease-in-out 0s,transform 0s ease-in-out .3s;
    transform: translate3d(100%,0,0);
    background-color: ${rgba(Components.colors.primary, .6)};

    &.open-wrap {
      opacity: 1;
      transition: opacity .3s ease-in-out 0s!important;
      transform: translateZ(0)!important;
    }
  }
`

const MenuIcon = styled.div`
  &.menu-btn {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
    z-index: 9999;
    margin-left: 20px;
    @media screen and (min-width: ${Components.media.lg}px) {
      display: none;
      margin-left: 0;
    }
    .menu-icon {
      width: 30px;
      height: 3px;
      background: ${Components.colors.primary};
      border-radius: 5px;
      transition: all .2s ease-in-out;
      &:before,
      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 25px;
        height: 3px;
        background: ${Components.colors.primary};
        border-radius: 5px;
        transition: all .2s ease-in-out;
      }

      &:before {
        transform: translateY(-8px);
      }

      &:after {
        transform: translateY(8px);
      }
    }
  }
`

export {
  NavContainer,
  MenuDropdown,
  HeaderDiv,
  OpenBurger,
  MenuIcon
}