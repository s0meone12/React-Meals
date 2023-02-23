import React, { useRef, useState } from 'react';

import classes from './Checkout.module.css'

const isEmpty = value=> value.trim() === '';
const isFiveChar = value => value.trim().length === 5;

const Checkout = (props)=> {
    const [formInputValidity, setFormInputValidity] = useState({
        name:true,
        street: true,
        postalCode: true,
        city: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();


    const confirmHandler = (event)=> {
         event.preventDefault();

         const enteredName = nameInputRef.current.value;
         const enteredStreet= streetInputRef.current.value;
         const enteredPostalCode = postalCodeInputRef.current.value;
         const enteredCity = cityInputRef.current.value;

         const enteredNameIsValid = !isEmpty(enteredName);
         const enteredStreetIsValid = !isEmpty(enteredStreet);
         const enteredCityIsValid = !isEmpty(enteredCity);
         const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);

         setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
            
         })

         const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

         if(!formIsValid){
            return;
         }

         props.onConfirm({
            name:enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
         });

    };


    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`;
   

    return(
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.scroll}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}></input>
                {!formInputValidity.name && <p>please enter the valid name!</p>}
            </div>

            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef}></input>
                {!formInputValidity.street && <p>please enter the valid city!</p>}
            </div>

            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal" ref={postalCodeInputRef}></input>
                {!formInputValidity.postalCode && <p>please enter the valid postal code (upto 5 characters)!</p>}
            </div>

            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef}></input>
                {!formInputValidity.city && <p>please enter the valid city!</p>}
            </div>
            <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
            </div>
            </div>
        </form>
    )
}

export default Checkout;