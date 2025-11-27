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
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/History' element={<History />} />
        <Route path='/Navbar' element={<Navbar />} />
      </Routes>
    </>
  )
}

export default App
