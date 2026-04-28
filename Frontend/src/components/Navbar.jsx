import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();

  /*const [showMenu, setShowMenu] = useState(false);*/
  const [token,setToken]=useState(true);

  return (
    <div className='flex items-center justify-between px-8 py-4 bg-white shadow-md'>
      
      {/* Logo */}
      <img onClick={() => navigate('/')}src={assets.logo} alt="logo" className='w-44 cursor-pointer' />

      {/* Nav Links */}
      <ul className='hidden md:flex items-center gap-8 font-medium'>
        
        <li>
          <NavLink to='/'>
            {({ isActive }) => (
              <div className='flex flex-col items-center'>
                <p className='py-1'>HOME</p>
                <hr className={`h-0.5 bg-[#5F6FFF] w-3/5 ${isActive ? "block" : "hidden"}`} />
              </div>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to='/doctors'>
            {({ isActive }) => (
              <div className='flex flex-col items-center'>
                <p className='py-1'>ALL DOCTORS</p>
                <hr className={`h-0.5 bg-[#5F6FFF] w-3/5 ${isActive ? "block" : "hidden"}`} />
              </div>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to='/about'>
            {({ isActive }) => (
              <div className='flex flex-col items-center'>
                <p className='py-1'>ABOUT</p>
                <hr className={`h-0.5 bg-[#5F6FFF] w-3/5 ${isActive ? "block" : "hidden"}`} />
              </div>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact'>
            {({ isActive }) => (
              <div className='flex flex-col items-center'>
                <p className='py-1'>CONTACT</p>
                <hr className={`h-0.5 bg-[#5F6FFF] w-3/5 ${isActive ? "block" : "hidden"}`} />
              </div>
            )}
          </NavLink>
        </li>

      </ul> 

      {/* Button */}
      <div>
        {
          token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                  <img className='w-8 rounded-full' src={assets.profile_pic} alt=""/>
                  <img className='w-2.5' src={assets.dropdown_icon} alt=""/>
                  <div className='absolute top-5 right-0 pt-10 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4' >
                      <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>MY PROFILE</p>
                      <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>MY APPOINTMENTS</p>
                      <p onClick={() => setToken(false)}className='hover:text-black cursor-pointer'>LOG OUT</p>
                    </div>
                  </div>
                  </div>
          : 
        <button onClick={() => navigate('/login')}className='bg-[#5F6FFF] text-white px-6 py-2 rounded-full hover:opacity-90'>
          Create Account
        </button>
        }
      </div>

    </div>
  );
};

export default Navbar;