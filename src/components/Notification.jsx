import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button';

const Notification = ({ isHidden, setIsHidden }) => {
  const { userId } = useParams();

  // Dummy user data, replace with actual data from your backend
  const userData = {
    id: userId,
    name: 'John Doe',
  };
  const { currentColor } = useStateContext();

  return (
    <>
      <div className="p-6 rounded-md shadow-md bg-gray-600 absolute top-12 md:top-[50px] z-[100]">
        <h1 className="text-xl text-gray-200 font-bold mb-4">{userData.name}</h1>
        <div className="flex flex-row items-center mb-4">
          <div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam voluptates porro aliquid repellendus sunt ipsum dolore! Delectus soluta, sed numquam temporibus repudiandae aliquam, quasi amet culpa deleniti iure porro.
            </p>
          </div>
        </div>
        <Button color="white" bgColor={currentColor} text="Close" borderRadius="10px" onClick={() => { setIsHidden(!isHidden) }} size="sm" />
      </div>
    </>
  );
};

export default Notification;
