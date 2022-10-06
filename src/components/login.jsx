import React from 'react'

export default function login(props) {
  const Submit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='login'>
      <form className='w-25 mx-auto mt-5' onSubmit={Submit}>
      <button onClick={props.close}>x</button>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input 
            type="email" 
            class="form-control" 
            id="floatingInput" 
            placeholder="name@example.com" 
            name='email'
            onChange={props.chenj}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input 
            type="password" 
            class="form-control" 
            id="floatingPassword" 
            placeholder="Password" 
            name='pass'
            onChange={props.chenj}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" onClick={props.validatsiya}>Sign in</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </div>
  )
}
