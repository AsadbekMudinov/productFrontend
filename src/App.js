import './App.css';
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './view/Home'
import About from './view/About'
import Products from './view/Products'
import Services from './view/Services'
import Contact from './view/Contact'
import Footer from './components/footer'
import Dashboard from './view/Dashboard'
import Users from './view/Users'
import {useNavigate} from 'react-router-dom'
import Menyu from './components/menyu';
import Login from './components/login'
import NewProduct from './components/newProduct'
import Product from './view/Product'
import UpdateProdukt from './view/updateProduct'


function App() {
  const navigate = useNavigate()
  const [log, setLog]= useState(false)
  const [val, setVal] = useState({
    email: "",
    pass: ""
  })

  const Enter=()=>{
    setLog(true)
  }
  const Yopish=()=>{
    setLog(false)
  }
  const onchangeHandler=(e)=>{
    setVal({...val, [e.target.name]: e.target.value})
  }
  const f=()=>{
    if(val.email=='admin@gmail.com' && val.pass=='12345'){
      navigate('/dash')
      setLog(false)
    }else{
      alert("xatolik")
    }
    
  }
  return (
    <div className="App">
      <Menyu kirish={Enter}  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Login/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/singleProduct' element={<Product />} />
        <Route path='/update/:id' element={<UpdateProdukt />} />
      </Routes>
      {
        log ? <Login close={Yopish} chenj={onchangeHandler} validatsiya={f} /> : ""
      }
      <Footer />
    </div>
  );
}

export default App;
