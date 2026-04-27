import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        {' '}
        <div className="flex items-center justify-between">
         
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-20 md:w-40 md:h-24 object-contain"
            />
          </div>

          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition ${
                  isActive
                    ? 'bg-[#244D3F] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <Home size={20} />
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition ${
                  isActive
                    ? 'bg-[#244D3F] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <Clock size={20} />
              Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition ${
                  isActive
                    ? 'bg-[#244D3F] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <BarChart3 size={20} />
              Stats
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
