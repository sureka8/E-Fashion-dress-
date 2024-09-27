import React from 'react'
import video from '../images/video1.mp4'
const BackgroundVideo = () => {
  return (
  
        <div className="relative h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 object-cover w-full h-full"
            autoPlay
            loop
            muted
          >
            <source
              src={video} // Replace with your video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
    
          {/* Overlay or Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-white bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold">Welcome to My Website</h1>
          </div>
        </div>
  )
}

export default BackgroundVideo