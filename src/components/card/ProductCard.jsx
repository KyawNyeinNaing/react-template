import React from 'react'
import { Link } from 'react-router-dom'
import Components from '../../components'
import { CardDiv, BackgroundImage, ProductCardWrap } from './style/cardstyle'

const ProductCard = ({ data, link, col }) => {
  return (
    <ProductCardWrap>
      <Components.Row>
        {
          data?.map((x, i) => (
            <Components.Col key={i} md={col} className="product-col">
              <Link to={`${link}/${x.id}`}>
                <CardDiv product>
                  <div className="card-wrap">
                    <BackgroundImage data={x?.product_image || require('../../assets/img/no-img.jpg').default} />
                    <span className="promo">{x.promotion}</span>
                    <div className="content">
                      <Components.Text weight="lg" className="product-name">{x.name}</Components.Text>
                      <div className="price">
                        <span>{x.list_price}</span>
                        <del>{x.discount_price}</del>
                      </div>
                    </div>
                  </div>
                </CardDiv>
              </Link>
            </Components.Col>
          ))
        }
      </Components.Row>
    </ProductCardWrap>
  )
}

export default ProductCard