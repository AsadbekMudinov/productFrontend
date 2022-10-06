import React from 'react'
import ProductCard from '../components/ProductCard'
import Prod from './products.json'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  const navigate = useNavigate()
  const single=(item)=>{
    localStorage.setItem("prod", JSON.stringify(item));
    navigate('/singleProduct')
  }
  return (
    <div className='d-flex prod'>
      {
        Prod.map((item, index)=>(
          <ProductCard 
            name={item.name} 
            brand={item.brand} 
            color={item.color} 
            price={item.price} 
            title={item.title}
            image={item.img}
            alohida={()=>single(item)}
          />
        ))
      }
    </div>
  )
}
