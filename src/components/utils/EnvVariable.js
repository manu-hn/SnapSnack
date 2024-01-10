

export const IMG_API = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;


export const MAIN_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.067439&lng=80.237617&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
export const MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=`;

export const BANNER_URL=`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`;

export const WHATS_ON_YOUR_MIND_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/`

export const FOOD_API = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
export const RECIPE_BASED_ON_ID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

export const BlogOptions = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2',
    params: {
      type: 'public',
      co2EmissionsClass: 'A+',
      'field[0]': 'uri',
      beta: 'true',
      random: 'true',
      'cuisineType[0]': 'American',
      'imageSize[0]': 'LARGE',
      'mealType[0]': 'Breakfast',
      'health[0]': 'alcohol-cocktail',
      'diet[0]': 'balanced',
      'dishType[0]': 'Biscuits and cookies'
    },
    headers: {
      'Accept-Language': 'en',
      'X-RapidAPI-Key': '323c7366b4msh312af2a7c3cce8fp102ccajsn54a7761da606',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };

// Slider Settings From React Slick - For BestOffers
  export const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.6,
    slidesToScroll: 2.6,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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

export const LOGIN_CREDENTIALS=`https://dummyjson.com/auth/login`
