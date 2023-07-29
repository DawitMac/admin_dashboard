import React from 'react';
import {MdOutlineCancel} from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider';
import { chatData } from '../data/dummy';
import Button from './Button';

export default Notification = () => {
  const { currentColor , handleCancelClick} = useStateContext();
  return(
    <div className='absolute top-16 right-5 md:right-40 bg-white dark:bg-secondary-dark-bg w-96 rounded-lg p-8'
     style={{zIndex : 1000}}>
      <div className='flex justify-between items-center mt-5'>
        <p className='text-lg font-semibold'>Notification</p>
        <button type='button' className='text-xl hover:bg-light-gray hover:drop-shadow-lg rounded-full'
        onClick={()=>{
          handleCancelClick('Notification')
        }} >
          <MdOutlineCancel />
        </button>
      </div>
      <div className='mt-5'>
        {
          chatData.map((item ,index )=>(
            <div key={index} className='flex items-center gap-5 border-b-1 border-color leading-8 cursor-pointer' >
              <img src={item.image} className='w-24 h-24 rounded-full'/>
              <div>
                <p className='text-xl font-semibold gap-1'>{item.desc}</p>
                <p className='texl-xl text-light-gray'>{item.message}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex items-center mt-5 w-full h-10'>
        <Button bgColor ={currentColor}
                color='white'  
                size='xl'  
                text ='See all notifications' 
                borderRadius='10px'
                 />
      </div>
    </div>
  );
}