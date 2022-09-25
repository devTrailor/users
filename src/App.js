import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Navbar from './components/Navbar'
import ViewUser from './components/ViewUser'
import Home from './pages/home'

const App = () => {
  return (
    <div className='app'>
      {/* <div className="navbar">
        <Navbar />
      </div> */}
      <div className="main">

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addUser' element={<AddUser />} />
          <Route exact path='/editUser/:id' element={<EditUser />} />
          <Route exact path='/viewUser/:id' element={<ViewUser />} />
        </Routes>
      </div>
    </div>

  )
}

export default App