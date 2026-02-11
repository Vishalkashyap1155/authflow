import React from 'react'
import { useForm } from 'react-hook-form'
import "./signup.css"


const Signup = () => {

    const {
        register,
        handleSubmit, 
        watch,
        formState:{errors}
     } = useForm()

     const onSubmit =(data)=>{
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data))
     }

     const password = watch("password")


  return (
    <div className='signuppage'>
      <h2>Sign up page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

<div className="inputs">
      <input 
      placeholder='Username'
      {...register("username",{
        required:"This field is requird", 

        minLength:{
            value:6,
            message:"minimum six character is requird"
        }

        })} type="text" />

        {errors.username && <p>{errors.username.message}</p>}

              <input
               placeholder='First Name'
              {...register("firstName",{
        required:"This field is requird", 
        minLength:{
            value:2,
            message:"minimum two character is requird"
        }

        })} type="text" />

        {errors.firstName && <p>{errors.firstName.message}</p>}


          <input 
          placeholder='Last Name'
          {...register("lastName",{
        required:"This field is requird", 
        minLength:{
            value:2,
            message:"minimum two character is requird"
        }

        })} type="text" />

        {errors.lastName && <p>{errors.lastName.message}</p>}

            <input 
            placeholder='Enter here Email'
            type="email" {...register("email",{
        required:"This field is requird", 

        })}  />

        {errors.email && <p>{errors.email.message}</p>}


             <input
              placeholder='Password'
             {...register("password",{
        required:"This field is requird", 
        minLength:{
            value:6,
            message:"minimum six length of password"
        }

        })} type="text" />

        {errors.password && <p>{errors.password.message}</p>}

                 <input
                  placeholder='Confirm Password'
                 {...register("confirmPassword",{
        required:"This field is requird", 
        validate : (value)=> value === password || "Password is not match"
       

        })} type="text" />

        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Signup
