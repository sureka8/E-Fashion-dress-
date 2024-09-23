import React, { useState, useEffect } from 'react';



const  ContentItem= [
    { image: "https://discover.certilogo.com/cdn/shop/articles/digital_fashion_0.jpg?v=1678805380", text: "First slide text" },
    { image: "https://unionavatars.com/wp-content/uploads/2022/12/Union-Avatars-fashion-designers-and-digital-fashion.jpg", text: "Second slide text" },
    { image: "https://discover.certilogo.com/cdn/shop/articles/digital_fashion_0.jpg?v=1678805380", text: "Third slide text" },
    { image: "https://unionavatars.com/wp-content/uploads/2022/12/Union-Avatars-fashion-designers-and-digital-fashion.jpg", text: "Fourth slide text" },
  ];

const Branding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [debugInfo, setDebugInfo] = useState({ scrollY: 0, progress: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const componentHeight = window.innerHeight;
      const totalScrollHeight = componentHeight * (ContentItem.length+1 );
      const scrollProgress = Math.min(scrollPosition / totalScrollHeight, 1);
      const newIndex = Math.min(
        Math.floor(scrollProgress * ContentItem.length),
        ContentItem.length - 1
      );
      
      setCurrentIndex(newIndex);
      setDebugInfo({ scrollY: scrollPosition, progress: scrollProgress });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
    <div className="h-screen sticky top-0 overflow-hidden">
      
       <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentIndex===0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={"https://appscrip.com/blog/wp-content/uploads/2023/10/online-fashion-shopping-with-smartphone-1024x534.jpg"}
            alt={`Background 2`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">
            First slide text              
            </h2>
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentIndex===1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={"https://www.appikr.com/blog/wp-content/uploads/2022/06/How-Much-Does-It-Cost-to-Develop-a-Shopping-App-Like-SHEIN.jpg"}
            alt={`Background 3`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">
            2 slide text              
            </h2>
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentIndex===2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={"https://discover.certilogo.com/cdn/shop/articles/digital_fashion_0.jpg?v=1678805380"}
            alt={`Background 3`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">
            3 slide text              
            </h2>
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentIndex===3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={"https://e3.365dm.com/24/05/2048x1152/skynews-zara-clothing_6569633.jpg"}
            alt={`Background 4`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">
            4 slide text              
            </h2>
          </div>
        </div>
    </div>
    <div className="h-screen"></div>
    <div className="h-screen"></div>
    <div className="h-screen"></div>
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
      Debug: ScrollY: {debugInfo.scrollY.toFixed(0)}, Progress: {debugInfo.progress.toFixed(2)}
    </div>
  </div>
  )
}

export default Branding