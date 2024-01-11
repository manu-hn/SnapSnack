var $834ce$reactjsxruntime = require("react/jsx-runtime");
var $834ce$react = require("react");
var $834ce$reactrouterdom = require("react-router-dom");
var $834ce$reactredux = require("react-redux");
var $834ce$axios = require("axios");


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
parcelRegister("7Q2ix", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $5b4f2c1009959d0e$export$2e2bcd8739ae039);



var $bXMFP = parcelRequire("bXMFP");

var $e7oxT = parcelRequire("e7oxT");



var $IBF3Q = parcelRequire("IBF3Q");
const $5b4f2c1009959d0e$var$Blog = ()=>{
    const { foodBasedOnCountries: foodBasedOnCountries, setTypeOfArea: setTypeOfArea } = (0, $e7oxT.default)();
    const userInfo = (0, $834ce$reactredux.useSelector)((store)=>store.userInfo.isLoggedIn);
    function handleTypeOfFoodChange(e) {
        setTypeOfArea(e.target.value);
    }
    return userInfo ? /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsxs)("div", {
        className: "flex flex-col justify-center items-center w-full",
        children: [
            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("div", {
                className: "m-4",
                children: /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("span", {
                    children: /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsxs)("select", {
                        className: "w-72 bg-gray-200 bg-opacity-50 px-3 py-1 rounded-md",
                        onChange: handleTypeOfFoodChange,
                        name: "",
                        id: "",
                        children: [
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Indian",
                                children: "Indian"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Russian",
                                children: "Russian"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "French",
                                children: "French"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "American",
                                children: "American"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "British",
                                children: "British"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Canadian",
                                children: "Canadian"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Chinese",
                                children: "Chinese"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Croatian",
                                children: "Croatian"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Dutch",
                                children: "Dutch"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Egyptian",
                                children: "Egyptian"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Filipino",
                                children: "Filipino"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Greek",
                                children: "Greek"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Irish",
                                children: "Irish"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Italian",
                                children: "Italian"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Japanese",
                                children: "Japanese"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Jamaican",
                                children: "Jamaican"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Kenyan",
                                children: "Kenyan"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Malaysian",
                                children: "Malaysian"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Mexican",
                                children: "Mexican"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Spanish",
                                children: "Spanish"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Turkish",
                                children: "Turkish"
                            }),
                            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("option", {
                                value: "Unknown",
                                children: "Others"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("div", {
                className: "flex w-4/5 flex-wrap justify-evenly",
                children: foodBasedOnCountries?.map((eachCountryFoodStyle)=>/*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)((0, $834ce$reactrouterdom.Link), {
                        to: `/recipe/${eachCountryFoodStyle.idMeal}`,
                        children: /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)((0, $bXMFP.default), {
                            eachCountryFoodStyle: eachCountryFoodStyle
                        })
                    }, eachCountryFoodStyle.idMeal))
            })
        ]
    }) : /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)((0, $IBF3Q.default), {});
};
var $5b4f2c1009959d0e$export$2e2bcd8739ae039 = $5b4f2c1009959d0e$var$Blog;

});
parcelRegister("bXMFP", function(module, exports) {

$parcel$export(module.exports, "default", () => $8b5af5f9ecbe15d6$export$2e2bcd8739ae039);

const $8b5af5f9ecbe15d6$var$RecipeCard = ({ eachCountryFoodStyle: eachCountryFoodStyle })=>{
    const { strMeal: strMeal, strMealThumb: strMealThumb } = eachCountryFoodStyle;
    return /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsxs)("div", {
        className: "p-2 rounded-lg w-[100%] border m-1 text-center flex flex-col items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("img", {
                className: "w-56 rounded-lg",
                src: strMealThumb,
                alt: strMeal
            }),
            /*#__PURE__*/ (0, $834ce$reactjsxruntime.jsx)("h1", {
                className: "font-bold text-gray-500 line-clamp-1 ",
                children: strMeal
            })
        ]
    });
};
var $8b5af5f9ecbe15d6$export$2e2bcd8739ae039 = $8b5af5f9ecbe15d6$var$RecipeCard;

});

parcelRegister("e7oxT", function(module, exports) {

$parcel$export(module.exports, "default", () => $a474c25f9ee18721$export$2e2bcd8739ae039);


var $68dHL = parcelRequire("68dHL");

const $a474c25f9ee18721$var$useRecipes = ()=>{
    const [foodBasedOnCountries, setFoodBasedOnCountries] = (0, $834ce$react.useState)();
    const [typeOfArea, setTypeOfArea] = (0, $834ce$react.useState)("Indian");
    (0, $834ce$react.useEffect)(()=>{
        fetchRecipes();
    }, [
        typeOfArea
    ]);
    async function fetchRecipes() {
        try {
            const response = await (0, ($parcel$interopDefault($834ce$axios))).get((0, $68dHL.FOOD_API) + typeOfArea);
            console.log("Helloo", response.data.meals);
            setFoodBasedOnCountries(response?.data?.meals);
        } catch (error) {
            console.log(error.message);
        }
    }
    console.log("inside hook ", foodBasedOnCountries);
    return {
        foodBasedOnCountries: foodBasedOnCountries,
        setTypeOfArea: setTypeOfArea
    };
};
var $a474c25f9ee18721$export$2e2bcd8739ae039 = $a474c25f9ee18721$var$useRecipes;

});



//# sourceMappingURL=Blog.96212140.js.map
