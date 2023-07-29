import React from 'react'
import { NavLink } from 'react-router-dom'
import {HiOutlineMenu} from 'react-icons/hi'
import { links } from '../data/dummy'
import ashewaLogo from '../data/ashewaLogo.png'
import {useStateContext} from '../contexts/ContextProvider'

const SideBar = () => {
  const { activeMenu , setActiveMenu} = useStateContext()
  const activeLink = 'flex items-center bg-green-600 gap-5 pl-4 pt-3 pb-2.5 sidebar rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    
<div className={`${activeMenu ? 'w-75' :'w-0 md:w-16 overflow-hidden'} scrollbar-hide duration-500 drop-shadow-lg bg-white h-screen overflow-y-auto`}>
    <div className='flex justify-between items-center py-4'>
      <img src={ashewaLogo} alt='logo' className={`h-13 w-60 ${!activeMenu&& 'hidden'}`}/>
        <div className='px-3 hover:drop-shadow-xl hover:rounded-full cursor-pointer duration-500'
        onClick={()=>{
            setActiveMenu(!activeMenu)
        }}>
          <HiOutlineMenu size={26} className='hover:drop-shadow-lg' />
        </div>
    </div>
    <div>
        {
            links.map((link , index)=>(
               <div key={index}>
                
                 <div className={`flex flex-col gap-5 ${activeMenu && 'px-3'}  py-4`}> 
                   <p className={`text-gray-600 ${!activeMenu&& 'hidden'} text-xl font-medium`}>{link.title}</p>
                   <div>
                     { 
                        link.links.map((item,index)=>(
                      <NavLink to={`/${item.name}`} key={link.name} className={({isActive})=>(
                        isActive ? activeLink: normalLink
                      )} onClick={()=>{ setActiveMenu(false)}}>
                        <div  key={index} className='flex items-center gap-5 py-3 cursor-pointer hover:drop-shadow-lg
                            rounded-lg transition-all font-semibold text-xl'>
                        <div>
                            {item.icon}
                        </div>
                              <p className={`relative ${activeMenu ? 'left-0' : 'opacity-0 w-0 overflow-hidden left-48'} duration-500 leading-8 px-2`}
                              style={{transitionDelay:`${index+3}00ms`}}>{item.name}</p>
                       </div>
                        </NavLink>
                        ))
                     }
                  </div>
               </div>
               </div>
            ))
        }
    </div>
    </div> 
  )
}

export default SideBar






/*
  import React, { useEffect } from 'react'
import {Link ,NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {useStateContext} from '../contexts/ContextProvider'
import {links} from '../data/dummy';


const Sidebar = () => {
  
  const { activeMenu ,setActiveMenu , currentColor} = useStateContext()
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 sidebar rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
 
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
        <div className='flex justify-between items-center'>
           <Link to='/' onClick={()=>setActiveMenu(false)} className="items-center gap-3 ml-3 mt-4 flex text-x1 font-extraboldtracking-tight dark:text-white text-slate-900">
            <SiShopware /><span>Shoppy</span>
           </Link>
           <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' onClick={()=>{setActiveMenu((prevState)=>(!prevState))}} 
            className='text-x1 rounded-full p-3 hover:bg-light-gray
            mt-4 block md:hidden'>
              <MdOutlineCancel /> 
            </button>
            </TooltipComponent>
        </div>
        <div className='mt-10'>
            {
              links.map(item=>(
                <div key={item.title}>
                    <p className='text-gray-400 m-3 mt-4 uppercase'>
                        {item.title}
                    </p>
                    {item.links.map(link=>(
                      <NavLink to={`/${link.name}`} key={link.name} onClick={()=>{}}
                      className={({isActive})=>(isActive ? activeLink : normalLink )}
                      style={({isActive})=>({backgroundColor: isActive? currentColor : ''})} >
                        {link.icon} <span className='capitalize'>
                          {link.name}
                        </span>
                        </NavLink>
                    ))}

                </div>
              ))
            }
        </div>
        </>
      )}

    </div>
  )
}

export default Sidebar   
*/