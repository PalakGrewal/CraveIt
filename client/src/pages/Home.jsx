import { Link } from 'react-router-dom';
import pizza from '../images/pizza.jpeg';
import spinach from '../images/spinach.jpeg';
import tomato from '../images/tomato.jpeg';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* top */}
      <div className='flex flex-col gap-12 p-28 px-3 max-w-6xl mx-auto z-10'>
        <h1 className='text-orange-600 font-bold text-3xl lg:text-6xl'>
          Fresh foods, delicious dishes 
          <span className='text-orange-900'> delivered</span>
          <br/>
          at your doorsteps!
        </h1>
        <div className='text-orange-800 font-bold text-sm sm:text-base'>
          CraveIt delivers food items of your choice anytime, anywhere to you.
          <br/>
          Order from your favourite restaurant now...
        </div>
        <Link to={'/search'}
          className='text-sm sm:text-base text-blue-900 font-bold hover:underline my-3'>
          <button className='p-3 bg-orange-600 text-white rounded-2xl'>Let's get started...</button>
        </Link>
        <br/>
      </div>

      {/* swiper */}

      {/* bottom */}

      {/* pizza image */}
      <img src={pizza} alt="Pizza" className="pizza-image" />
      <img src={spinach} alt="Spinach" className="spinach-image" />
      <img src={tomato} alt="Tomato" className="tomato-image" />
    </div>
  );
};

export default Home;
