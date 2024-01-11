require("./index.css");
var $ltMAx$react = require("react");
var $ltMAx$axios = require("axios");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$reactrouterdom = require("react-router-dom");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$reactredux = require("react-redux");
var $ltMAx$reduxjstoolkit = require("@reduxjs/toolkit");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiree8cd"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiree8cd"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("9Ok21", function(module, exports) {

$parcel$export(module.exports, "default", () => $7248526d77d167ef$export$2e2bcd8739ae039);

const $7248526d77d167ef$var$useOnline = ()=>{
    const [online, setOnline] = (0, $ltMAx$react.useState)(true);
    (0, $ltMAx$react.useEffect)(()=>{
        window.addEventListener("offline", ()=>{
            setOnline(false);
        });
        window.addEventListener("online", ()=>{
            setOnline(true);
        });
    }, []);
    return online;
};
var $7248526d77d167ef$export$2e2bcd8739ae039 = $7248526d77d167ef$var$useOnline;

});

parcelRegister("8zpbo", function(module, exports) {

$parcel$export(module.exports, "default", () => $63d5205cae55ef0f$export$2e2bcd8739ae039);


var $68dHL = parcelRequire("68dHL");

const $63d5205cae55ef0f$var$useRestaurants = ()=>{
    const [latitude, setLatitude] = (0, $ltMAx$react.useState)("12.971599");
    const [longitude, setLongitude] = (0, $ltMAx$react.useState)("77.594566");
    const [resCards, setResCards] = (0, $ltMAx$react.useState)([]);
    const [restaurants, setRestaurants] = (0, $ltMAx$react.useState)([]);
    const [filteredRestaurants, setFilteredRestaurants] = (0, $ltMAx$react.useState)([]);
    const [bestRestaurants, setBestRestaurants] = (0, $ltMAx$react.useState)([]);
    const [whatsOnYourMind, setWhatsOnTourMind] = (0, $ltMAx$react.useState)(null);
    const [topResChains, setTopResChains] = (0, $ltMAx$react.useState)(null);
    (0, $ltMAx$react.useEffect)(()=>{
        fetchData();
    }, [
        location
    ]);
    async function fetchLatAndLong(location1) {
        console.log("Location ", location1);
        const response = await (0, ($parcel$interopDefault($ltMAx$axios))).get((0, $68dHL.LONG_LAT_API_FIRST) + location1.toLowerCase() + (0, $68dHL.LAT_LONG_API_KEY));
        const { lat: lat, lon: lon } = response?.data[0];
        setLatitude(lat);
        setLongitude(lon);
    }
    async function fetchData() {
        const response = await (0, ($parcel$interopDefault($ltMAx$axios))).get((0, $68dHL.MAIN_BEFORE_LAT) + latitude + (0, $68dHL.MAIN_URL_MID) + longitude + (0, $68dHL.MAIN_AFTER_LON));
        const totalRestaurants = response?.data?.data?.cards?.map((restaurant)=>restaurant).filter((res)=>res?.card?.card?.id === "top_brands_for_you");
        const bestCuisines = response?.data?.data?.cards?.map((cuisine)=>cuisine).filter((bestCuisine)=>bestCuisine?.card?.card?.id === "restaurant_near_me_links");
        const whatsOnYourMind = response?.data?.data?.cards?.map((cuisine)=>cuisine).filter((bestCuisine)=>bestCuisine?.card?.card?.id === "whats_on_your_mind");
        const topChains = response?.data?.data?.cards?.map((cuisine)=>cuisine).filter((bestCuisine)=>bestCuisine?.card?.card?.id === "top_brands_for_you");
        const topRestaurantsChains = response?.data?.data?.cards?.map((cuisine)=>cuisine).filter((bestCuisine)=>bestCuisine?.card?.card?.id === "restaurant_grid_listing");
        const popularRestaurantsTitle = response?.data?.data?.cards?.map((cuisine)=>cuisine).filter((bestCuisine)=>bestCuisine?.card?.card?.id === "popular_restaurants_title");
        const threeMergedArray = topChains.concat(topRestaurantsChains, popularRestaurantsTitle);
        setResCards(response.data.data.cards);
        setRestaurants(totalRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(totalRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setBestRestaurants(bestCuisines);
        setWhatsOnTourMind(whatsOnYourMind);
        setTopResChains(threeMergedArray);
    }
    return {
        restaurants: restaurants,
        filteredRestaurants: filteredRestaurants,
        setRestaurants: setRestaurants,
        setFilteredRestaurants: setFilteredRestaurants,
        bestRestaurants: bestRestaurants,
        resCards: resCards,
        whatsOnYourMind: whatsOnYourMind,
        topResChains: topResChains,
        fetchLatAndLong: fetchLatAndLong
    };
};
var $63d5205cae55ef0f$export$2e2bcd8739ae039 = $63d5205cae55ef0f$var$useRestaurants;

});
parcelRegister("68dHL", function(module, exports) {

$parcel$export(module.exports, "IMG_API", () => $476e1eeb878c5d04$export$e78b3895b4cc0ca7);
$parcel$export(module.exports, "MAIN_BEFORE_LAT", () => $476e1eeb878c5d04$export$89cc494331d3176b);
$parcel$export(module.exports, "MAIN_URL_MID", () => $476e1eeb878c5d04$export$39914667a0185d5f);
$parcel$export(module.exports, "MAIN_AFTER_LON", () => $476e1eeb878c5d04$export$656d4f27dc3595ce);
$parcel$export(module.exports, "LONG_LAT_API_FIRST", () => $476e1eeb878c5d04$export$88a6680327b8405e);
$parcel$export(module.exports, "LAT_LONG_API_KEY", () => $476e1eeb878c5d04$export$432840b8c2398f1b);
$parcel$export(module.exports, "MENU_URL", () => $476e1eeb878c5d04$export$8cdfb94642b82152);
$parcel$export(module.exports, "BANNER_URL", () => $476e1eeb878c5d04$export$3ea86c85d93f5a34);
$parcel$export(module.exports, "WHATS_ON_YOUR_MIND_URL", () => $476e1eeb878c5d04$export$95a9aa574bf2b8d2);
$parcel$export(module.exports, "FOOD_API", () => $476e1eeb878c5d04$export$4e8e3b218d60421d);
$parcel$export(module.exports, "RECIPE_BASED_ON_ID", () => $476e1eeb878c5d04$export$9d5601abe55ed256);
$parcel$export(module.exports, "settings", () => $476e1eeb878c5d04$export$a5a6e0b888b2c992);
$parcel$export(module.exports, "LOGIN_CREDENTIALS", () => $476e1eeb878c5d04$export$754e3c84e0f42e19);
const $476e1eeb878c5d04$export$e78b3895b4cc0ca7 = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
const $476e1eeb878c5d04$export$89cc494331d3176b = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=`;
const $476e1eeb878c5d04$export$39914667a0185d5f = `&lng=`;
const $476e1eeb878c5d04$export$656d4f27dc3595ce = `&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
const $476e1eeb878c5d04$export$93c2a8ed7d7036cd = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
const $476e1eeb878c5d04$export$88a6680327b8405e = `https://geocode.maps.co/search?q=`;
const $476e1eeb878c5d04$export$432840b8c2398f1b = `&api_key=659fc20de6710252197765svk3726c5`;
const $476e1eeb878c5d04$export$8cdfb94642b82152 = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=`;
const $476e1eeb878c5d04$export$3ea86c85d93f5a34 = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`;
const $476e1eeb878c5d04$export$95a9aa574bf2b8d2 = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/`;
const $476e1eeb878c5d04$export$4e8e3b218d60421d = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const $476e1eeb878c5d04$export$9d5601abe55ed256 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
const $476e1eeb878c5d04$export$2abdeaa2be88ffa6 = {
    method: "GET",
    url: "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2",
    params: {
        type: "public",
        co2EmissionsClass: "A+",
        "field[0]": "uri",
        beta: "true",
        random: "true",
        "cuisineType[0]": "American",
        "imageSize[0]": "LARGE",
        "mealType[0]": "Breakfast",
        "health[0]": "alcohol-cocktail",
        "diet[0]": "balanced",
        "dishType[0]": "Biscuits and cookies"
    },
    headers: {
        "Accept-Language": "en",
        "X-RapidAPI-Key": "323c7366b4msh312af2a7c3cce8fp102ccajsn54a7761da606",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
    }
};
const $476e1eeb878c5d04$export$a5a6e0b888b2c992 = {
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
const $476e1eeb878c5d04$export$754e3c84e0f42e19 = `https://dummyjson.com/auth/login`;

});


parcelRegister("dTtoR", function(module, exports) {

$parcel$export(module.exports, "default", () => $a1d7379e106bc668$export$2e2bcd8739ae039);


const $a1d7379e106bc668$var$Shimmer = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "flex flex-wrap justify-center items-center",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "w-56 h-[20rem] bg-gray-100 m-8 "
                })
            ]
        })
    });
};
var $a1d7379e106bc668$export$2e2bcd8739ae039 = $a1d7379e106bc668$var$Shimmer;

});

parcelRegister("IBF3Q", function(module, exports) {

$parcel$export(module.exports, "default", () => $086152eb9d77a0b9$export$2e2bcd8739ae039);


var $7mQ1d = parcelRequire("7mQ1d");
const $086152eb9d77a0b9$var$PleaseLoginToContinue = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "w-2/5 flex flex-col items-center mt-12",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                    children: "Don't miss out on the feast!"
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                    children: "Sign in to continue and explore the world of foods."
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7mQ1d.default), {
                    name: "Sign In",
                    path: "/login"
                })
            ]
        })
    });
};
var $086152eb9d77a0b9$export$2e2bcd8739ae039 = $086152eb9d77a0b9$var$PleaseLoginToContinue;

});
parcelRegister("7mQ1d", function(module, exports) {

$parcel$export(module.exports, "default", () => $55d2f04c863307cd$export$2e2bcd8739ae039);


const $55d2f04c863307cd$var$BackToHome = ({ name: name, path: path })=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
            to: path ? path : "/",
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                className: "font-semibold text-white text-md px-6 rounded-sm py-2 m-2 bg-orange-500",
                children: name ? name : "\uD83D\uDD19  Home"
            })
        })
    });
};
var $55d2f04c863307cd$export$2e2bcd8739ae039 = $55d2f04c863307cd$var$BackToHome;

});


parcelRegister("behWD", function(module, exports) {
module.exports = Promise.resolve(require("./Blog.96212140.js")).then(()=>parcelRequire("7Q2ix"));

});

parcelRegister("kD8fP", function(module, exports) {
module.exports = Promise.resolve(require("./ResList.8b29e9e9.js")).then(()=>parcelRequire("kAZRS"));

});









const $cd3180ac788bf9c1$var$initialState = {
    isLoggedIn: true
};
const $cd3180ac788bf9c1$var$userLoginSlice = (0, $ltMAx$reduxjstoolkit.createSlice)({
    name: "userInfo",
    initialState: $cd3180ac788bf9c1$var$initialState,
    reducers: {
        loginUser: (state)=>{
            state.isLoggedIn = true;
        },
        logoutUser: (state)=>{
            state.isLoggedIn = false;
        }
    }
});
const { loginUser: $cd3180ac788bf9c1$export$692b4a7cc7a486ce, logoutUser: $cd3180ac788bf9c1$export$e8df664d4863167e } = $cd3180ac788bf9c1$var$userLoginSlice.actions;
var $cd3180ac788bf9c1$export$2e2bcd8739ae039 = $cd3180ac788bf9c1$var$userLoginSlice.reducer;


var $80bdd66366d4e4b8$exports = {};
$80bdd66366d4e4b8$exports = new URL("MainLogo.95d72025.png", "file:" + __filename).toString();



var $9Ok21 = parcelRequire("9Ok21");


var $8zpbo = parcelRequire("8zpbo");
const $8ee2acc55b6a37cd$var$NavBar = ()=>{
    const [location, setLocation] = (0, $ltMAx$react.useState)("Bengaluru");
    const dispatch = (0, $ltMAx$reactredux.useDispatch)();
    const online = (0, $9Ok21.default)();
    const cartItems = (0, $ltMAx$reactredux.useSelector)((store)=>store.cart.items);
    const userInfo = (0, $ltMAx$reactredux.useSelector)((store)=>store.userInfo.isLoggedIn);
    const { fetchLatAndLong: fetchLatAndLong } = (0, $8zpbo.default)();
    function colorGiver() {
        if (online) return "green";
        return "red";
    }
    const logoutHandler = ()=>{
        dispatch((0, $cd3180ac788bf9c1$export$e8df664d4863167e)());
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "flex w-full px-2 py-2 bg-orange-500 justify-between items-center flex-col",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "flex w-full justify-evenly items-center px-8",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                        className: "w-28",
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($80bdd66366d4e4b8$exports))),
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                            className: "bg-transparent border-b-2 border-slate-100 placeholder:text-slate-200 px-4",
                            type: "text",
                            name: "location",
                            id: "location",
                            placeholder: "Bengaluru, Karnataka ",
                            onChange: (e)=>setLocation(e.target.value)
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                            className: "px-6 py-1 rounded-lg border ml-4",
                            onClick: ()=>fetchLatAndLong(location),
                            children: "Search"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "flex mx-8",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                className: "mx-4 ",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/",
                                        children: "Home"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                className: "mx-4 ",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/about",
                                        children: "About"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                className: "mx-4 ",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/recipe",
                                        children: "Recipes"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                className: "mx-4 ",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/contact",
                                        children: "Contact"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                className: "mx-4 ",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/cart",
                                        children: [
                                            " \uD83D\uDED2",
                                            cartItems.length
                                        ]
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("li", {
                                className: "mx-4",
                                children: [
                                    " ",
                                    userInfo ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                        onClick: logoutHandler,
                                        children: "Logout"
                                    }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/login",
                                        children: "Login"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                className: "mx-4 h-3 w-3",
                                style: {
                                    backgroundColor: colorGiver()
                                }
                            })
                        ]
                    })
                })
            ]
        })
    });
};
var $8ee2acc55b6a37cd$export$2e2bcd8739ae039 = $8ee2acc55b6a37cd$var$NavBar;







const $5fb6824ecdbc4b75$var$initialState = {
    items: []
};
const $5fb6824ecdbc4b75$var$cartSlice = (0, $ltMAx$reduxjstoolkit.createSlice)({
    name: "cart",
    initialState: $5fb6824ecdbc4b75$var$initialState,
    reducers: {
        addToCart: (state, action)=>{
            state.items.push(action.payload);
        },
        removeFromCart: (state, action)=>{
            state.items.splice(action.payload, 1);
        },
        clearCart: (state, action)=>{
            state.items.length = 0;
        }
    }
});
const { addToCart: $5fb6824ecdbc4b75$export$576b6dd9d68b37bc, removeFromCart: $5fb6824ecdbc4b75$export$afcd3788490386c5, clearCart: $5fb6824ecdbc4b75$export$810121176e3e3671 } = $5fb6824ecdbc4b75$var$cartSlice.actions;
var $5fb6824ecdbc4b75$export$2e2bcd8739ae039 = $5fb6824ecdbc4b75$var$cartSlice.reducer;



const $4e74df54031d2168$var$appStore = (0, $ltMAx$reduxjstoolkit.configureStore)({
    reducer: {
        cart: (0, $5fb6824ecdbc4b75$export$2e2bcd8739ae039),
        userInfo: (0, $cd3180ac788bf9c1$export$2e2bcd8739ae039)
    }
});
var $4e74df54031d2168$export$2e2bcd8739ae039 = $4e74df54031d2168$var$appStore;


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactredux.Provider), {
        store: (0, $4e74df54031d2168$export$2e2bcd8739ae039),
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $8ee2acc55b6a37cd$export$2e2bcd8739ae039), {}),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Outlet), {})
            ]
        })
    });
};
var $da11a1101b2a894a$export$2e2bcd8739ae039 = $da11a1101b2a894a$var$App;




const $755342a8d264462f$var$About = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                children: "Hello There...!"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                children: "This is about page"
            })
        ]
    });
};
var $755342a8d264462f$export$2e2bcd8739ae039 = $755342a8d264462f$var$About;



const $5eb483915f3e9850$var$Contact = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                children: "Thank you for your interest"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                children: "Visit Again"
            })
        ]
    });
};
var $5eb483915f3e9850$export$2e2bcd8739ae039 = $5eb483915f3e9850$var$Contact;




const $069aac76263cafef$var$Error = ()=>{
    const err = (0, $ltMAx$reactrouterdom.useRouteError)();
    console.log(err);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                children: "Error"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                children: err.data
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h3", {
                children: [
                    err.status,
                    " : ",
                    err.statusText
                ]
            })
        ]
    });
};
var $069aac76263cafef$export$2e2bcd8739ae039 = $069aac76263cafef$var$Error;




var $dTtoR = parcelRequire("dTtoR");



var $68dHL = parcelRequire("68dHL");

const $72a0ff52b46486b8$var$useMenuCard = (resID)=>{
    const [resMenu, setResMenu] = (0, $ltMAx$react.useState)(null);
    (0, $ltMAx$react.useEffect)(()=>{
        fetchMenu();
    }, []);
    async function fetchMenu() {
        const axiosMenu = await (0, ($parcel$interopDefault($ltMAx$axios))).get((0, $68dHL.MENU_URL) + resID);
        setResMenu(axiosMenu.data.data);
    }
    return resMenu;
};
var $72a0ff52b46486b8$export$2e2bcd8739ae039 = $72a0ff52b46486b8$var$useMenuCard;



const $a00383871730be96$var$TopMenu = ({ info: info })=>{
    const { name: name, areaName: areaName, cuisines: cuisines, totalRatingsString: totalRatingsString, sla: sla, feeDetails: feeDetails, avgRating: avgRating, costForTwoMessage: costForTwoMessage } = info;
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "flex flex-col justify-center w-full px-8 py-4",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "w-[60%]",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                className: "font-bold text-xl",
                                children: name
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "text-gray-400 text-xs mt-2",
                                children: cuisines.join(", ")
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                                className: "text-gray-400 text-xs mt-2",
                                children: [
                                    areaName,
                                    "  ",
                                    sla.lastMileTravelString
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                                className: "text-gray-400 text-sm mt-4",
                                children: [
                                    sla.lastMileTravelString + "s",
                                    " \u20B9  ",
                                    feeDetails.fees ? feeDetails?.fees[0]?.fee / 100 : null,
                                    "  Delivery fee will apply"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "flex items-center ",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: " flex flex-col p-2 justify-evenly items-center border h-[60%] rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h3", {
                                    className: "text-green-600 font-bold",
                                    children: [
                                        "*",
                                        avgRating
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "w-full h-[0.05rem] bg-black"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                    className: "text-gray-500 text-xs",
                                    children: totalRatingsString
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "w-full bg-gray-300 h-[0.05rem] mt-2"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "flex w-[50%] justify-start",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                        className: "font-bold text-base text-gray-700 mr-4",
                        children: "14mnts "
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                        className: "font-bold text-base text-gray-700",
                        children: costForTwoMessage ? costForTwoMessage : null
                    })
                ]
            })
        ]
    });
};
var $a00383871730be96$export$2e2bcd8739ae039 = $a00383871730be96$var$TopMenu;






var $68dHL = parcelRequire("68dHL");
const $d14b6f77f1739012$var$VegOnly = ({ vegMenu: vegMenu })=>{
    console.log("Veg Only ", vegMenu);
    return vegMenu ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "vegOnly",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("main", {
            className: "main-div",
            children: vegMenu.map((res)=>{
                return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "meal-detail",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                    children: res?.card.info?.name
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                    children: res?.card.info?.defaultPrice ? " " + res?.card.info?.defaultPrice / 100 : null
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h5", {
                                    children: res?.card.info?.category
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                    children: res?.card.info?.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                className: "menu-image",
                                src: (0, $68dHL.IMG_API) + res?.card.info?.imageId,
                                alt: ""
                            })
                        })
                    ]
                }, res?.card.info?.id);
            })
        })
    }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
        children: "There are no Veg Menu"
    });
};
var $d14b6f77f1739012$export$2e2bcd8739ae039 = $d14b6f77f1739012$var$VegOnly;



var $dTtoR = parcelRequire("dTtoR");



var $68dHL = parcelRequire("68dHL");



const $6cef0f1fb790634d$var$AddToCart = ({ item: item })=>{
    const dispatch = (0, $ltMAx$reactredux.useDispatch)();
    function addItemToCart(menuItem) {
        dispatch((0, $5fb6824ecdbc4b75$export$576b6dd9d68b37bc)(menuItem));
    }
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
            className: "px-2 rounded w-16 h-8 bg-black text-white  font-bold text-xl text-center",
            onClick: ()=>addItemToCart(item),
            children: "+"
        })
    });
};
var $6cef0f1fb790634d$export$2e2bcd8739ae039 = $6cef0f1fb790634d$var$AddToCart;





const $0159509a749dad19$var$RemoveItemFromCart = ({ index: index })=>{
    //     alert("Remove Item");
    const dispatch = (0, $ltMAx$reactredux.useDispatch)();
    function removeItem(index) {
        dispatch((0, $5fb6824ecdbc4b75$export$afcd3788490386c5)(index));
    }
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
            className: "px-2 rounded w-16 h-8 bg-black text-center text-2xl text-white ",
            onClick: ()=>removeItem(index),
            children: " - "
        })
    });
};
var $0159509a749dad19$export$2e2bcd8739ae039 = $0159509a749dad19$var$RemoveItemFromCart;


const $7b211545d3663857$var$SectionCard = ({ listInfo: listInfo })=>{
    const { title: title, itemCards: itemCards } = listInfo;
    const [isAccordionOpen, setIsAccordionOpen] = (0, $ltMAx$react.useState)(false);
    const handleVisibility = ()=>{
        // Toggle the visibility of the div
        setIsAccordionOpen(!isAccordionOpen);
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "w-full px-8 mt-4",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "flex justify-between px-4 bg-gray-100 bg-opacity-55 py-2 cursor-pointer",
                    onClick: handleVisibility,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h6", {
                            className: "text-xl font-bold text-black",
                            children: [
                                title,
                                " (",
                                itemCards.length,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                            className: "text-2xl",
                            children: "\u2B07\uFE0F"
                        })
                    ]
                }),
                isAccordionOpen && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    children: itemCards.map((cuisine)=>{
                        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "border-b w-[95%] flex justify-between m-4 p-4",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    className: "w-9/12",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h1", {
                                            className: "font-semibold",
                                            children: [
                                                " ",
                                                cuisine?.card?.info?.name,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h2", {
                                            className: "ml-4",
                                            children: [
                                                "- \u20B9 ",
                                                cuisine?.card?.info?.price ? cuisine?.card?.info?.price / 100 : cuisine?.card?.info?.defaultPrice / 100,
                                                " Rs"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                            className: "ml-4 text-xs",
                                            children: cuisine?.card?.info?.description
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    className: "flex flex-col items-end w-3/12 ",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                            className: "rounded w-36 h-24",
                                            src: (0, $68dHL.IMG_API) + cuisine?.card?.info?.imageId,
                                            alt: `Food Image`
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                            className: "flex justify-evenly mt-1 w-36",
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $6cef0f1fb790634d$export$2e2bcd8739ae039), {
                                                    item: cuisine
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0159509a749dad19$export$2e2bcd8739ae039), {
                                                    itemID: cuisine.card.info.id
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, cuisine.card.info.id);
                    })
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "w-full h-4 bg-gray-200 mt-8"
                })
            ]
        })
    });
};
var $7b211545d3663857$export$2e2bcd8739ae039 = $7b211545d3663857$var$SectionCard;


const $f0cc9a719c6317aa$var$BottomCards = ({ itemCards: itemCards })=>{
    const [menuList, setMenuList] = (0, $ltMAx$react.useState)(null);
    // const [showIndex, setShowIndex]=useState(null);
    (0, $ltMAx$react.useEffect)(()=>{
        menuCards();
    }, []);
    function menuCards() {
        const data = itemCards.map((menu)=>menu).filter((items)=>{
            return items.card.card.itemCards;
        });
        setMenuList(data);
    }
    if (menuList === null) return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $dTtoR.default), {});
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "w-full flex flex-col items-center justify-center",
        children: menuList.map((display, index)=>{
            return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7b211545d3663857$export$2e2bcd8739ae039), {
                listInfo: display.card.card
            }, display.card.card.title);
        })
    });
};
var $f0cc9a719c6317aa$export$2e2bcd8739ae039 = $f0cc9a719c6317aa$var$BottomCards;


const $1743cedb9f81933f$var$MenuCard = ()=>{
    const { resID: resID } = (0, $ltMAx$reactrouterdom.useParams)();
    const resMenu = (0, $72a0ff52b46486b8$export$2e2bcd8739ae039)(resID);
    // console.log(resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    if (resMenu === null) return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $dTtoR.default), {});
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "flex flex-col justify-center items-center w-full mt-8",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "w-[70%] flex items-center",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $a00383871730be96$export$2e2bcd8739ae039), {
                    info: resMenu.cards[0].card.card.info
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "w-[70%] flex items-center mt-16",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $f0cc9a719c6317aa$export$2e2bcd8739ae039), {
                    itemCards: resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                })
            })
        ]
    });
};
var $1743cedb9f81933f$export$2e2bcd8739ae039 = $1743cedb9f81933f$var$MenuCard;



var $dTtoR = parcelRequire("dTtoR");





var $68dHL = parcelRequire("68dHL");

const $250b999e93221288$var$CartItems = ({ item: item, index: index })=>{
    console.log("Cart Item", item);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "w-full flex justify-center m-2",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "w-3/6  flex justify-between border rounded-md px-2",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
                    className: "w-3/4 p-2 items-center flex justify-between mx-2 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "w-36",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                className: "rounded w-36 h-24",
                                src: (0, $68dHL.IMG_API) + item.card.info.imageId,
                                alt: item.card.info.name
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "flex justify-start flex-col w-2/4",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                    className: "line-clamp-1 font-semibold",
                                    children: item.card.info.name
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        " - \u20B9",
                                        item.card.info.price / 100
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "flex w-36 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $6cef0f1fb790634d$export$2e2bcd8739ae039), {
                            item: item
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0159509a749dad19$export$2e2bcd8739ae039), {
                            index: index
                        })
                    ]
                })
            ]
        })
    });
};
var $250b999e93221288$export$2e2bcd8739ae039 = $250b999e93221288$var$CartItems;




var $7mQ1d = parcelRequire("7mQ1d");
var $42169c51a6ec9ecb$exports = {};
$42169c51a6ec9ecb$exports = new URL("Cart Empty.b70b9f8b.png", "file:" + __filename).toString();


const $3c9b577736b356bb$var$NoItemsInCart = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "w-full h-[80vh] flex flex-col items-center justify-start",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                    src: (0, (/*@__PURE__*/$parcel$interopDefault($42169c51a6ec9ecb$exports))),
                    alt: "Cart is Empty"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "text-center font-bold text-lg text-gray-600",
                children: "Your cart is empty"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("q", {
                className: "text-gray-400",
                children: "You can go to home page to view more restaurants"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7mQ1d.default), {
                    name: "SEE RESTAURANTS NEAR YOU"
                })
            })
        ]
    });
};
var $3c9b577736b356bb$export$2e2bcd8739ae039 = $3c9b577736b356bb$var$NoItemsInCart;



var $IBF3Q = parcelRequire("IBF3Q");
const $8e09f99e7631503b$var$Cart = ()=>{
    const cartItems = (0, $ltMAx$reactredux.useSelector)((store)=>store.cart.items);
    const userInfo = (0, $ltMAx$reactredux.useSelector)((store)=>store.userInfo.isLoggedIn);
    if (userInfo) {
        if (cartItems.length === 0) return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $3c9b577736b356bb$export$2e2bcd8739ae039), {});
        const totalPrice = cartItems.reduce((accumulator, currentItem)=>{
            return accumulator + currentItem.card.info.price;
        }, 0);
        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: " w-full items-center flex flex-col",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "w-full",
                    children: cartItems.map((item, index)=>{
                        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $250b999e93221288$export$2e2bcd8739ae039), {
                            index: index,
                            item: item
                        }, item.card.info.id);
                    })
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "w-1/4 flex justify-center",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                        className: "",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h1", {
                            className: "font-semibold ",
                            children: [
                                " Total Price - \u20B9 ",
                                totalPrice / 100
                            ]
                        })
                    })
                })
            ]
        });
    } else return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $IBF3Q.default), {});
};
var $8e09f99e7631503b$export$2e2bcd8739ae039 = $8e09f99e7631503b$var$Cart;







var $68dHL = parcelRequire("68dHL");
const $813a0deee25401ba$var$useFoodInstructions = (recipeID)=>{
    const [foodRecipe, setFoodRecipe] = (0, $ltMAx$react.useState)(null);
    (0, $ltMAx$react.useEffect)(()=>{
        fetchFoodInstructions();
    }, []);
    async function fetchFoodInstructions() {
        try {
            const response = await (0, ($parcel$interopDefault($ltMAx$axios))).get((0, $68dHL.RECIPE_BASED_ON_ID) + recipeID);
            setFoodRecipe(response.data.meals[0]);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        foodRecipe: foodRecipe
    };
};
var $813a0deee25401ba$export$2e2bcd8739ae039 = $813a0deee25401ba$var$useFoodInstructions;



var $7mQ1d = parcelRequire("7mQ1d");
const $5471d23b0b7fee99$var$EachRecipeCard = ()=>{
    const { recipeID: recipeID } = (0, $ltMAx$reactrouterdom.useParams)();
    const { foodRecipe: foodRecipe } = (0, $813a0deee25401ba$export$2e2bcd8739ae039)(recipeID);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "w-full flex justify-center border-2 border-black py-6",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7mQ1d.default), {
                name: "Back To Recipes",
                path: "/recipe"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
                className: "w-4/5 flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "flex w-4/6 justify-around my-4",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                className: "font-bold text-2xl underline-offset-2 underline",
                                children: foodRecipe?.strMeal
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                className: "font-bold text-2xl underline-offset-2 underline",
                                children: foodRecipe?.strCategory
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                className: "font-bold text-2xl underline-offset-2 underline",
                                children: foodRecipe?.strArea
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "flex w-4/6 justify-between",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                        className: "w-80",
                                        src: foodRecipe?.strMealThumb,
                                        alt: ``
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        className: "m-5",
                                        to: foodRecipe?.strYoutube,
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                            className: "text-center px-4 py-2 m-8 text-white bg-red-600 rounded-lg",
                                            children: "Watch it on YouTube !"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                        className: "font-bold text-xl",
                                        children: "Ingredients Required"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient1
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient2
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient3
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient4
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient5
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient6
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient7
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient8
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                                children: foodRecipe?.strIngredient9
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "w-4/6 text-justify leading-8",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "text-center text-gray-500 font-bold",
                                children: foodRecipe?.strTags
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                children: foodRecipe?.strInstructions
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $5471d23b0b7fee99$export$2e2bcd8739ae039 = $5471d23b0b7fee99$var$EachRecipeCard;








var $888a5b1a5a2994f2$exports = {};
$888a5b1a5a2994f2$exports = new URL("Delivery.81b4e498.gif", "file:" + __filename).toString();




var $68dHL = parcelRequire("68dHL");
const $d85a5fa3ec86ef18$var$Login = ()=>{
    const [username, setUsername] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [message, setMessage] = (0, $ltMAx$react.useState)("");
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const dispatch = (0, $ltMAx$reactredux.useDispatch)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await (0, ($parcel$interopDefault($ltMAx$axios))).post((0, $68dHL.LOGIN_CREDENTIALS), {
                username: username,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch((0, $cd3180ac788bf9c1$export$692b4a7cc7a486ce)());
            setMessage("Welcome " + response.data.firstName + " " + response.data.lastName);
            setTimeout(()=>{
                setMessage("");
                navigate("/");
            }, 2000);
        } catch (error) {
            setMessage(error.response.data.message);
            setTimeout(()=>{
                setMessage("");
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "w-full flex justify-around  items-center m-8 ",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "w-2/5 flex justify-end",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($888a5b1a5a2994f2$exports))),
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "w-2/4",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                className: "w-full flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "flex m-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                                className: "w-20",
                                                src: (0, (/*@__PURE__*/$parcel$interopDefault($80bdd66366d4e4b8$exports))),
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                                className: "font-bold text-2xl",
                                                children: "SnapSnack"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                        className: "font-semibold m-2 text-lg text-gray-700",
                                        children: "Welcome to SnapSnack!"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                        className: "text-sm m-2 text-gray-500",
                                        children: "Ready to eat? Sign in and let the feast commence."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                                className: "w-full  flex flex-col items-center",
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "w-3/4 m-4 flex justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                htmlFor: "username",
                                                children: "Username  "
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                id: "username",
                                                type: "text",
                                                value: username,
                                                className: "border ml-2 px-4 w-2/3 border-black outline-none rounded-md",
                                                placeholder: "Enter Username",
                                                onChange: (e)=>setUsername(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "w-3/4 m-4 flex justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                                htmlFor: "password",
                                                children: "Password  "
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                id: "password",
                                                type: "password",
                                                value: password,
                                                className: "border ml-4 px-4 w-2/3 border-black outline-none rounded-md",
                                                placeholder: "Enter Password",
                                                onChange: (e)=>setPassword(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        className: "w-3/4 m-4 flex justify-center",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                            className: "w-2/4 py-1 text-white rounded-lg border bg-blue-500",
                                            type: "submit",
                                            children: "Login"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                className: "text-center font-semibold",
                                children: message
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "w-full text-center",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                    className: "text-xs font-extralight text-gray-400",
                    children: [
                        "To access the username and password details for login, I've utilized the ",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("b", {
                            children: " dummyjson "
                        }),
                        " authentication method. You can find the information by visiting",
                        " ",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                            target: "_blank",
                            to: "https://dummyjson.com/users",
                            className: "text-blue-500 underline",
                            children: "Click Here"
                        }),
                        " "
                    ]
                })
            })
        ]
    });
};
var $d85a5fa3ec86ef18$export$2e2bcd8739ae039 = $d85a5fa3ec86ef18$var$Login;



const $4fa36e821943b400$var$FoodRecipes = /*#__PURE__*/ (0, $ltMAx$react.lazy)(()=>(parcelRequire("behWD")));

const $4fa36e821943b400$var$ResList = /*#__PURE__*/ (0, $ltMAx$react.lazy)(()=>(parcelRequire("kD8fP")));
const $4fa36e821943b400$var$rootRouter = (0, $ltMAx$reactrouterdom.createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$2e2bcd8739ae039), {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$react.Suspense), {
                    fallback: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $dTtoR.default), {}),
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($4fa36e821943b400$var$ResList, {})
                })
            },
            {
                path: "/about",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $755342a8d264462f$export$2e2bcd8739ae039), {})
            },
            {
                path: "/contact",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $5eb483915f3e9850$export$2e2bcd8739ae039), {})
            },
            {
                path: "/recipe",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$react.Suspense), {
                    fallback: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $dTtoR.default), {}),
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($4fa36e821943b400$var$FoodRecipes, {})
                })
            },
            {
                path: "/recipe/:recipeID",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $5471d23b0b7fee99$export$2e2bcd8739ae039), {})
            },
            {
                path: "/restaurant/:resID",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $1743cedb9f81933f$export$2e2bcd8739ae039), {})
            },
            {
                path: "/cart",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $8e09f99e7631503b$export$2e2bcd8739ae039), {})
            },
            {
                path: "/login",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $d85a5fa3ec86ef18$export$2e2bcd8739ae039), {})
            }
        ],
        errorElement: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $069aac76263cafef$export$2e2bcd8739ae039), {})
    }
]);
const $4fa36e821943b400$var$root = (0, ($parcel$interopDefault($ltMAx$reactdomclient))).createRoot(document.getElementById("root"));
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.RouterProvider), {
    router: $4fa36e821943b400$var$rootRouter
}));


//# sourceMappingURL=index.js.map
