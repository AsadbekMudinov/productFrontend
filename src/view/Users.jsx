// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import User from '../components/ProductCard'

// export default function Services() {

//   const [user, setUser] = useState([])
//   const [check, setCheck]=useState(true)

//   // useEffect(()=>{
//   //   const Demo=async()=>{
//   //     try{
//   //       const res= await axios.get('https://userboshqaruv.herokuapp.com/user')
//   //       setUser(res.data)
//   //     }catch(err){
//   //       console.log(err);
//   //     }
//   //   }

//   //   Demo()

//   // },[user, Deletes])

//   // const Deletes=(elem)=>{
//   //   axios.delete(`https://userboshqaruv.herokuapp.com/user/${elem._id}`)
//   // }
//   // console.log(user);
//   return (
//     <div>
      
//       <h1>
//         {
//           check ? 'Ochiq' : 'Yopiq'
//         }
//       </h1>
//       <button className={check ? 'btn btn-dark' : 'btn btn-light'} onClick={()=>setCheck(!check)}>
//         {
//           check ? 'Yopish' : 'Ochish'
//         }
//       </button>
//     </div>
//   )
// }
