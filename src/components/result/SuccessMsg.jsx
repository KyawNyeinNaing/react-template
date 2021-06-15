import React from 'react'
import styled from 'styled-components'
import Components from '../../components'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const SuccessMsg = props => {
  return (
    <>
      <SuccessSection>
        <Components.Container>
          <Components.Row>
            <Components.Col>
              <Components.View as="div" className="success-wrap">
                <IoMdCheckmarkCircleOutline />
                {props.children}
                <Components.Button className="btn btn-default">Ok</Components.Button>
              </Components.View>
            </Components.Col>
          </Components.Row>
        </Components.Container>
      </SuccessSection>
    </>
  )
}

const SuccessSection = styled(Components?.Section)`
  .success-wrap {
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Components?.colors.white};
    margin: 0 auto;
    @media screen and (min-width: ${Components?.media.md}px) {
      width: 70%;
    }
    > * {
      margin-bottom: 10px;
      @media screen and (min-width: ${Components?.media.md}px) {
        &:nth-child(2) {
          margin-bottom: 20px;
        }
      }
      button {
        margin-top: 10px;
      }
    }
    svg {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
      @media screen and (min-width: ${Components?.media.md}px) {
        margin-bottom: 30px;
      }
    }
    .alert-msg {
      font-weight: ${Components?.fontWeight.lg};
      font-size: ${Components?.fontSize.lg - 2}px;
      text-align: center;
    }
  }
  .contact-info {
    label {
      margin-right: 5px;
    }
  }
`

export default SuccessMsg