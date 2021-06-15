import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { colors, media } from '../../constant'
import Placeholder from '../../fakeimg'

const CategoryWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  .category-col {
    width: 50%;
    @media screen and (min-width: ${media.md}px) {
      width: 25%;
    }
    @media screen and (min-width: ${media.lg}px) {
      width: 16.66%;
    }
    a {
      display: block;
      text-decoration: none;
      text-align: center;
      margin-bottom: 30px;
      width: 150px;
      &:hover {
        .img-wrap {
          .category-bg-img {
            border: 1px solid ${colors.secondary};
          }
        }
      }
      .img-wrap {
        background: ${colors.white};
        border-radius: 50%;
        .category-bg-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 1px solid ${colors.light};
          transition: all .3s;
        }
      }
      .desc {
        margin-top: 25px;
      }
    }
  }
`

const ProductCardWrap = styled.div`
  a {
    text-decoration: none;
    display: block;
  }
  .product-col {
    padding-bottom: 30px;
  }
`
const ServiceCardWrap = styled.div`
  .service-card-col {
    margin-bottom: 15px;
    @media screen and (min-width: ${media.lg}px) {
      margin-bottom: 0;
    }
  }
  .service-bg-color {
    background: #EEEEEE;
    .service-wrap {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      background: url(${require("../../../assets/img/service1.png").default}) no-repeat center/cover;
      padding: 15px;
      width: 100%;
      overflow: hidden;
      .service-img {
        margin-right: 15px;
        .service-bg-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid ${colors.white};
          @media screen and (min-width: 1200px) {
            width: 150px;
            height: 150px;
          }
        }
      }
      .service-desc {
        .name {
          color: ${colors.white};
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .desc {
          color: ${colors.white};
          font-size: 14px;
          margin-bottom: 10px;
        }
        .btn {
          min-width: 150px;
          padding: 12px;
        }
      }
    }
  }
`

const CardDiv = styled.div`
  a {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-decoration: none;
  }
  .promo-card {
    background: ${rgba(colors.light, .4)};
    border-radius: 5px;
    flex-direction: column;
    margin-bottom: 15px;
    @media screen and (min-width: ${media.sm}px) {
      flex-direction: row;
    }
    @media screen and (min-width: ${media.lg}px) {
      margin-bottom: 0;
    }
    .promo-text {
      padding: 30px 10px 30px 30px;
      .title {
        margin-bottom: 10px;
        font-size: 18px;
      }
      .percent {
        margin-bottom: 15px;
        color: ${colors.secondary};
      }
    }
  }
  &:focus {
    outline: 0;
  }
  .card {
    position: relative;
    border-radius: 15px;
    margin-bottom: 15px;

    img {
      &.opacity0 {
        width: 100%;
        opacity: 0;
      }
    }
  }

  ${({ product }) => product && css`
    .card-wrap {
      position: relative;
      background: ${rgba(colors.light, .5)};
      border-radius: 3px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: ${rgba(colors.primary, .03)} 0px 2px 5px 0px, ${rgba(colors.primary, .01)} 0px 2px 10px 0px;
      transition: all .3s ease;
      &:hover {
        box-shadow: ${rgba(colors.primary, .1)} 0px 4px 8px 0px, ${rgba(colors.primary, .1)} 0px 4px 8px 0px;
        transform: translateY(-8px);
      }

      &:focus {
        outline: 0;
      }
      .card {
        border-radius: 0;
        border: 0;
      }
      .promo {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 45px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.primary};
        color: ${colors.white};
        font-size: 14px;
      }
    }
    .content {
      background: ${colors.white};
      border: 1px solid ${rgba(colors.light, .5)};
      padding: 10px 15px 20px;
      .product-name {
        line-height: 20px;
        margin-bottom: 15px;
        &:first-child {
          min-height: 40px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      .price {
        display: flex;
        align-item: flex-start;
        justify-content: flex-start;
        span {
          margin-right: 15px;
          color: ${colors.secondary};
        }
        del {
          color: ${colors.muted};
        }
      }
    }
    .card-btn {
      text-align: center;
      margin-bottom: 15px;

      &.promo-footer{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin: 0;
        padding: 10px 0;
        .flex {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  `}
`

const BackgroundData = styled.div`
  margin: 0;
  background: url("${props => props.data && props.data}") no-repeat center / cover;
  ${({ border_radius }) => border_radius && css`
    border-radius: ${border_radius}px;
  `}

  img {
    width: 100%;
    opacity: 0;
  }
`
const defaultSettings = {
  width: 270,
  height: 300,
  backgroundColor: colors.light,
  text: '270 x 300',
  opacity: 0
}

const BackgroundImage = ({ data, border_radius, ...props }) => {

  return (
    <BackgroundData data={data} border_radius={border_radius} title={props?.title}>
      <Placeholder {...defaultSettings} />
      {props.children}
    </BackgroundData>
  )
}

const CategoryBgSettings = {
  width: 170,
  height: 170,
  backgroundColor: colors.light,
  text: '170 x 170',
  opacity: 0
}

const CategoryBgImg = ({ data, border_radius, ...props }) => {

  return (
    <BackgroundData data={data} border_radius={border_radius} title={props?.title} className="category-bg-img">
      <Placeholder {...CategoryBgSettings} />
      {props.children}
    </BackgroundData>
  )
}

const ServiceBgSettings = {
  width: 150,
  height: 150,
  backgroundColor: colors.light,
  text: '150 x 150',
  opacity: 0
}

const ServiceBgImg = ({ data, border_radius, ...props }) => {

  return (
    <BackgroundData data={data} border_radius={border_radius} title={props?.title} className="service-bg-img">
      <Placeholder {...ServiceBgSettings} />
      {props.children}
    </BackgroundData>
  )
}

const PromoBgSettings = {
  width: 300,
  height: 200,
  backgroundColor: colors.light,
  text: '300 x 200',
  opacity: 0
}

const PromoBgImg = ({ data, border_radius, ...props }) => {

  return (
    <BackgroundData data={data} border_radius={border_radius} title={props?.title}>
      <Placeholder {...PromoBgSettings} />
      {props.children}
    </BackgroundData>
  )
}

export {
  CardDiv,
  BackgroundImage,
  ProductCardWrap,
  CategoryWrap,
  CategoryBgImg,
  PromoBgImg,
  ServiceCardWrap,
  ServiceBgImg
}