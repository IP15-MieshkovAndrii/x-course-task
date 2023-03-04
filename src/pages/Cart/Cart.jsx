import React from 'react';
import ReactDOM from "react-dom";
import './styles.scss';
import {ThreeDots} from "react-loader-spinner";
import img from '../../images/avatar2.png'

const books = [1, 2, 2]

const Cart = () => {
    return (
        books ?
            <div className='cart'>
                <div className="cart_header">
                {/* <MyButton
                    disabled={books.length === 0}
                    onClick={(e) => purchaseHandler(e)}
                >
                    Purchase
                </MyButton> */}
                    <button className="my-button auth_button">Purchase</button>
                </div>
                {books.length === 0 ?
                    <div>
                        Cart is empty
                    </div>
                    :
                    <div className='cart_wrapper'>
                        <div className="cart_content">
                            {
                                books.map(book => {
                                    return (
                                        <div className="book" key={book.id}>
                                            {/* <Link className="book__name" to={`/book/${book.id}`}>
                                                {book.title}
                                            </Link> */}

                                            <span className="book_count">{book.amount === 1 ? book.amount + 'pc.': book.amount + 'pcs.'}</span>
                                            <span className="book_total-price">{book.price * book.amount}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="cart_footer">
                            <p className="cart_total-price">
                                <span className='title'>Total price:</span>
                                {/* <span>{totalPrice}</span> */}
                                totalPrice
                            </p>
                        </div>
                    </div>
                }
            </div>
        :
            <div className="loader">
                <ThreeDots
                    height="120px"
                    width="120px"
                    radius="10"
                    color="rgba(0, 0, 0, 1)"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    className="loader"
                />
            </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Cart />, rootElement);


export default Cart;