import React from 'react';
import { assets } from '../assets/assets';
import { useState } from 'react';
const MyProfile = () => {

  const [userDate, setUserData] = useState({name:"Jack Harlow",
    image:assets.profile_pic,
    email:"whiteharlowjack@gamil.com",
    phone:"(415) 555-0132",
    address:{
      Line1:"54709 Willms Station",
      Line2:"Suite 350, Detriot, USA",
    },
    gender:"Male",
    DOB:"17/10/1972",
  })

  const [isEdit, setIsEdit] = useState(false)


  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm mx-5 my-5'>
     
      <img className='w-36 rounded' src={userDate.image} alt="Profile" />
      {
        isEdit 
        ?
        <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userDate.name} onChange={ (e) => setUserData(prev => ({...prev,name:e.target.value}))}></input>
        :
         <p className='font-medium text-3xl text-neutral-800 mt-4'>{userDate.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>
              Email id:
            </p>
            <p className='text-blue-500'>
              {userDate.email}
            </p>
            <p className='font-medium'>Phone:</p>
            {
             isEdit 
            ?
            <input className='bg-gray-100 max-w-52' type="text" value={userDate.phone} onChange={ (e) => setUserData(prev => ({...prev,phone:e.target.value}))}></input>
            :
            <p className='text-blue-400'>{userDate.phone}</p> 
            }
            <p className='font-medium'>Address:</p>
            {
              isEdit ?
              <p>
                <input className='bg-gray-50' type='text' value={userDate.address.Line1} onChange={(e)=> setUserData(prev => ({...prev,address:{...prev.address,line1: e.target.value}}))}></input>
                <br/>
                <input className='bg-gray-50' type='text' value={userDate.address.Line2} onChange={(e)=> setUserData(prev => ({...prev,address:{...prev.address,Line2: e.target.value}}))}></input>
              </p>
              :<p className='text-gray-500'>
                {userDate.address.Line1} 
                <br />
                {userDate.address.Line2}
              </p>
            }
          </div>
      </div>
            <div>
              <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
              <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                <p className='font-medium'>Gender:</p>
                {
                  isEdit 
            ?
            <select className='max-w-20 bg-gray-100' value={userDate.gender} onChange={(e)=> setUserData(prev => ({...prev,gender : e.target.value}))}> 
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
            : 
            <p className='text-gray-400'>{userDate.gender}</p>  
                }
                <p className='font-medium'>Birthday:</p>
                {
                  isEdit ? <input className='max-w-28 bg-gray-100' type="date"  value={userDate.DOB} onChange={(e)=> setUserData(prev => ({...prev,DOB : e.target.value}))}/>
                  : <p className='text-gray-400'>{userDate.DOB}</p>
                }
              </div>
            </div>
            <div className='mt-10'>
              {
                isEdit 
                ? <button className='border border-[#5F6FFF] px-8 py-2 rounded-full hover:bg-[#5F6FFF] hover:text-white transition-all duration-300' onClick={() => setIsEdit(false)}>Save Information</button>
                : <button className='border border-[#5F6FFF] px-8 py-2 rounded-full  hover:bg-[#5F6FFF] hover:text-white transition-all duration-300' onClick={() => setIsEdit(true)}>Edit</button>
              }
            </div>
    </div>
  );
};

export default MyProfile;