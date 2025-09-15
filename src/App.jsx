import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import LoginPage from './pages/loginPage'
import Math from './components/Work/Math'
import Watch_Ads from './components/Work/Watch_Ads'
import Refer from './components/Work/Refer'
import Withdrow from './components/Work/Withdrow'
import SpinWheel from './components/Work/SpinWheel '
import BanglaQuiz from './components/Work/BanglaQuiz'
import MathQuiz from './components/Work/MathQuiz'
import EnglishQuiz from './components/Work/EnglishQuiz'
import Profile from './components/Work/Profile'


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<LoginPage />} />

       
          <Route path="/userLayout" element={ <UserLayout /> }  >
          <Route index element={<Home />} />
          <Route path="math" element={<Math />} />
          <Route path="ads" element={<Watch_Ads/>} />
          <Route path="SpinWheel" element={<SpinWheel/>} />
          <Route path="banglaQuiz" element={<BanglaQuiz/>} />
          <Route path="mathQuiz" element={<MathQuiz/>} />
          <Route path="englishQuiz" element={<EnglishQuiz/>} />
          <Route path="refer" element={<Refer />} />
          <Route path="withdrow" element={<Withdrow />} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
