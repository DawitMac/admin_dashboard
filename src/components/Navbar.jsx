import React ,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import { RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import Avatar from '../data/avatar.jpg'
import {Cart , Chat ,Notification , UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider'

const NavButton=({title , color , icon , customFunc , dotColor})=>(
     <TooltipComponent content={title} position="BottomCenter">
           <button type='button' style={{color}} 
           className='relative text-xl rounded-full p-3 hover:bg-light-gray' 
           onClick={customFunc}>
              <span style={{backgroune:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
                   {icon}  
           </button>
     </TooltipComponent>
)
const Navbar = () => {
  const { activeMenu, setActiveMenu ,isClicked , handleClick
  ,screenSize , setScreenSize ,currentColor } = useStateContext();
  useEffect(()=>{
    const handleResize = ()=> setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize)
    handleResize();
    return ()=>{ window.removeEventListener('resize',handleResize)}
    },[]);
  useEffect(()=>{
      if(screenSize <= 900){
        setActiveMenu(false)
      }else{
        setActiveMenu(true)
      }
  },[screenSize]);

  return (
    <div className='flex justify-between md:justify-end p-2 md:mx-6 relative'>
      <div className='px-3 hover:drop-shadow-xl hover:rounded-full cursor-pointer duration-500 md:hidden'
        onClick={()=>{
            setActiveMenu(!activeMenu)
        }}>
          <AiOutlineMenu size={26} className='hover:drop-shadow-lg' />
        </div>
      <div className='flex'>
      <NavButton title="Cart" customFunc={()=>{ handleClick('Cart')}} color={currentColor} 
      icon={<FiShoppingCart />}/>
      <NavButton title="Chat" customFunc={()=>{ handleClick('Chat')}} color={currentColor} dotColor="#03C9D7"
      icon={<BsChatLeft />}/>
      <NavButton title="Notification" customFunc={()=>{ handleClick('Notification')}} color={currentColor} dotColor="#03C9D7"
      icon={<RiNotification3Line />}/>
           <TooltipComponent content="profile" position='BottomCenter'>
         <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
         onClick={()=>{handleClick('UserProfile')}}>
          <img src={Avatar}  className="h-8 w-8" alt="profile"/>
          <p>
            <span className='text-gray-400 text-14'>Hi, </span>{' '}
            <span className='text-gray-400 text-14 ml-1'>Mikiyas</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
         </div>
      </TooltipComponent>
      </div>
 
      {isClicked.Cart && <Cart />}
      {isClicked.Chat && <Chat />}
      {isClicked.Notification && <Notification />}
      {isClicked.UserProfile && <UserProfile />}
    </div>

  )
}

export default Navbar