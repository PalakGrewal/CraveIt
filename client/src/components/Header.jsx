import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <header className="bg-orange-500 shadow-md">
        <div className = "flex justify-between items-center max-w-8xl mx-auto p-3">
        <Link to='/'>
        <h1 className ="font-bold text-base sm:text-4xl flex flex-wrap px-7">
            <span className ="text-amber-50">Crave</span>
            <span className="text-green-700">It</span>
        </h1>
        </Link>
        <form className="bg-orange-200 p-2 rounded-lg flex items-center">
            <input type="text" 
            placeholder="Search..." 
            className="bg-transparent focus:outline-none w-24 sm:w-64"/>
            <FaSearch className="text-slate-700"/>
        </form>
        <ul className ='flex gap-7 text-sm sm:text-lg px-7'>
            <Link to='/'>
            <li className=" hidden sm:inline text-white hover:underline">Home</li>
            </Link>
            <Link to='/add-restro'>
            <li className=" hidden sm:inline text-white hover:underline">Add Restaurant</li>
            </Link>
            <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-9 w-9 object-cover' src={currentUser.avatar} alt='profile'></img>
            ) : (
              <li className=" text-white hover:underline">Sign In</li>
            )}
            </Link>
        </ul>
        </div>
    </header>
  )
}
