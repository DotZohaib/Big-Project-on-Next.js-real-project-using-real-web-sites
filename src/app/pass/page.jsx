import React from 'react';
import { useForm } from "react-hook-form";
// import { useForm } from 'react-hook-form/dist/react-hook-form.es';


const pass = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted: ", data);
    reset(); // Reset the form after submission
  };

  return (
    <>
      <div className="bg-green-700 min-h-screen flex items-center justify-center">
        <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input 
              type="text" 
              {...register("name", { 
                required: { value: true, message: "Name is required" }, 
                minLength: { value: 3, message: "Min length is 3" }, 
                maxLength: { value: 10, message: "Max length is 10" }
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
              id="name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              {...register("password", { 
                required: { value: true, message: "Password is required" }, 
                minLength: { value: 3, message: "Min length is 3" }, 
                maxLength: { value: 10, message: "Max length is 10" }
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
              id="password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input 
              type="password" 
              {...register("confirmPassword", { 
                validate: value => value === watch('password') || "Passwords do not match"
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
              id="confirmPassword"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>

          <div className="mt-6">
            <p><strong>Entered Name:</strong> {watch("name")}</p>
            <p><strong>Entered Password:</strong> {watch("password")}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default pass;
