import React from 'react'
import {Eye,Send} from 'lucide-react'
import Image from 'next/image'

const Profile_view = () => {
  return (
    <div className="w-[20rem] bg-[#1b1f23] rounded-lg px-8 py-3 flex gap-3 flex-col text-white">
        <div>
            <h1>Your viewers also viewed</h1>
            <p className='flex items-center gap-1 text-gray-400 text-sm'><Eye size={15}/> Private to you</p>
        </div>
        <div className='flex gap-2'>
                <Image src='/assets/profile/k.jpg' width={100} height={0} alt='kishan' className='w-[3rem] h-[3rem] object-cover rounded-full'/>
            <div className='flex flex-col gap-1'> 
                <h1 className='font-semibold'>R Kishan</h1>
                <p className='text-sm'>Software Engineer | Passionate about Building Scalable....</p>
                <button className='py-2 p-3 rounded-2xl w-fit border-2 border-gray-400 flex gap-2 text-gray-400 items-center'><Send size={20}/>Message</button>
            </div>
        </div>
    </div>
  )
}

export default Profile_view
