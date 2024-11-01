'use client'
import React, { useEffect, useState } from 'react'

interface PropsItems {
    buttonclick: boolean;
    count: number;
    pop: boolean;
}

const Popup: React.FC<PropsItems> = ({ buttonclick, count, pop }) => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (pop && !buttonclick && count === 0) {
            setMessage('Please enter valid airport location and Please add travellers to book a flight')
        } 
         else if(pop && !buttonclick) {
            setMessage('Please enter valid airport location ')
         }          
         else if(pop && count ==0){
            setMessage('Please enter valid number of travellers ')
         }
        else {
            setMessage('') 
        }
    }, [pop, buttonclick, count])

    return (
        <div className='bg-white w-1/2 h-1/2 rounded-xl flex items-center justify-center'>
            <h1 className='text-sm text-red-500 font-medium text-center'>{message}</h1>
        </div>
    )
}

export default Popup
