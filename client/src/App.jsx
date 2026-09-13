import './index.css'
import { Intro } from "./pages/Intro"
import { Login } from "./pages/Login"
import {SignUp} from "./pages/SignUp"
import {Search} from "./pages/Search"
import {History} from "./pages/History"
import {Navbar} from "./pages/Navbar"
import {Route , Routes} from "react-router-dom"
function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/history' element={<History />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </>
  )
}

export default App
