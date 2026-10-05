import React from 'react'
import ilsu from'../assets/HaYoungBlack.jpeg'
import Hayoung2 from'../assets/Gemini_Generated_Image_kasa42kasa42kasa.png'
import { Heart } from 'lucide-react'
import{Eye} from 'lucide-react'
const Display = () => {
  return (
    <div>
      <img 
        src={ilsu} 
        alt="Product"
        className="w-full h-full object-cover"
        />
            <img
            src={Hayoung2}
            alt="Product"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />    
            <div className="absolute bottom-4 left-0 w-full flex justify-between gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
            <button className='bg-yellow-600 font-mono text-white w-1/2 h-12 hover:bg-amber-300'>Add to Bag</button>
            <div  className="bg-gray-300 w-1/2 h-12 flex justify-center items-center border-white border-2 backdrop- opacity-90 hover:bg-gray-300">
                <Eye color="white" strokeWidth={2.25} />
            </div>          
            </div>                            
        <Heart 
            color='black'
            strokeWidth={2.25}
            className="absolute top-3 right-4 z-10 transition-all duration-300 hover:scale-110 hover:fill-black"
        />
        <div className="bg-black text-white absolute top-3 left-4 z-10 text-center px-4 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                    New
        </div>
    </div>
  )
}

export default Display
