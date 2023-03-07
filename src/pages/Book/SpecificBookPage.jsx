import * as React from 'react';
import "./styles.scss";
import Book from "./Book"
import books from '../../data/books.json';

const SpecificBookPage = () =>(
  <Book books={books}>
    
  </Book>
);

export default SpecificBookPage;
