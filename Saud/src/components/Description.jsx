import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col gap-3 px-5 py-2'>
        <div>
            <span className='text-black font-mono'>Women's</span>
        </div>
        <div className='flex flex-col gap-1'>
            <h2 className='font-mono text-lg '>The Midnight Saarte Tuxedo Set</h2>
            <span className='line-clamp-2 text-gray-600 text-sm'>A sophisticated black tweed cropped blazer and mini skirt co-ord set with satin lapels and button detail. A timeless two-piece that effortlessly transitions from boardroom to evening.</span>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span>$420</span>
                <span className="line-through text-gray-500">$540</span>
            </div>
            <div className="flex items-center gap-1">
                <span>★★★★★</span>
                <span>4.8</span>
                <span>(53)</span>
            </div>
        </div>
        
        
    </div>
  )
}

export default Description
