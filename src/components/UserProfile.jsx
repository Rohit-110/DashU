import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import { useStateContext } from '../contexts/ContextProvider';
const UserProfile = ({isHidden,setIsHidden}) => {


    const { userId } = useParams();
    const {currentColor}=useStateContext();
    // Dummy user data, replace with actual data from your backend
    const userData = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    };




  return (
    <>
    <div className="p-6 rounded-md shadow-md bg-gray-600 top-[50px] absolute z-[100]">
      <h1 className="text-2xl text-gray-200 font-bold mb-4">{userData.name}</h1>
      <div className="flex flex-row items-center mb-4">
        <img src={userData.avatarUrl} alt="User avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-400">{userData.email}</p>
          <p className="text-gray-400">{userData.role}</p>
        </div>
      </div>
      <Button
          color="white"
          bgColor={currentColor}
          text="Close"
          borderRadius="10px"
          onClick={() => {setIsHidden(!isHidden)}}
          size="sm"
          
      />
    </div>
  </>
  );
};

export default UserProfile;
