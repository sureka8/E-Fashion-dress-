import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles
import { Navigation } from "swiper/modules"; // Correct import for Navigation module
import ShopNowButton from "./button/ShopNowButton";

const products = [
    {
      name: "Dress",
      price: "$140.99",
      image:
        "https://uiparadox.co.uk/templates/voguify/assets/media/product/image-3.png",
      rating: 5,
    },
    {
      name: "Enchanting Orchid Evening Dress",
      price: "$140.99",
      image:
        "https://uiparadox.co.uk/templates/voguify/assets/media/product/image.png",
      rating: 5,
    },
    {
      name: "Celestial Serenity Gown",
      price: "$140.99",
      image:
        "https://uiparadox.co.uk/templates/voguify/assets/media/product/image-2.png",
      rating: 5,
    },
    {
      name: "Starlit Soiree Sequin Dress",
      price: "$140.99",
      image:
        "https://uiparadox.co.uk/templates/voguify/assets/media/product/product-1a.png",
      rating: 5,
    },
  ];

const TrendingProducts = () => {
  return (
    <div className="bg-[#f4f1ef] px-[5vw] py-[2vh]">
      <div className="flex flex-row w-full justify-between items-center">
      <h2 className="text-[70px] font-serif text-left mb-10 text-[#282525]">
        Trending Products
      </h2>
      <ShopNowButton/>
      </div>
     

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true} // Enable navigation
        modules={[Navigation]} // Attach Navigation module
        className="productSlider"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center  p-5 ">
              <img
                src={product.image}
                alt={product.name}
                className="w-[80%] object-cover mb-4 "
              />
              <div className="flex flex-row justify-between items-center w-full ">
                <p className="text-base text-gray-700 ">{product.name}</p>
                <div className="flex mb-1">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927C9.469 2.02 10.531 2.02 10.951 2.927L12.379 6.08L15.949 6.64C16.937 6.795 17.342 7.975 16.604 8.648L13.968 10.965L14.712 14.532C14.91 15.52 13.867 16.268 13.003 15.837L10 14.377L6.997 15.837C6.133 16.268 5.09 15.52 5.288 14.532L6.032 10.965L3.396 8.648C2.658 7.975 3.063 6.795 4.051 6.64L7.621 6.08L9.049 2.927Z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xl text-gray-700 text-left self-start">
                {product.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TrendingProducts