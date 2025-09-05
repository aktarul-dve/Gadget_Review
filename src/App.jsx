
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import LoginPage from './pages/loginPage'
import Math from './components/Work/Math'
import Watch_Ads from './components/Work/Watch_Ads'
import Refer from './components/Work/Refer'
import Withdrow from './components/Work/Withdrow'

function App() {

  return (

    <BrowserRouter>

    <Routes>

    <Route path='/' element={<LoginPage/>}>
    </Route>

    <Route path='/userLayout' element={<UserLayout/>}> 
    <Route index element={<Home/>}/>
    <Route path='math' element={<Math/>} />
    <Route path='watchAds' element={<Watch_Ads/>} />
    <Route path='refer' element={<Refer/>} />
    <Route path='withdrow' element={<Withdrow/>} />
    
    </Route>

   </Routes>
    
    
    
    </BrowserRouter>
   
  )
}

export default App
