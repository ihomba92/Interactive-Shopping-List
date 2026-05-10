import {BrowserRouter, Routes, Route} from "react-router-dom"
import Categories from './components/pages/Categories'
import Home from './components/pages/Home'
import Transactions from './components/pages/Transactions'
import Wallet from './components/pages/Wallet'
import Profile from './components/Profile'

export default function App(){
  return (
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='wallet' element={ <Wallet/>} />
        <Route path ='Categories' element={ <Categories/>} />
        <Route path ='transactions' element={<Transactions /> } />
        <Route path="profile" element={<Profile />} />
      </Routes> 
</BrowserRouter>
    
  )
}