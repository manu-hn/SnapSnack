import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useRestaurants from '../utils/useRestaurants';
import RestaurantCard from '../RestaurantCard';
import WhatsOnYourMindShimmer from '../shimmer/WhatsOnYourMindShimmer';
import { Link } from 'react-router-dom';



const TopRestaurants = () => {

    const { topResChains } = useRestaurants();
   
    const settings= {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      if(!topResChains)return <WhatsOnYourMindShimmer />
    const {restaurants}=topResChains[1]?.card?.card?.gridElements?.infoWithStyle
    const {title}=topResChains[0]?.card?.card?.header
    return (
        <div className='w-[80vw] h-[10rem] mt-14 mb-24'>
         
            <h2 className='text-left font-bold text-2xl'>{title}</h2>
            <Slider {...settings}>
                {restaurants?.map((restaurant) => (<Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                    <RestaurantCard resCard={restaurant} />
                </Link>))}
            </Slider>
        </div>
    )
}

export default TopRestaurants