import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      {/* <img src="logo.png" alt="Logo" className="h-8 mr-2" /> */}
      {"☺️"}
      <span className="font-bold">Your Company</span>
    </div>
    <div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Services</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>
    <div>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer