
import React,{useState , useContext , createContext} from 'react'

const stateContext = createContext();



const initialState = {
    Cart : false ,
    Chat : false , 
    Notification : false , 
    UserProfile : false
}


export const ContextProvider = ({children})=>{
    const [activeMenu , setActiveMenu] = useState(true)
    const [isClicked , setIsClicked] = useState(initialState)
    const [screenSize , setScreenSize] = useState(undefined)
    const [themeSetting , setThemeSetting] = useState(false)
    const [currentColor , setCurrentColor ] = useState('#03C9D7')
    //const [currentMode , setCurrentMode] = useState('Light')
    

    const setColor = (color) => {
       setCurrentColor(color)
       setThemeSetting(false)
    }

   /* const setMode = (mode) =>{
        setCurrentMode(mode)
        setThemeSetting(false)
    }
   */

    const handleClick=(clicked)=>{
        setIsClicked(
            {...initialState , [clicked] : true}
        )
 }


 const handleCancelClick=(clicked)=>{
    setIsClicked(
        {...initialState , [clicked]:false}
    )
}

    return(
     <stateContext.Provider value={{activeMenu , setActiveMenu , isClicked , setIsClicked , handleClick
     , screenSize , setScreenSize , themeSetting , setThemeSetting , setColor , currentColor , setCurrentColor 
     , handleCancelClick }}>
        {children}
    </stateContext.Provider>
    )}

export const useStateContext=() => useContext(stateContext) ;
