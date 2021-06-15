
import styled from 'styled-components'
import { rgba } from 'polished'
import { colors, media } from '../../constant'

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${rgba(colors.primary, .65)};
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: all .15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  .modal-body {
    padding: 40px;
    width: 100%;    
    .success-title{
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .success-body{
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
    }

    .success-btn{
      display: flex;
      justify-content: center;
      .btn {
        min-width: 125px;
        margin-right: 15px;
        text-transform: none;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    
    @media screen and (min-width: 768px){
      width: 400px;
    }
  }
  &.show {
    visibility: visible;
    opacity: 1;
    > {
      &:first-child {
        transform: translateY(0);
      }
    } 
  }
  &.fade {
    &.show {
      > {
        &:first-child {
          /* transform: translateY(30px); */
          /* @media screen and (min-width: ${media.md}px) {
            transform: translateY(50px);
          } */
        }
      } 
    }
  }
`

const ModalDialog = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  transition: all .3s ease;
`

const ModalContent = styled.div`
  /* width: 100%; */
  background-color: ${colors.white};
  outline: 0;
  border: 0;
  border-radius: 0;
  box-shadow: 0 5px 11px 0 ${rgba(colors.primary, .18)}, 0 4px 15px 0 ${rgba(colors.primary, .15)};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const CloseOutside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ModalClose = styled.div`
  background-color: ${colors.light};
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  svg {
    color: ${colors.primary};
  }
`

export { Modal, ModalDialog, ModalContent, CloseOutside, ModalClose }