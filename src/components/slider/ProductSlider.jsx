import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Text, Col } from '../core'
import { SliderContainer, sliderSettings } from './style/sliderstyle'
import { CardDiv, BackgroundImage } from '../card/style/cardstyle'

const ProductSliderStyled = styled(SliderContainer)`
  .slick-arrow {
    top: 50%;
    bottom: initial;
    transform: translateY(-50%);
  }
  .slider-row {
    margin-left: -15px;
    margin-right: -15px;
  }
  .slick-slide {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const ProductSlider = ({ data, link }) => {
  const tmpData = {
    ...sliderSettings,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: (data?.length > 4) ? true : false,
    autoplay: true,
    dots: false
  }

  return (
    <ProductSliderStyled>
      <Slider {...tmpData} className="slider-row">
        {
          data?.map((x, i) => (
            <Col key={i}>
              <Link to={`${link}/${x.id}`}>
                <CardDiv product>
                  <div className="card-wrap">
                    <BackgroundImage data={x?.product_image || require('../../assets/img/no-img.jpg').default} />
                    <span className="promo">{x.promotion}</span>
                    <div className="content">
                      <Text weight="lg" className="product-name">{x.name}</Text>
                      <div className="price">
                        <span>{x.list_price}</span>
                        <del>{x.discount_price}</del>
                      </div>
                    </div>
                  </div>
                </CardDiv>
              </Link>
            </Col>
          ))
        }
      </Slider>
    </ProductSliderStyled>
  )
}

export default ProductSlider