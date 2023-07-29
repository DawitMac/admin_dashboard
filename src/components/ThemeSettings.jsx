/*
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
//import { setComplexFieldID, setInfiniteColFrozenHeight } from '@syncfusion/ej2-react-grids'

const ThemeSettings = () => {
  const {setThemeSetting , currentColor , setColor , setCurrentMode ,setMode } = useStateContext();
  return (
    <div className='bg-half-transparent top-0 h-screen w-screen relative'>
      <div className='absolute h-full md:w-80 w-40 right-0 bg-white dark:bg-main-dark-bg'>
        <div className='flex justify-between ml-3 mt-3 m-2 md:m-4 p-2 md:p-10'>
          <p className='text-3xl font-semibold'>Settings</p>
          <button className='p-4 w-8 h-8 text-xl rounded-full hover:drop-shadow-xl hover:
          bg-light-gray-400' onClick={()=>{setThemeSetting(false)}}>
               <MdOutlineCancel />
          </button>
        </div>
        <div className='relative m-3 mt-4 ml-3'>
          <p className='text-2xl font-semibold'>Mode Settings</p>
          <div>
            <input type='radio' id='light' name='theme' value='Light' checked={true} onChange={()=>{
              setMode('Light')
            }} />
            <lable htmlFor='light' className='ml-2 text-xl font-semibold cursor-pointer'>Light</lable>
          </div>
          <div>
            <input type='radio' id='dark' name='theme' value='Dark' checked={true} onChange={()=>{
              setMode('Dark')
            }} />
            <lable htmlFor='light' className='ml-2 text-xl font-semibold cursor-pointer'>Dark</lable>
          </div>
        </div>
        <div>
          <p className='text-2xl font-semibold'>Theme Settings</p>
          <div className='flex justify-between ml-3 mt-4'>
          {themeColors.map((item , index)=>(
            <TooltipComponent content={item.name} position="TopCenter">
               <div key={index} className='flex w-8 h-8 items-center rounded-full hover:drop-shadow-xl'
               style={{backgroundColor: `${item.color}`}} onClick={()=>{
                 setColor(item.color)
               }} >
                <button className={`text-xl text-white ${currentColor ? 'block' : 'hidden'}`}>
                  <BsCheck />
                </button>
               </div>
            </TooltipComponent>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings */