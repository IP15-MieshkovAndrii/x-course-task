// import { Route, Routes } from "react-router-dom";
// // import { BrowserRouter as Routes, Route } from "react-router-dom";

// import SigninPage from "./pages/Signin/SigninPage";
// // import SpecificBookPage from "./pages/Book/SpecificBookPage";
// // import BookListPage from "./pages/BookList/BookListPage";
// // import Cart from "./components/Cart";

// export default function App() {
//   return (
//     <main className='main'>
//         {/* <SigninPage /> */}
//       <Routes>
//         <Route path="/" element={SigninPage} />
//         {/* <Route exact path="/specific-book" component={SpecificBookPage} /> */}
//         {/* <Route exact path="/book-list" component={BookListPage} /> */}
//         {/* <Route exact path="/cart" component={Cart} /> */}
//       </Routes>
//     </main>
//   );
// }

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/global.scss'
import SigninPage from "../pages/Signin/SigninPage";
import Book from "../pages/Book/SpecificBookPage";
import BookList from "../pages/BookList/BookListPage";
import Cart from "../pages/Cart/Cart";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import NotFoundPage from '../routes/not-found-page';


import './App.scss';

export function App() {
    return (
        <BrowserRouter>
            <Header title='JS Band Store' authorName='Mieshkov Andrii'/>
            <main className="main">
                <Routes>
                    <Route path="/" element={<SigninPage/>}/>
                    <Route path="/book" element={<Book/>}/>
                    <Route path="/books" element={<BookList/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}









// import * as React from 'react';

// import './styles/global.css'
// import AppRouter from "./AppRouter.jsx";
// import Header from "./layouts/Header/Header";
// import BooksProvider from "./features/providers/BooksProvider";
// import UserProvider from "./features/providers/UserProvider";
// import SpecificBookProvider from "./features/providers/SpecificBookProvider";
// import CartProvider from "./features/providers/CartProvider";
// import Footer from "./layouts/Footer/Footer";


// const App = () => {

//         return (
//             <>
//                 {/* <BooksProvider>
//                     <UserProvider>
//                         <CartProvider>
//                             <Header title='JS Band Store' authorName='Anton Khavaldzhi'/>
//                             <SpecificBookProvider> */}
//                                 <main className='main'>
//                                     <AppRouter/>
//                                 </main>
//                             {/* </SpecificBookProvider>
//                             <Footer/>
//                         </CartProvider>
//                     </UserProvider>
//                 </BooksProvider> */}
//             </>
//         );
// }

// export default App;
