import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Minigame from './components/Minigame'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import Admin from './components/Admin'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Signup from './components/Auth/Signup'
import {AuthProvider} from './components/Auth/AuthProvider'
import ProtectedRoutes from './components/Auth/ProtectedRoutes'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Navigation/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/minigame" element={<Minigame/>}/>
            <Route path="/unicorn" element={<About/>}/>
            <Route path="/countries" element={<Countries/>}>
              <Route path="details/:countryname" element={<CountryDetails/>}/>
              <Route path="hellokitty" element={<About/>}/>
             </Route> 
            <Route path="/admin" element={<ProtectedRoutes/>}>
              <Route path="" element={<Admin/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
