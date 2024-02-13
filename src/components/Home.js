import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
    let info = useSelector((store) => store.userSlice.info);
    console.log(info);
  return (
    <div className='w-80 m-auto mt-40'>
      <h1 className='text-white'>Name: {info.name}</h1>
      <h1 className='text-white'>Email: {info.email}</h1>
      <h1 className='text-white'>Phone: {info.phone}</h1>
    </div>
  )
}

export default Home
