import React from 'react'

const App = () => {
  return (
    <div className='bg-[#F6F8FA] h-screen  py-24'>
     <div className='w-[500px] bg-blue-200 py-10 mx-auto'>
       <form >
        <div className='flex px-10 gap-x-10'>
          <div>
          <label htmlFor="name">Name:</label>
        <input className='bg-[#FDFEFD] px-2 py-1' id="name" type="text" placeholder='Name'/>
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>

        <input className='bg-[#FDFEFD] px-2 py-1' id="email" type="text" placeholder='Email'/>
        </div>
        </div>

        <div className='flex px-10 gap-x-10'>

          <div>
          <label htmlFor="password">Password</label>
        <input className='bg-[#FDFEFD] px-2 py-1' id="password" type="text" placeholder='Password'/>
        </div>
        <div>
          <label htmlFor="number">Numebr:</label>
        <input className='bg-[#FDFEFD] px-2 py-1' id="number" type="text" placeholder='Numebr'/>
        </div>
        </div>
        <div className='px-10 pt-10 '>
          <label className='block' htmlFor="dis">Discribation:</label>
        <textarea  className='pr-20 pl-2 h-[100px] w-[430px] bg-[#FDFEFD] px-2' id="dis" type="text" placeholder='Discribation'/>
        </div>
        <button className='bg-[#2260E8] rounded-md py-2 px-10 text-white flex mt-10 mx-auto'>
          Send
        </button>
      </form>
     </div>
    </div>
  )
}

export default App