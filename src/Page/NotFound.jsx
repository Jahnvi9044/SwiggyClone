import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {

    const err= useRouteError();
  return (
    <div>
        <h1 className='font-bold text-6xl p-5'>OOPs Something Went Wrong!!</h1>
        <h1 className='font-bold text-3xl p-5'>{err.status}:{err.statusText} </h1>
    </div>
  )
}

export default NotFound