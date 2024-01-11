import useRestaurants from "../utils/useRestaurants";
import WhatsOnYourMindShimmer from "../shimmer/WhatsOnYourMindShimmer.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WHATS_ON_YOUR_MIND_URL } from "../utils/EnvVariable";

const WhatsOnYourMind = () => {
    const { whatsOnYourMind } = useRestaurants();
    
    const settings= {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6.5,
        slidesToScroll: 6.5,
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

    if (!whatsOnYourMind) return <WhatsOnYourMindShimmer />
    const {info} = whatsOnYourMind[0]?.card?.card?.gridElements?.infoWithStyle;
    const {title} = whatsOnYourMind[0]?.card?.card?.header;
    
    return (
        <>
            <div className="w-[80vw] h-[10rem] mb-3">
                <h2 className="my-2 font-bold text-2xl"> {title}</h2>
                <Slider className="" {...settings}>
                    {
                        info.map(item=>(<div key={item.id} className="cursor-pointer">
                            <img className="w-36" src={WHATS_ON_YOUR_MIND_URL + item.imageId} alt="" />
                        </div>))
                    }   
                </Slider>
            </div>
        </>
    )
};

export default WhatsOnYourMind;