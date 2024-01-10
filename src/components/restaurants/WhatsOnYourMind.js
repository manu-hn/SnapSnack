import useRestaurants from "../utils/useRestaurants";
import WhatsOnYourMindShimmer from "../shimmer/WhatsOnYourMindShimmer.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WHATS_ON_YOUR_MIND_URL } from "../utils/EnvVariable";

const WhatsOnYourMind = () => {
    const { resCards } = useRestaurants();

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

    if (resCards.length === 0) return <WhatsOnYourMindShimmer />
    const { info } = resCards[1]?.card?.card?.gridElements?.infoWithStyle;
    return (
        <>
            <div className="w-[80vw] h-[10rem] mb-3">
                <h2 className="my-2 font-bold text-2xl"> {resCards[1].card?.card?.header.title}</h2>
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