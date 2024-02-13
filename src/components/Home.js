import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
    let info = useSelector((store) => store.userSlice.info);
    let hobbies = useSelector((store) => store.userSlice.hobbies);
    let file = useSelector((store) => store.userSlice.file);
    let gender = useSelector((store) => store.userSlice.gender);
    console.log(info);
    console.log(hobbies);
    console.log(file);
    console.log(gender);
  return (
    <div className='w-80 m-auto mt-40 p-4 bg-slate-800'>
      <img src='https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg' alt='' className='text-white w-10 rounded-lg m-auto' />
      <h1 className='text-white'>Name: {info.name}</h1>
      <h1 className='text-white'>Email: {info.email}</h1>
      <h1 className='text-white'>Phone: {info.phone}</h1>
      <ul className='flex'>
        <h1 className='text-white mr-4'>Hobbies:</h1>
        {hobbies.map((e)=>{
          return <li className='text-white mr-2' key={e}>{e}</li>
        })}
      </ul>
        <h1 className='text-white'>Gender: {gender}</h1>
    </div>
  )
}

export default Home
