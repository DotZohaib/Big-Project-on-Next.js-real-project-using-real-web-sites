"use client";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressProvider from "../components/prices"
import BoxesProvider from "../components/cards"
import CompaniesLogo from "../components/comapnies"
import Head from 'next/head'
export default function Home() {

  // Function to handle 'Buy Now' button click
  const handleBuyNow = () => {
    toast.success('Successfully, Order is confirmed!');
  };

  // Function to handle 'Add To Cart' button click
  const handleAddToCart = () => {
    toast.info('Item added to cart!');
  };



  return (

    
    <div>
    

      <div className="flex w-full pl-10 md:pl-40">
        <div className="w-full md:w-[42vw] h-screen flex flex-col -mb-[38vh] md:mb-0 -mt-56 md:mt-0 justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold">
            Practice <br /> your <span className="text-blue-700">skills</span>
          </h1>
          <div className="w-full md:w-[38vw] mt-4 md:mt-20">
            <p className="text-xl font-serif">
              Lay the foundation for your future prospects and dreams with the skills for excellence with ZenZone.
            </p>
            <div className="flex gap-5 mt-10">
              <button
                onClick={handleAddToCart}
                className="font-serif border border-teal-200 bg-blue-700 px-8 py-2 rounded-full text-white hover:bg-blue-800 transition-all duration-300"
                type="button"
              >
                FIND COURSES
              </button>
              <button
                onClick={handleBuyNow}
                className="font-serif border border-teal-200 bg-blue-700 px-8 py-2 rounded-full text-white hover:bg-blue-800 transition-all duration-300"
                type="button"
              >
                ENROLL
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  gap-2">
          <Image
            className="hidden md:block h-[70vh] w-auto rounded-tr-full rounded-bl-full"
            src="/image/slider.jpg"
            width={400}
            height={700}
            alt="Slider Image 1"
          />
          <Image
            className="  hidden md:block h-[70vh] w-auto rounded-tl-full rounded-br-full"
            src="/image/slider2.jpg"
            width={400}
            height={700}
            alt="Slider Image 2"
          />
        </div>
      </div>

      <ToastContainer />
     <BoxesProvider/>
      <ProgressProvider/>
      <CompaniesLogo/>
    </div>
  );
}


