import React, { useContext } from 'react';
import { deleteCart } from '../../components/LocalStorage/LocalStorage';
import './styles.scss';
import { CartContext } from '../../context/CartContext/CartContext';

const Cart = () => {
  const { cartItems, getTotalPrice, cleanCart } = useContext(CartContext);
  const cartItemMap = new Map();
  
  cartItems.forEach((cartItem) => {
    const key = cartItem.book.id;
    const count = cartItem.count;
    if (cartItemMap.has(key)) {
      const existingCartItem = cartItemMap.get(key);
      cartItemMap.set(key, { book: cartItem.book, count: existingCartItem.count + count });
    } else {
      cartItemMap.set(key, cartItem);
    }
  });
  
  const cartItemsArray = Array.from(cartItemMap.values());

  return (
    <div className='cart'>
      <div className='cart_header'>
        <button className='my-button auth_button' disabled={cartItemsArray.length === 0} onClick={() => {
          cleanCart();
          deleteCart();
        }}>Purchase</button>
      </div>
      {cartItemsArray.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div className='cart_wrapper'>
          <div className='cart_content'>
            {cartItemsArray.map((cartItem) => {
              const { book, count } = cartItem;
              const pricePerUnit = book.price / count;

              return (
                <div className='book' key={book.id}>
                  <span className='book__name'>{book.title}</span>
                  <span className='book_count'>
                    {count === 1 ? count + ' pc.' : count + ' pcs.'}
                  </span>
                  <span className='book_price'>{pricePerUnit.toFixed(2)}$</span>
                  <span className='book_total-price'>{(pricePerUnit * count).toFixed(2)}$</span>
                </div>
              );
            })}
          </div>
          <div className='cart_footer'>
            <p className='cart_total-price'>
              <span className='title'>Total price:</span>
              <span>{getTotalPrice()}$</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
