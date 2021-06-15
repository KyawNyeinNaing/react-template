import styled from 'styled-components'
import Components from '../../../components'

const Profile = styled.div`
  padding: 30px;
  background: ${Components.colors.white};
  .title {
    font-size: ${Components.fontSize.lg}px;
    font-weight: ${Components.fontWeight.lg};
    margin-bottom: 20px;
  }
  .order-number {
    margin-bottom: 5px;
    font-weight: ${Components.fontWeight.lg};
  }
  .order-address {
    margin-bottom: 15px;
  }
  .link {
    a {
      color: ${Components.colors.secondary};
    }    
  }
  .addcart-btn {
    .btn {
      min-width: auto;
      padding: 8px 10px;
    }
  }
  .profile-info-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    @media screen and (min-width: ${Components.media.sm}px) {
      flex-direction: row;
    }
    .profile-info {
      width: 100%;
      margin-bottom: 25px;
      @media screen and (min-width: ${Components.media.sm}px) {
        width: 50%;
      }
      .label {
        color: #707070;
        font-weight: 400;
      }
      p {
        font-weight: 500;
      }
    }
  }
  .profile-btn {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    @media screen and (min-width: ${Components.media.sm}px) {
      flex-direction: row;
    }
    .btn {
      margin-bottom: 10px;
      margin-right: 0;
      &:last-child {
        margin-bottom: 0;
      }
      @media screen and (min-width: ${Components.media.sm}px) {
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
      }
      svg {
        margin-right: 5px;
      }
    }
  }
  .edit-col {
    margin-bottom: 20px;
  }
  .edit-btn-wrap {
    .edit-btn-row {
      flex-wrap: nowrap;
      @media screen and (min-width: ${Components.media.md}px) {
        flex-wrap: wrap;
      }
      .edit-btn-col {
        width: auto;
        @media screen and (min-width: ${Components.media.md}px) {
          width: 50%;
        }
        .btn {
          min-width: 140px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
      .save-btn {
        text-align: left;
        @media screen and (min-width: ${Components.media.md}px) {
          text-align: right;
        }
      }
    }
  }
`

export {
  Profile
}