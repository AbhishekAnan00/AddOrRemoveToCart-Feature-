import React from 'react'
import { PRODUCTS } from '../../product'
import {Product} from './Product'
import './Shop.css'

export const Shop = () => {
  return ( <>
    <div className="shop">
      <h1>SHOPPING</h1>
    </div>
    <div className="products">{PRODUCTS.map((product) => (<Product key={product.id} data={product}/>))}</div>
  </>
  )
}
