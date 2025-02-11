import React from 'react'
import Body from '../Components/Body'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        
    </div>
  )
}

export default Home