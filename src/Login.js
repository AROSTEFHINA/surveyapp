import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
 
import './style.css'
 

function Login() {
 const [password,setPassword]=useState('')  
 const [email,setEmail]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 

 
 
  const handleEmail=(event)=>{
    event.preventDefault();
    setEmail(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validateForm({email,password}));
    // setIsSubmit(true);
    if(isSubmit===true){
        navigate('/Home');
    }
   
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.email.trim() === '') {
      errors.email = 'email is required';
      setIsSubmit(false);
    }
     

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };
  return (
    <>
    <div className='imggg'></div>
    <div className='cont'>
    <div >
        <div > 
        <form onSubmit={handleSubmit}>
           <div className='mb-2'>
           <h3 className='text-center'>Sign In</h3>
            <label htmlFor="email">Email</label>
            <div className="tae"> 
            <input type="email" placeholder='Enter Email' className='form-control' onChange={handleEmail}/>
            {errors.email}</div>
            </div> 
            <div >
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className='form-control' onChange={handlePassword}/>
            {errors.password}
            </div> 
            
            <div className='d-grid'>
                <button classNAme='btn btn-primary'>Sign in</button>
            </div>
            <p className='sofi'>
               <Link to='/signup' className='ms-2'>Sign up</Link>
            </p>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login 
