import React,{useState,useEffect} from 'react'
import { useLocation,useParams } from 'react-router-dom'
const Product = () => {
  const [product,setProduct] = useState([])
  useEffect(()=> {
    fetch(`https://dummyjson.com/product/${params.id}`)
    .then(resp=>resp.json())
    .then(data=> {
      setProduct(data)
    })
  },[])
  const params = useParams()
  const location = useLocation()
  return (
    <div>
      <h1>Product</h1>
      <pre>{JSON.stringify(product,null,2)}</pre>
    <hr />
    <p>useLocation</p>
    <pre>{JSON.stringify(location,null,2)}</pre>
    <p>useParams</p>
    <pre>{JSON.stringify(params,null,2)}</pre>
    <p>You're in {location.pathname}</p>
    <hr />

    </div>
  )
}

export default Product