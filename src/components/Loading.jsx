import styled from 'styled-components'
import loadingImg from '../assets/img/loading.gif'

const LoadingStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
  }
  p {
    font-size: 12px;
  }
`

const Loading = ({text}) => {
  return (
    <LoadingStyled>
      <img src={loadingImg} alt="app loading"/>
      {text && <p>{text}</p>}
    </LoadingStyled>
  )
}

export default Loading