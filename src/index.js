import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/nav-component/About.js';
import Contact from './components/nav-component/Contact.js';
import Error from "./components/error/Error.js";
import ResList from "./components/ResList.js";
import MenuCard from "./components/menu/MenuCard.js";
import Shimmer from "./components/shimmer/Shimmer.js";
import Cart from "./components/cart/Cart.js";
import EachRecipeCard from "./components/blogs/EachRecipeCard.js";
import Login from "./components/auth/Login.js";

const FoodRecipes=lazy(()=>import('./components/blogs/Blog.js'))



const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path : '/',
                element : <ResList />
            },

            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path : '/recipe',
                element : <Suspense fallback={<Shimmer />}> <FoodRecipes /></Suspense>
            },
            {
                path : '/recipe/:recipeID',
                element : <EachRecipeCard />
            },

            {
                path : '/restaurant/:resID',
                element : <MenuCard />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/login",
                element : <Login />
            }

        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={rootRouter} />)