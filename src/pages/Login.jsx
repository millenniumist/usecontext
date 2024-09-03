import React,{useState,useContext} from "react";
import axios from 'axios'
import AuthContext from "../contexts/AuthContext";

function Login() {
  const {setUser} = useContext(AuthContext)
  const [input,setInput] = useState({
    username:"",
    password:""
  })
  const handleChange = (e)=>{
    setInput(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // alert(JSON.stringify(input))
    // fetch("https://dummyjson.com/user/login", {
    //   method: 'POST',
    //   headers: {'Content-type' : 'application/json'},
    //   body: JSON.stringify(input)
    // })
    // .then(resp=>resp.json())
    // .then(data=> alert(JSON.stringify(data)))
    try {
    const resp = await axios.post('https://dummyjson.com/user/login',input)
    console.log(resp.data)
    setUser(resp.data)
    } catch(err) {
      console.log(err.code)
    }
    
  }
  return (
    <div className="border flex flex-col gap-4 p-4 w-3/4 mx-auto mt-4">
      <p className="text-4xl">Login Form</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Username" name='username' value={input.username} onChange={handleChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="grow" name='password' value={input.password} onChange={handleChange}/>
        </label>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;