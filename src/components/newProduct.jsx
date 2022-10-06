import React from 'react'

export default function newProduct(props) {
  const Submit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="newProduct">
      <form className='w-25 mx-auto mt-5' onSubmit={Submit}>
        <button onClick={props.close}>x</button>
        <h1 class="h3 mb-3 fw-normal">Add new Product</h1>

        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='name'
            onChange={props.chang}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='brand'
            onChange={props.chang}
          />
          <label for="floatingInput">Brand</label>
        </div>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='color'
            onChange={props.chang}
          />
          <label for="floatingInput">Color</label>
        </div>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            name='price'
            onChange={props.chang}
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
            onChange={props.chang}
          />
          <label for="floatingPassword">Category</label>
        </div>
        <div class="form-floating">
          <textarea onChange={props.chang} name='title' class="form-control" d="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button class="w-100 btn btn-lg btn-primary" onClick={props.Seyv}>Save</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </div>
  )
}
