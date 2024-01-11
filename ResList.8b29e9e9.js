var $d7Skw$reactjsxruntime = require("react/jsx-runtime");
var $d7Skw$react = require("react");
var $d7Skw$reactrouterdom = require("react-router-dom");
var $d7Skw$reactredux = require("react-redux");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var $d7Skw$reactslick = require("react-slick");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequiree8cd"];
var parcelRegister = parcelRequire.register;
parcelRegister("kAZRS", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $efe72927952a3d39$export$2e2bcd8739ae039);



var $7aRrB = parcelRequire("7aRrB");

var $dTtoR = parcelRequire("dTtoR");


var $8zpbo = parcelRequire("8zpbo");

var $9Ok21 = parcelRequire("9Ok21");

var $jrgYl = parcelRequire("jrgYl");
parcelRequire("3ZlZc");

var $kymzn = parcelRequire("kymzn");


var $IBF3Q = parcelRequire("IBF3Q");

var $9ii1z = parcelRequire("9ii1z");
const $efe72927952a3d39$var$ResList = ()=>{
    const { restaurants: restaurants, filteredRestaurants: filteredRestaurants, setFilteredRestaurants: setFilteredRestaurants, bestRestaurants: bestRestaurants, topResChains: topResChains } = (0, $8zpbo.default)();
    const [searchText, setSearchText] = (0, $d7Skw$react.useState)("");
    const online = (0, $9Ok21.default)();
    const useInfo = (0, $d7Skw$reactredux.useSelector)((store)=>store.userInfo.isLoggedIn);
    function topRated(restaurants) {
        const filteredRestaurants = restaurants.filter((restaurant)=>{
            return restaurant.info.avgRating > 4;
        });
        setFilteredRestaurants(filteredRestaurants);
    }
    function filterRestaurants() {
        const filteredList = restaurants.filter((restaurant)=>{
            return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestaurants(filteredList);
    }
    if (!online) return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h1", {
        children: "Something went wrong please check your connection"
    });
    return useInfo ? restaurants?.length === 0 ? /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $dTtoR.default), {}) : /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
        className: "w-full mt-8 flex flex-col justify-start items-center flex-wrap container",
        children: [
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "mb-6"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $kymzn.default), {})
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "mb-14",
                children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $9ii1z.default), {})
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-[80%] mt-12 mb-6",
                children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h1", {
                    className: "text-left font-bold text-2xl",
                    children: topResChains[2]?.card?.card?.title
                })
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "flex justify-around w-[80%]",
                children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("input", {
                            type: "text",
                            placeholder: "Search Here",
                            className: "border-b-2 outline-none px-5 ml-4 border-black w-72",
                            value: searchText,
                            onChange: (e)=>setSearchText(e.target.value)
                        }),
                        /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("button", {
                            className: "ml-4 border-2 px-4 rounded ",
                            onClick: ()=>{
                                filterRestaurants();
                            },
                            children: "Search"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "flex flex-wrap justify-around w-[80%]",
                children: filteredRestaurants.map((restaurant)=>/*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)((0, $d7Skw$reactrouterdom.Link), {
                        to: `/restaurant/${restaurant.info.id}`,
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $7aRrB.default), {
                                resCard: restaurant
                            }),
                            " "
                        ]
                    }, restaurant.info.id))
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $jrgYl.default), {
                bestRestaurants: bestRestaurants[0]?.card?.card?.brands,
                title: bestRestaurants[0]?.card?.card?.title
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $jrgYl.default), {
                bestRestaurants: bestRestaurants[1]?.card?.card?.brands,
                title: bestRestaurants[1]?.card?.card?.title
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $jrgYl.default), {
                bestRestaurants: bestRestaurants[2]?.card?.card?.brands,
                title: bestRestaurants[2]?.card?.card?.title
            })
        ]
    }) : /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $IBF3Q.default), {});
};
var $efe72927952a3d39$export$2e2bcd8739ae039 = $efe72927952a3d39$var$ResList;

});
parcelRegister("7aRrB", function(module, exports) {

$parcel$export(module.exports, "default", () => $5392ec750da01c1b$export$2e2bcd8739ae039);



var $68dHL = parcelRequire("68dHL");
const $5392ec750da01c1b$var$RestaurantCard = ({ resCard: resCard })=>{
    const { name: name, cloudinaryImageId: cloudinaryImageId, areaName: areaName, cuisines: cuisines, costForTwo: costForTwo, avgRating: avgRating, sla: { deliveryTime: deliveryTime, slaString: slaString } } = resCard.info;
    return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
        className: "w-72  h-72 bg-gray-50 m-1 p-4 rounded-lg transition-transform transform hover:scale-[95%] hover:delay-[200]",
        children: [
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
                className: "flex flex-col justify-center items-center ",
                children: [
                    /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("img", {
                        className: "w-[100%] shadow-lg h-36 rounded-lg",
                        src: `${(0, $68dHL.IMG_API)}${cloudinaryImageId}`,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("label", {
                        className: "absolute top-[8.5rem] bg-gray-50 bg-opacity-75 text-center w-full text-black text-lg font-bold",
                        htmlFor: "",
                        children: [
                            resCard?.info?.aggregatedDiscountInfoV3?.header,
                            " ",
                            resCard?.info?.aggregatedDiscountInfoV3?.subHeader
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
                className: "description mt-2 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h4", {
                        className: "font-bold line-clamp-1",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("p", {
                        className: "text-gray-500 text-sm font-bold",
                        children: [
                            "  ",
                            avgRating,
                            "\u2B50 . ",
                            slaString
                        ]
                    }),
                    /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h4", {
                        className: "text-gray-500 text-sm w-[100%] line-clamp-1",
                        children: cuisines.join(", ")
                    }),
                    /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h4", {
                        className: "text-gray-500 text-sm line-clamp-1",
                        children: areaName
                    })
                ]
            })
        ]
    });
};
var $5392ec750da01c1b$export$2e2bcd8739ae039 = $5392ec750da01c1b$var$RestaurantCard;

});

parcelRegister("jrgYl", function(module, exports) {

$parcel$export(module.exports, "default", () => $e26db44ebfc39328$export$2e2bcd8739ae039);



var $dTtoR = parcelRequire("dTtoR");
const $e26db44ebfc39328$var$BestRestaurants = ({ bestRestaurants: bestRestaurants, title: title })=>{
    const [displayCount, setDisplayCount] = (0, $d7Skw$react.useState)(7);
    const handleShowMore = ()=>{
        setDisplayCount(bestRestaurants.length);
    };
    if (bestRestaurants.length === 0) return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $dTtoR.default), {});
    return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
            className: "w-[85%] mt-6",
            children: [
                /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h1", {
                    className: "font-bold text-2xl my-3 mx-4",
                    children: title
                }),
                /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("section", {
                    className: "flex flex-wrap justify-evenly",
                    children: [
                        bestRestaurants.slice(0, displayCount).map((brand)=>/*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                                className: "border rounded-xl m-2 px-2 py-3 w-[22%] text-center overflow-hidden cursor-pointer",
                                children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h1", {
                                    className: "line-clamp-1 text-gray-700 text-base font-medium",
                                    children: brand.text
                                })
                            }, brand.text)),
                        displayCount < bestRestaurants.length && /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                            className: "border rounded-xl m-2 px-2 py-3 w-[22%] text-center overflow-hidden cursor-pointer",
                            children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("button", {
                                onClick: handleShowMore,
                                className: "show-more-button",
                                children: "Show More \u2B07\uFE0F"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
var $e26db44ebfc39328$export$2e2bcd8739ae039 = $e26db44ebfc39328$var$BestRestaurants;

});

parcelRegister("3ZlZc", function(module, exports) {


var $8zpbo = parcelRequire("8zpbo");

var $7lQw5 = parcelRequire("7lQw5");




var $68dHL = parcelRequire("68dHL");
const $2e781f8faf9a2282$var$BestOffers = ()=>{
    const { resCards: resCards } = (0, $8zpbo.default)();
    if (resCards.length === 0) return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $7lQw5.default), {});
    const { info: info } = resCards[0]?.card?.card?.gridElements?.infoWithStyle;
    return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $d7Skw$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
            className: "w-[80vw] h-[20rem] mb-3 mt-4",
            children: [
                /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h2", {
                    className: "my-6 font-bold text-2xl",
                    children: " Best offers for you "
                }),
                /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, ($parcel$interopDefault($d7Skw$reactslick))), {
                    className: " flex",
                    ...(0, $68dHL.settings),
                    children: info.map((banner)=>/*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                            className: "w-[20rem] cursor-pointer",
                            children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("img", {
                                className: "w-[28rem] mx-2",
                                src: (0, $68dHL.BANNER_URL) + banner.imageId,
                                alt: ""
                            })
                        }, banner.id))
                })
            ]
        })
    });
};
var $2e781f8faf9a2282$export$2e2bcd8739ae039 = $2e781f8faf9a2282$var$BestOffers;

});
parcelRegister("7lQw5", function(module, exports) {

$parcel$export(module.exports, "default", () => $55a33b471be84b3a$export$2e2bcd8739ae039);

const $55a33b471be84b3a$var$BannerShimmer = ()=>{
    return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
        className: "flex ",
        children: [
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-[28rem] h-[15rem] bg-gray-200 m-3"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-[28rem] h-[15rem] bg-gray-200 m-3"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-[28rem] h-[15rem] bg-gray-200 m-3"
            })
        ]
    });
};
var $55a33b471be84b3a$export$2e2bcd8739ae039 = $55a33b471be84b3a$var$BannerShimmer;

});


parcelRegister("kymzn", function(module, exports) {

$parcel$export(module.exports, "default", () => $ef687d77fe261a7d$export$2e2bcd8739ae039);


var $8zpbo = parcelRequire("8zpbo");

var $j0TjN = parcelRequire("j0TjN");




var $68dHL = parcelRequire("68dHL");
const $ef687d77fe261a7d$var$WhatsOnYourMind = ()=>{
    const { whatsOnYourMind: whatsOnYourMind } = (0, $8zpbo.default)();
    const settings = {
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
    if (!whatsOnYourMind) return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $j0TjN.default), {});
    const { info: info } = whatsOnYourMind[0]?.card?.card?.gridElements?.infoWithStyle;
    const { title: title } = whatsOnYourMind[0]?.card?.card?.header;
    return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $d7Skw$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
            className: "w-[80vw] h-[10rem] mb-3",
            children: [
                /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("h2", {
                    className: "my-2 font-bold text-2xl",
                    children: [
                        " ",
                        title
                    ]
                }),
                /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, ($parcel$interopDefault($d7Skw$reactslick))), {
                    className: "",
                    ...settings,
                    children: info.map((item)=>/*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("img", {
                                className: "w-36",
                                src: (0, $68dHL.WHATS_ON_YOUR_MIND_URL) + item.imageId,
                                alt: ""
                            })
                        }, item.id))
                })
            ]
        })
    });
};
var $ef687d77fe261a7d$export$2e2bcd8739ae039 = $ef687d77fe261a7d$var$WhatsOnYourMind;

});
parcelRegister("j0TjN", function(module, exports) {

$parcel$export(module.exports, "default", () => $dd78ed73a9f8d9cc$export$2e2bcd8739ae039);

const $dd78ed73a9f8d9cc$var$WhatsOnYourMindShimmer = ()=>{
    return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
        className: "flex ",
        children: [
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-36 h-36 rounded-full bg-gray-100 m-4"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-36 h-36 rounded-full bg-gray-100 m-4"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-36 h-36 rounded-full bg-gray-100 m-4"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-36 h-36 rounded-full bg-gray-100 m-4"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-36 h-36 rounded-full bg-gray-100 m-4"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-36 h-36 rounded-full bg-gray-100 m-4"
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("div", {
                className: "w-36 h-36 rounded-full bg-gray-100 m-4"
            })
        ]
    });
};
var $dd78ed73a9f8d9cc$export$2e2bcd8739ae039 = $dd78ed73a9f8d9cc$var$WhatsOnYourMindShimmer;

});


parcelRegister("9ii1z", function(module, exports) {

$parcel$export(module.exports, "default", () => $6c43c6c0562d8a29$export$2e2bcd8739ae039);






var $8zpbo = parcelRequire("8zpbo");

var $7aRrB = parcelRequire("7aRrB");

var $j0TjN = parcelRequire("j0TjN");

const $6c43c6c0562d8a29$var$TopRestaurants = ()=>{
    const { topResChains: topResChains } = (0, $8zpbo.default)();
    const settings = {
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
    if (!topResChains) return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $j0TjN.default), {});
    const { restaurants: restaurants } = topResChains[1]?.card?.card?.gridElements?.infoWithStyle;
    const { title: title } = topResChains[0]?.card?.card?.header;
    return /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsxs)("div", {
        className: "w-[80vw] h-[10rem] mt-14 mb-24",
        children: [
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)("h2", {
                className: "text-left font-bold text-2xl",
                children: title
            }),
            /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, ($parcel$interopDefault($d7Skw$reactslick))), {
                ...settings,
                children: restaurants?.map((restaurant)=>/*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $d7Skw$reactrouterdom.Link), {
                        to: `/restaurant/${restaurant.info.id}`,
                        children: /*#__PURE__*/ (0, $d7Skw$reactjsxruntime.jsx)((0, $7aRrB.default), {
                            resCard: restaurant
                        })
                    }, restaurant.info.id))
            })
        ]
    });
};
var $6c43c6c0562d8a29$export$2e2bcd8739ae039 = $6c43c6c0562d8a29$var$TopRestaurants;

});



//# sourceMappingURL=ResList.8b29e9e9.js.map
