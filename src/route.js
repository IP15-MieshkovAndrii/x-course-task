import {
    // BOOK_ROUTE, BOOKS_ROUTE, CART_ROUTE,
    SIGNIN_R
} from "./utils/consts";
// import Books from "./pages/Books/Books";
import * as React from 'react';
import Signin from "./pages/Signin/SigninPage.jsx";
// import SingleBook from "./pages/SingleBooks/SingleBook";
// import Cart from "./pages/Cart/Cart";
// import NotFound from "./pages/NotFound";
export const publicRoutes = [
    {
        path:SIGNIN_R,
        element:<Signin/>
    }
    // {
    //     path: '*',
    //     element: <NotFound/>
    // }
]
export const privateRoutes = [
    // {
    //     path:BOOK_ROUTE,
    //     element:<SingleBook/>
    // },
    // {
    //     path:CART_ROUTE,
    //     element:<Cart/>
    // },
    // {
    //     path:BOOKS_ROUTE,
    //     element:<Books/>
    // },
]