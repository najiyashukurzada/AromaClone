import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Add from '../pages/Add/Add'
import Home from '../pages/Home/Home'
import Wish from '../pages/Wishlist/Wish'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/wishlist' element={<Wish />} />
        </Routes>
    </div>
  )
}

export default Routers