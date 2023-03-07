import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/global.scss'
import SigninPage from "../pages/Signin/SigninPage";
import SpecificBookPage from "../pages/Book/SpecificBookPage";
import BookList from "../pages/BookList/BookListPage";
import Cart from "../pages/Cart/Cart";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import NotFoundPage from '../pages/not-found-page';
import Authorization from '../components/providers/Authorization'

import './App.scss';
export function App() {
    return (
        <BrowserRouter>
            <Header title='JS Band Store' authorName='Mieshkov Andrii'/>
            <main className="main">
                <Routes>
                    <Route path="/signin" element={<SigninPage/>}/>
                    <Route path="/book/:id" element={<Authorization><SpecificBookPage/></Authorization>}/>,
                    <Route path="/books" element={<Authorization><BookList/></Authorization>}/>,
                    <Route path="/cart" element={<Authorization><Cart/></Authorization>}/>
                    <Route path="*" element={<Authorization><NotFoundPage/></Authorization>} />
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}
