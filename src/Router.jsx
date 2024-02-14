import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Chat from './chat'
import Dashboard from './dashboard'
import Customerdetail from './Customerdetail'
import Fooddetail from './fooddetail'
import Foods from './foods'
import Orderlist from './Orderlist'
import Orderstails from './Orderstails'
import Reviews from './reviews'
import Wallet from './wallet'
const Router = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/orderlist' element={<Orderlist/>}/>
    <Route path='/customerdetail' element={<Customerdetail/>}/>
    <Route path='/fooddetail' element={<Fooddetail/>}/>
    <Route path='/foods' element={<Foods/>}/>
    <Route path='/orderdetails' element={<Orderstails/>}/>
    <Route path='/review' element={<Reviews/>}/>
    <Route path='/wallet' element={<Wallet/>}/>
</Routes>

</BrowserRouter>



    </div>
  )
}

export default Router