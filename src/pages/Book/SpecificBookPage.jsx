import * as React from 'react';
import ReactDOM from "react-dom";
import "./styles.scss";

import img from '../../images/imageNotFound.png'

import 


const SpecificBookPage = () => {
   

  return (
   
      <div className="single-book">
        <div className="single-book_wrapper">
          <div className="single-book_img">
            <img src={book.image || img} alt="Book image" />
          </div>
          <div className="single-book_container">
            <div className="single-book_content">
              <h2 className="single-book_title">{book.title}</h2>
              <h3 className="single-book_author">{book.author}</h3>
              <h4 className="single-book_level">Book level</h4>
              <ul className="single-book_tags">
                <li className="single-book_tag">Book tags</li>
                <li className="single-book_tag">Book tags</li>
                <li className="single-book_tag">Book tags</li>
              </ul>
            </div>
            <form className="single-book_form">
              <div className="single-book_price">
                <span className="title">Price, $</span>
                <span className="value">{book.price}$</span>
              </div>
              <div className="single-book_count">
                <label className="count">Count</label>
                <div className="single-book_input">
                  {/* <input id="count-input" max="42" min="1" type="number" value="1" />
                  <button className="decrement" type="button">▼</button>
                  <button className="increment" type="button">▲</button> */}
                </div>
              </div>
              <div className="single-book_total">
                <span className="title">Total price</span>
                <span className="value">17</span>
              </div>

              {/* <button className="my-button undefined">Add to Cart</button> */}
            </form> 
          </div>
        </div>
        <p className="single-book_description">
          {book.description}
        </p>
      </div>
    
    // <div className="loader">
    //     <ThreeDots
    //         height="120px"
    //         width="120px"
    //         radius="10"
    //         color="rgba(0, 0, 0, 1)"
    //         ariaLabel="three-dots-loading"
    //         wrapperStyle={{}}
    //         wrapperClassName=""
    //         visible={true}
    //         className="loader"
    //     />
    // </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SpecificBookPage />, rootElement);

export default SpecificBookPage;
