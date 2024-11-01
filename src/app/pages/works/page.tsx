import Amazon_bottombar from '@/components/Works_comp/Amazon_bottombar'
import Amazon_hero from '@/components/Works_comp/Amazon_hero'
import Amazon_navbar from '@/components/Works_comp/Amazon_navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Amazon_navbar/>
      <Amazon_bottombar/>
      <Amazon_hero/>
    </div>
  )
}

export default page
