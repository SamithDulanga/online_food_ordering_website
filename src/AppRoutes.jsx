import { createBrowserRouter, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import HotDeals from "./components/HotDeals";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Item from "./components/Item";
import ProductDisplay from "./components/ProductDisplay";

const appRoutes = [
    {
        index: true,
        element: <Navigate to="home" />
    },
    {
        path: "home",
        element: <Hero/>
    },
    {
        path: "about",
        element: <About/>
        
    },
    {
        path: "hotdeals",
        element: <HotDeals/>
        
    },
    {
        path: "hotdeals/:productName",
        element: <Item/>
    },
    {
        path: "hotdeals/:productName/:name",
        element: <ProductDisplay/>
    },
    {
        path: "contact",
        element: <Contact/>
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "cart",
        element: <Cart />
    }
    // ,
    // {
    //     path: "product",
    //     element: <Product />,
    //     children: [
    //         {
    //             path: ":productId",
    //             element: <Product />
    //         }
    //     ]
    // }
]

const routes = [
    {
        index: true,
        element: <Navigate to="/chefmook" />
    },
    {
        path: "chefmook",
        element: <Main />,
        children: appRoutes
    }
]

export const router = createBrowserRouter(routes);