"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <div id="image-info" onClick={handleOpenModal} className="cursor-pointer">
        {/* Image or element that triggers the modal */}
        <img 
          src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" 
          alt="Trigger Image" 
          className="object-cover w-full h-auto" 
        />
      </div>

      {isModalOpen && (
        <div className="relative z-10" role="dialog" aria-modal="true">
          <div 
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-auto">
              <button 
                type="button" 
                onClick={handleCloseModal} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" 
                    alt="Product" 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Basic Tee 6-Pack</h2>
                  <p className="text-2xl text-gray-900">$192</p>
                  <div className="mt-6">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center">
                      {/* Add star icons here */}
                      <Link href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</Link>
                    </div>
                  </div>
                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="text-sm font-medium text-gray-900">Product Options</h3>
                    <form>
                      <fieldset className="mt-4">
                        <legend className="text-sm font-medium text-gray-900">Color</legend>
                        <div className="mt-4 flex space-x-3">
                          {/* Color options here */}
                        </div>
                      </fieldset>
                      <fieldset className="mt-10">
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <div>Size</div>
                          <Link href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</Link>
                        </div>
                        <div className="mt-4 grid grid-cols-4 gap-4">
                          {/* Size options here */}
                        </div>
                      </fieldset>
                      <button 
                        type="submit" 
                        className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Add to bag
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
