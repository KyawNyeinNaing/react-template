import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Modal, ModalDialog, ModalContent, CloseOutside, ModalClose } from './style/modalstyle'
import { RiCloseFill } from 'react-icons/ri'

const ModalBox = ({ children, data: { isModal, handleIsModal, isSetTimeOut } }) => {
  useEffect(() => {
    isSetTimeOut && setTimeout(() => {
      handleIsModal(false, null)
    }, 5000)
    console.log('isSetTimeOut', isSetTimeOut)
  }, [isSetTimeOut, handleIsModal])

  const onHandleModalEmit = async () => {
    handleIsModal(false)
  }

  return (
    <Modal className={`fade ${isModal ? 'show' : 'hide'}`}>
      <CloseOutside onClick={() => onHandleModalEmit()} />
      <ModalDialog>
        <ModalClose onClick={() => onHandleModalEmit()}>
          <RiCloseFill />
        </ModalClose>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalDialog>
    </Modal>
  )
}

ModalBox.protoTypes = {
  handleFun: PropTypes.func.isRequired,
}

export default ModalBox