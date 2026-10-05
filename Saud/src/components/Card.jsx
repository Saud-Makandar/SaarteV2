import React, { useEffect, useRef, useState } from 'react'

import Display from './Display'
import Description from './Description'

const Card = () => {

  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setVisible(true)
        }

      },
      {
        threshold: 0.2
      }
    )

    observer.observe(cardRef.current)

    return () => observer.disconnect()

  }, [])

  return (

    <div
      ref={cardRef}
      className={`
        w-full
        bg-white
        overflow-hidden
        transition-all
        duration-700
        ease-out
        

        ${visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
        }
      `}
    >

      <div className="relative group aspect-[4/5]">
        <Display />
      </div>

      <Description />

    </div>

  )
}

export default Card