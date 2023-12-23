import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/nav-component/About.js';
import Contact from './components/nav-component/Contact.js';
import Error from "./components/error/Error.js";
import ResList from "./components/ResList.js";
import MenuCard from "./components/menu/MenuCard.js";
import Blog from "./components/blogs/Blog.js";





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
                path : '/blog',
                element : <Blog />
            },
            {
                path : 'restaurant/:resID',
                element : <MenuCard />
            }

        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={rootRouter} />)