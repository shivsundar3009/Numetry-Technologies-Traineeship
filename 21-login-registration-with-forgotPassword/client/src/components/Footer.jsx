import React from 'react'

function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-300 py-8">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/3 px-4">
                <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
                <p>123 School St.</p>
                <p>City, State ZIP</p>
                <p>Email: info@school.com</p>
                <p>Phone: 123-456-7890</p>
            </div>
            <div class="w-full md:w-1/3 px-4">
                <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                <ul>
                    <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white">Academics</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white">Admissions</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white">Contact Us</a></li>
                </ul>
            </div>
            <div class="w-full md:w-1/3 px-4">
                <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
                <ul class="flex">
                    <li class="mr-4"><a href="#"><i class="fab fa-facebook-f text-gray-300 hover:text-white"></i></a></li>
                    <li class="mr-4"><a href="#"><i class="fab fa-twitter text-gray-300 hover:text-white"></i></a></li>
                    <li class="mr-4"><a href="#"><i class="fab fa-instagram text-gray-300 hover:text-white"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in text-gray-300 hover:text-white"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer