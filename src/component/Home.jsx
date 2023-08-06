import React from 'react'
import { Link,Switch,Route } from 'react-router-dom'
import Login from './Login'


const Home = () => {
  return (
    <div>
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="../tailwind.config.js" />
  <title>Document</title>
  <header className="bg-blue-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <img src="mm.png" alt width={94} height={100} /> 
      {/* <--<div class="text-white font-bold text-lg">Find Your Fitness</div>*/} 
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
  <div className="relative text-gray-600">
    <input type="search" name="search" placeholder="Search" className="w-full h-10 pl-10 pr-4 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2="16.65" y2="16.65" />
      </svg>
    </span>
  </div>
</div>

      <nav className="space-x-4">
      <Link to="/Login">Login</Link>      
      <a href="#" className="text-white hover:underline">sign in</a>
        <a href="#" className="text-white hover:underline">Categories</a>
        <a href="#" className="text-white hover:underline">About us</a>
        <a href="#" className="text-white hover:underline">Contact</a>
        <a href="#" className="text-white hover:underline">Shoping cart</a>
      </nav>
      
    </div>
  </header>
  <section className="bg-gray-900 text-white py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
    <p className="text-lg mb-8">This is the hero section of my website. It's awesome!</p>
    <a href="#about" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      Learn More
    </a>
  </div>
</section>
<section className="bg-gray-100 py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-4">Featured Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Featured Category Item 1 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="path/to/category1.jpg" alt="Category 1" className="w-full h-32 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold mb-2">Category 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#category1" className="text-blue-500 font-semibold mt-2">Learn More</a>
      </div>
      {/* Featured Category Item 2 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="path/to/category2.jpg" alt="Category 2" className="w-full h-32 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold mb-2">Category 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#category2" className="text-blue-500 font-semibold mt-2">Learn More</a>
      </div>
      {/* Add more Featured Category Items as needed */}
      {/* ... */}
    </div>
  </div>
</section>
<section className="py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-4">New Arrivals</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Product Item 1 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="path/to/product1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold mb-2">Product 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <span className="text-blue-500 font-semibold mt-2">$19.99</span>
      </div>
      {/* Product Item 2 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="path/to/product2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold mb-2">Product 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <span className="text-blue-500 font-semibold mt-2">$29.99</span>
      </div>
      {/* Add more Product Items as needed */}
      {/* ... */}
    </div>
  </div>
</section>
<section className="py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
    <br/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Testimonial 1 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="path/to/avatar1.jpg" alt="Avatar 1" className="w-12 h-12 rounded-full mb-4 mx-auto" />
        <p className="text-lg mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ligula eu elit viverra varius a ac ex."</p>
        <h3 className="text-xl font-semibold">John Doe</h3>
        <p className="text-gray-600">CEO, Company ABC</p>
      </div>
      {/* Testimonial 2 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="path/to/avatar2.jpg" alt="Avatar 2" className="w-12 h-12 rounded-full mb-4 mx-auto" />
        <p className="text-lg mb-4">"Praesent eget massa dapibus, hendrerit velit a, feugiat orci. Nullam volutpat odio ut ipsum volutpat posuere."</p>
        <h3 className="text-xl font-semibold">Jane Smith</h3>
        <p className="text-gray-600">Marketing Manager, Company XYZ</p>
      </div>
      {/* Add more Testimonials as needed */}
      {/* ... */}
    </div>
  </div>
</section>
<section className="py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-4">Benefits of Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Benefit 1 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <svg className="w-12 h-12 text-blue-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold mb-2">Benefit 1</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      {/* Benefit 2 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <svg className="w-12 h-12 text-blue-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold mb-2">Benefit 2</h3>
        <p className="text-gray-600">Praesent eget massa dapibus, hendrerit velit a, feugiat orci.</p>
      </div>
      {/* Add more Benefits as needed */}
      {/* ... */}
    </div>
  </div>
</section>
<section className="py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
    <div className="flex flex-col md:flex-row items-center">
        <center>
      <input type="email" placeholder="Enter your email address" className="items-center w-full md:w-96 px-4 py-3 rounded-lg mb-4 md:mb-0 md:mr-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
      </center>
    </div>
  </div>
</section>
<footer className="bg-gray-900 text-white py-6">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-500">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500">Terms of Service</a>
        <a href="#" className="hover:text-blue-500">Contact Us</a>
      </div>
    </div>
  </div>
</footer>








</div>


    </div>
  )
}

export default Home