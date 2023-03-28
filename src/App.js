import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'

import Clicker from './components/Clicker/Clicker'
import Minigame from './components/Minigame'
import Nopage from './components/Nopage'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <Header/>
          <Navigation/>
          
          <Routes>
            <Route path="*" element={<Nopage/>}/>
            <Route path="/" element={<Home/>}/>
        
            <Route path="/minigame" element={<Minigame/>}/>
            <Route path="/clicker" element={<Clicker/>}/>   
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
