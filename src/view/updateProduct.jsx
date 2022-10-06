import React from 'react'
import { useState } from 'react'

export default function UpdateProduct() {
  const saved = JSON.parse(localStorage.getItem("prod"))
  const Submit=(e)=>{
    e.preventDefault()
  }
  const [nyu, setNyu] = useState({
    name: saved.name,
    price: saved.price,
    color: saved.color,
    brand: saved.brand,
    category: saved.category,
    title: saved.title
  })

  const onchangeHandler=(e)=>{
    setNyu({...nyu, [e.target.name]: e.target.value})
  }
  const Seyv=()=>{
    console.log(nyu);
  }
  return (
    <div >
      <form className='w-25 mx-auto mt-5' onSubmit={Submit}>
        <h1 class="h3 mb-3 fw-normal">Add new Product</h1>

        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='name'
            value={nyu.name}
            onChange={onchangeHandler}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='brand'
            value={nyu.brand}
            onChange={onchangeHandler}
          />
          <label for="floatingInput">Brand</label>
        </div>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='color'
            value={nyu.color}
            onChange={onchangeHandler}
          />
          <label for="floatingInput">Color</label>
        </div>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='price'
            value={nyu.price}
            onChange={onchangeHandler}
          />
          <label for="floatingInput">Price</label>
        </div>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            id="floatingPassword" 
            placeholder="Password" 
            name='catgeory'
            value={nyu.category}
            onChange={onchangeHandler}
          />
          <label for="floatingPassword">Category</label>
        </div>
        <div class="form-floating">
          <textarea value={nyu.title} onChange={onchangeHandler} name='title' class="form-control" d="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button class="w-100 btn btn-lg btn-primary" onClick={Seyv}>Save</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </div>
  )
}
