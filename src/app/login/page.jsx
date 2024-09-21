"use client"


import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'


const Login = () => {
    // const [credentials, setCredentials] = useState({email: "", password: ""}) 
    // let history = useHistory();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:5000/api/auth/login", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({email: credentials.email, password: credentials.password})
    //     });
    //     const json = await response.json()
    //     console.log(json);
    //     if (json.success){
    //         // Save the auth token and redirect
    //         localStorage.setItem('token', json.authtoken); 
    //         history.push("/");

    //     }
    //     else{
    //         alert("Invalid credentials");
    //     }
    // }

    // const onChange = (e)=>{
    //     setCredentials({...credentials, [e.target.name]: e.target.value})
    // }

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image 
            className="mx-auto h-10 w-auto" 
            src="/image/logo.png" 
            width={300} 
            height={57} 
            alt="Your Company" 
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input  
                  id="email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  
                    <p  className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </p>
               
                </div>
              </div>
              <div className="mt-2">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default Login;
