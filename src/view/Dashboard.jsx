import React, {useState, useEffect} from 'react'
import Prod from './products.json'
import NewProduct from '../components/newProduct'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {
  const navigate = useNavigate()
  const [baza, setBaza] = useState([])
  const [check, setCheck] = useState(false)
  const [val, setVal]=useState({})

  useEffect(()=>{
    const Demo=async()=>{
      try{
        const res = await axios.get('https://prodbackend.herokuapp.com/product')
        setBaza(res.data)
      }catch(err){
        console.log(err);
      }
    }
    Demo()
  })
  console.log(baza);

  const ochish=()=>{
    setCheck(true)
  }
  const yopish=()=>{
    setCheck(false)
  }
  const onchangeHandler=(e)=>{
    setVal({...val, [e.target.name]: e.target.value})
  }
  const Saqlash=()=>{
    // axios.post('localhost:5000/products',val)
    setCheck(false)
  }
  const updata=(elem)=>{
    localStorage.setItem("prod", JSON.stringify(elem));
    navigate(`/update/${elem.id}`)
  }
  return (
    <div>
      <div className='float-end'>
        <button onClick={ochish} className='btn btn-dark'>
          <i class="bi bi-clipboard2-plus"></i>
        </button>
      </div>
      <table class="table">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          baza.map((item, index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className='btn btn-primary' onClick={()=>updata(item)}>Update</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    {
      check ? <NewProduct chang={onchangeHandler} close={yopish} Seyv={Saqlash} /> : " "
    }
    </div>
  )
}
