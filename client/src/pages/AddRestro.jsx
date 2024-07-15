import spinach from '../images/spinach.jpeg';
import tomato from '../images/tomato.jpeg';

const AddRestro=() => {
  return (
    <div>
      <section>
      <div className="text-orange-700 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="text-center py-12">
          <h1 className="text-3xl lg:text-5xl font-bold">
            <span className='text-orange-800'>Partner with</span>
            <span className='text-orange-600'> Crave</span>
            <span className='text-green-700'>It</span>
          </h1>
          <p className="text-xl mt-4">
            at 0% commission for the 1st month!
          </p>
          <p className="mt-4">
            And get ads worth INR 1500. Valid for new restaurant partners in select cities.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-green-700 text-white py-2 px-4 rounded hover:opacity-95">
              Register your restaurant
            </button>
            <button className="bg-white text-black py-2 px-4 rounded hover:opacity-90">
              View your existing restaurants
            </button>
          </div>
          <p className="mt-4">
            Need help? 
            Contact +91 XXXXXXXXXX
            </p>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Get started with online ordering</h2>
        <p className="text-center mb-6">Please keep the documents ready for a smooth signup</p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            FSSAI license copy (<a href="#" className="text-blue-500 underline">apply now</a>)
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            PAN card copy
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Regular GSTIN (<a href="#" className="text-blue-500 underline">apply now</a>)
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Bank account details
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Your restaurant menu
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Dish images for top 5 items
          </li>
        </ul>
      </div>
    </div>
      </section>

      <section>
      <div className="bg-white text-center py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why should you partner with Zomato?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Zomato enables you to get 60% more revenue, 10x new customers, and boost your brand
          visibility by providing insights to improve your business.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-blue-600">1000+ cities</h3>
            <p className="text-gray-700">in India</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-blue-600">3 lakh+</h3>
            <p className="text-gray-700">restaurant listings</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-blue-600">5.0 crore+</h3>
            <p className="text-gray-700">monthly orders</p>
          </div>
        </div>
      </div>
    </div>
      </section>
      <img src={spinach} alt="Spinach" className="spinach2-image" />
      <img src={tomato} alt="Tomato" className="tomato2-image" />
    </div>
  )
}

export default AddRestro;
