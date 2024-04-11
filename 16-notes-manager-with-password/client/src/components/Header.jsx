
import { Link } from 'react-router-dom';


export const Header = () => {

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-lg">Note App</Link>
          <div className=' flex gap-5'>
            <button className='bg-blue-500 p-2 rounded-lg border-transparent border-2 hover:border-blue-500 hover:text-blue-500 hover:bg-white text-white'>LOGIN</button>
            <button className='bg-green-500 p-2 rounded-lg border-transparent border-2 hover:border-green-500 hover:text-green-500 hover:bg-white text-white'>SIGN UP</button>

            {/* Add other navigation links here */}
          </div>
        </div>
      </nav>
    
    </>
  );
};
