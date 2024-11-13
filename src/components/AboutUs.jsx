import React from 'react'
import about from '../assets/images/slider3.webp'

const AboutUs = () => {
    return (
        <div className='container pt-10'>
            <div>
                <h1 className='font-bold text-4xl px-12'>About <span className='text-primary'>US</span></h1>
                <div className='flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14'>
                    {/* content section */}
                    <div className='w-full md:w-2/4 space-y-4'>
                        <h2 className='font-semibold text-lg lg:text-2xl'>Empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment.</h2>
                        <p className='text-sm lg:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugiat.</p>
                        <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci impedit blanditiis quas voluptatem reiciendis delectus esse iure, deserunt quis corrupti perferendis quisquam, magni consequuntur laboriosam quam eos debitis. Sequi.</p>
                    </div>

                    {/* img section */}
                    <div className='w-full md:w-2/5'>
                        <img src={about} alt="img" className='rounded-md'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
