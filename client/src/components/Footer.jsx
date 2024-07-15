import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We deliver fresh and delicious food straight to your doorstep. Our mission is to provide the best quality meals to our customers.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="list-none text-gray-400">
              <li><a href="/menu" className="hover:text-white">Menu</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              123 Food Delivery Lane,<br />
              Food City, FD 12345<br />
              Email: <a href="mailto:info@fooddelivery.com" className="hover:text-white">info@fooddelivery.com</a><br />
              Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-5 text-center">
          <p className="text-gray-400">&copy; 2024 FoodDelivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
