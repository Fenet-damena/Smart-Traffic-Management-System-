import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

export default function Sidebar() {
  const location = useLocation();

  const linkClasses = (path) =>
    `block text-lg font-medium px-4 py-2 rounded-full transition text-center ${
      location.pathname === path
        ? 'bg-white text-[#101d3d]'
        : 'text-white hover:bg-white hover:text-[#101d3d]'
    }`;

  return (
    <aside className="fixed top-0 left-0 h-screen bg-[#101d3d] text-white w-60 flex flex-col justify-Top items-center z-30">
      <nav className="space-y-6 w-full px-4 text-center mt-20">
        <Link to="/" className={linkClasses("/")}>Home</Link>
        <Link to="/Filters" className={linkClasses("/Filters")}>Filters</Link>
        <Link to="/Profile" className={linkClasses("/Profile")}>Profile</Link>
      </nav>
    </aside>
  );
}
