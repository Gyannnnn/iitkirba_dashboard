import VisitorChart from '@/components/visitorchart'
import React from 'react'
import Component from '@/components/visitorsgraph'


export default function page() {
  return (
    <div className=''>
      <h1 className='text-4xl pt-2 pl-2 mb-6'>Analytics</h1>
      <div className='w-[100vw] flex flex-col justify-center items-center'>
          <VisitorChart/>
          <Component/>
      </div>
    </div>
  )
}
