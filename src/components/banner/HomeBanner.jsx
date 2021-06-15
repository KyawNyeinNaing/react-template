import React from 'react'
import Slider from 'react-slick'
import { HomeBannerSection, SlideBackgroundImage } from './style/bannerstyle'

const HomeBanner = props => {
  const { data } = props

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true
        }
      }
    ]
  }
  return (
    <HomeBannerSection>
      <Slider {...settings}>
        {data?.slider_images?.length > 0 &&
          data?.slider_images.map((x, i) => (
            <SlideBackgroundImage key={i} />
          ))
        }
      </Slider>
    </HomeBannerSection>
  )
}

export default HomeBanner
