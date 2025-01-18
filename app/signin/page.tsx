import { LoginForm } from '@/components/loginform'
import React from 'react'

export default function page() {
  return (
    <div className='h-screen w-screen bg-secondary dark:bg-zinc-950 pt-14 flex items-center justify-center'>
        <div className='w-[90vw]  flex items-center justify-center'>
        <LoginForm/>
        </div>
        
    </div>
  )
}
