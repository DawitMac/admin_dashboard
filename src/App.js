import React  from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
//import {FiSettings} from 'react-icons/fi';
//import {TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar , Sidebar , ThemeSettings }
from './components'
import {Ecommerce , Orders , Employees,
Customers , Area ,Bar, Pie, Line}
 from './pages'
 import {useStateContext} from './contexts/ContextProvider'

import './App.css'
const App = () => {
    const {activeMenu , themeSetting ,  currentMode} = useStateContext();
  return (
       <div className={ currentMode === 'Dark' ? 'dark' : ''}>
          <BrowserRouter>
             <div className='flex relative dark:bg-main-dark-bg'>
                
                        <div className='fixed sidebar min-h-screen dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    <div className={activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen w-full md:ml-72' :
                  'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2' }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        

                    </div>
                    <div>
                        { themeSetting && <ThemeSettings /> }
                        <Routes>
                            {/* Dashboard */}
                            <Route path='/' element={<Ecommerce />} />
                            <Route path='/ecommerce' element={<Ecommerce />} />
                            {/* Dashboard */}
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/employees' element={<Employees />} />
                            <Route path='/customers' element={<Customers />} />
                            {/* Charts */}
                            <Route path='/line' element={<Line />} />
                            <Route path='/area' element={<Area />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/pie' element={<Pie />} />
                            
                        </Routes>
                    </div>
                    </div>
             </div>
          </BrowserRouter>
       </div>
  )
}

export default App

/*
<div className="fixed right-4 bottom-4 style={{zIndex:'1000'}}">
                    <TooltipComponent content="Settings" position="Top">
                        <button type='button' 
                        className='text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white'
                        style={{background: currentColor , borderRadius:'50%'}} onClick={()=>{setThemeSetting(true)}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                 </div>
*/