import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import './checkout.styles.scss';


const Checkout = () => {
    
    const CartItems = useSelector(selectCartItems)
    const CartTotal = useSelector(selectCartTotal)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                   <div className='header-block'>
                   <span>Description</span>

                </div>
                <div className='header-block'>
                <span>Quantity</span>

                </div>
                <div className='header-block'>
                <span>Price</span>

                </div>
                <div className='header-block'>
                <span>Remove</span>
                </div>
            </div>           
                {
                CartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}  />
            ))}
    <span className='total'>Total: ${CartTotal} </span>
    <PaymentForm />
</div>
    );
};
export default Checkout