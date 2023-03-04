import React from 'react';
import ReactDOM from "react-dom";
import './styles.scss';

import img from '../../images/search.png'

const BookListPage = () => {
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
                            value=""/>
                    </div>
                    <div className="dropdown">
                        <label className="dropdown_label" htmlFor="dropdown_button">
                            <font>
                                <font>Price</font>
                            </font>
                        </label>
                        <button id="dropdown_button" className="dropdown_button">
                            <font>
                                <font>▾
                                </font>
                            </font>
                        </button>
                        <ul className="dropdown_list">
                            <li className="dropdown_item">
                                <font>
                                    <font>все</font>
                                </font>
                            </li>
                            <li className="dropdown_item">
                                <font>
                                    <font>0 &lt; Ціна &lt; 15</font>
                                </font>
                            </li>
                            <li className="dropdown_item">
                                <font>
                                    <font>15 &lt; Ціна &lt; 30</font>
                                </font>
                            </li>
                            <li className="dropdown_item">
                                <font>
                                    <font>Ціна &gt; 30</font>
                                </font>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="books_content"></div>
            </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BookListPage />, rootElement);


export default BookListPage;