
import styled from 'styled-components'
import { rgba } from 'polished'
import { colors, media } from '../../constant/'

const imgUrl = {
  leftArrow: require('../../../assets/img/icons/prev-arrow.svg').default,
  rightArrow: require('../../../assets/img/icons/next-arrow.svg').default
}

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: media.md,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: media.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
}

const SliderContainer = styled.div`
  a {
    text-decoration: none;
    display: block;
  }
  .card-wrap {
    &.promo-card{
      box-shadow: 0 0 10px ${rgba(colors.secondary, .1)};
      transition: box-shadow .3s ease;
      cursor: pointer;
      
      &:hover{
        box-shadow: 0 0 10px ${rgba(colors.secondary, .2)};
      }
    }
    .content {
      p {
        &:first-child {
          min-height: 40px;
        }
      }
    }
  }
  img {
    width: 100%;
    &.opacity0 {
      opacity: 0;
    }
  }
  .slick-arrow {
    width: 40px;
    height: 40px;
    background: ${rgba(colors.muted, .5)};
    border-radius: 50%;
    z-index: 1;
    top: 50%;

    @media screen and (max-width: ${media.md}px) {
      transform: translate(0, -5%);
    }

    &:focus,
    &:hover {
      background: ${colors.muted}
    }

    &:before {
      content: '';
      width: 16px;
      height: 16px;
      display: inline-block;
    }
    &.slick-prev {
      left: 0;
      &.slick-disabled {
        opacity: .25;
        cursor: default;
      }
      @media screen and (min-width: ${media.md}px) {
        left: -30px;
      }
      &:before {
        background: url(${imgUrl.leftArrow}) no-repeat center / contain;
      }
    }
    &.slick-next {
      right: 0;
      &.slick-disabled {
        opacity: .25;
        cursor: default;
      }
      @media screen and (min-width: ${media.md}px) {
        right: -30px;
      }
      &:before {
        background: url(${imgUrl.rightArrow}) no-repeat center / contain;
      }
    }
  }

  .slick-dots {
    position: initial;
    li {
      margin: 0;
      button {
        &:before {
          font-size: 11px;
          opacity: 1;
          color: ${colors.light}
        }
      }
      &.slick-active {
        button {
          &:before {
            color: ${colors.secondary}
          }
        }
      }
    }
  }
`

export { SliderContainer, sliderSettings }