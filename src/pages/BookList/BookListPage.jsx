import React, { useState, useEffect } from 'react';
import './styles.scss';
import img from '../../images/search.png'
import booksData from '../../data/books.json';
import Book from './Book';

const BookListPage = () => {

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('');

    useEffect(() => {
        setBooks(booksData.books);
    }, []);

    const filteredBooks = books
        .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(book => {
            if (priceRange === '') return true;
            if (priceRange === 'low') return book.price < 15;
            if (priceRange === 'medium') return book.price >= 15 && book.price < 30;
            if (priceRange === 'high') return book.price >= 30;
        });

    const handlePriceFilter = (event) => {
        setPriceRange(event.target.value);
    }
    
    return (
        <div className="books">
            <div className="books_header">
                <div className="search_input">
                    <label htmlFor="search_input">
                            <img src={img} alt="Значок пошуку"/>
                        </label>
                        <input 
                            placeholder="Search by book name" 
                            className="input" 
                            type="text" 
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}/>
                    </div>
                    <div className="dropdown">
                        <label className="dropdown_label" htmlFor="dropdown_button">
                            <font>
                                <font>Price</font>
                            </font>
                        </label>
                        <select id="price_range" className="dropdown_button" value={priceRange} onChange={handlePriceFilter}>
                            <option value="">All</option>
                            <option value="low">0 &lt; Price &lt; 15</option>
                            <option value="medium">15 &lt; Price &lt; 30</option>
                            <option value="high">Price &gt;= 30</option>
                        </select>
                    </div>
                </div>
                <div className="books_content">
                {
                    filteredBooks.length === 0 ?
                    <p className='no_book'>
                        Not found
                    </p>
                    :
                filteredBooks.map(book => (
                    <Book key={book.id} book={book} />
                ))}
                </div>
            </div>
    );
}

export default BookListPage;