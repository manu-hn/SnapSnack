import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/nav-component/About.js';
import Error from "./components/error/Error.js";
import MenuCard from "./components/menu/MenuCard.js";
import Shimmer from "./components/shimmer/Shimmer.js";
import Cart from "./components/cart/Cart.js";
import EachRecipeCard from "./components/blogs/EachRecipeCard.js";
import Login from "./components/auth/Login.js";

const FoodRecipes = lazy(() => import('./components/blogs/Blog.js'));
const ResList = lazy(() => import(`./components/ResList.js`));


const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<Shimmer />}>
                    <ResList />
                </Suspense>
            },

            {
                path: '/about',
                element: <About />
            },
            {
                path: '/recipe',
                element: <Suspense fallback={<Shimmer />}>
                    <FoodRecipes />
                </Suspense>
            },
            {
                path: '/recipe/:recipeID',
                element: <EachRecipeCard />
            },

            {
                path: '/restaurant/:resID',
                element: <MenuCard />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element: <Login />
            }

        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={rootRouter} />)