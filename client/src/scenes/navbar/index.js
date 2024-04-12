import React from 'react';
import slovensko from '../../assets/img/slovensko.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 py-4 px-40">
      <div className="flex items-center">
        <img src={slovensko} alt="Logo" className="h-20 mr-4" />
        <span className="text-gray-800 font-bold text-xl">Kulturne registre</span>
      </div>
      <div className="flex space-x-8">
        <button className="text-white font-bold text-xl">API</button>
        <button className="text-white font-bold text-xl">Historia</button>
        <button className="text-white font-bold text-xl">Ziadosti</button>
        <button className="text-white font-bold text-xl">Odhlasit sa</button>
      </div>
    </nav>
  );
};

export default Navbar;