import React from 'react'

export default function Product() {
  const saved = JSON.parse(localStorage.getItem("prod"))
  return (
    <div>
      <h1>Nomi: {saved.name}</h1>
      <h2>Narxi:  {saved.price}</h2>
      <h2>Brendi:  {saved.brand}</h2>
      <h2>Ranggi:  {saved.color} </h2>
      <h2>Kategoriyasi:  {saved.category}</h2>
      <p>title:  {saved.title}</p>
    </div>
  )
}
