import React from 'react'
import Header from './Header'

const UserCarDetails = () => {
  return (
    <div>
        <Header></Header>
        <div className='container pt-10'>
            <div>
                <h1 className='font-bold text-4xl px-12 text-center'>Your <span className='text-primary'>Cars</span></h1>
                <div className='flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14'>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCarDetails
