import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useEffect , useState } from 'react'
import './Login.css'
import AuthContext from '../Context/AuthContext'

const Login = () => {
const [errorMessage, setErrorMessage] = useState("");

const {register, handleSubmit,watch, formState:{errors}} = useForm()

useEffect(() => {
 const storedUser = JSON.parse(localStorage.getItem("user"))

 if(!storedUser){
    setErrorMessage("No account found")
 }

 if(
       storedUser.username !== data.username ||
    storedUser.password !== data.password
 ){
     setErrorMessage("Invalid username or password");
     return
 }

 login(); // context wala
  navigate("/dashboard");
}, [])

const {login} = useContext(AuthContext)
  return (
    <div className='loginPage'>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="inputs">

        <input placeholder='Username' {...register("username",{required:"This field is required"})} type="text" />

        {errors.username && <p>{errors.username.message}</p>}

        <input placeholder='Password' {...register("password",{required:"This field is required"})} type="password" />

        {errors.password && <p>{errors.password.message}</p>}

        </div>
        <button type='submit'>Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default Login
