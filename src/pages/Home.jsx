import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Home() {
  const [form,setForm] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e)=> {
    e.preventDefault()
    navigate(`/product/${form}`)
  }
  return (
    <div className='mt-4'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Product id:</label>
        <input id='id' value={form} onChange={(e)=>setForm(e.target.value)} className='border' />
        <button>Search</button>
      </form>
    </div>
  )
}
