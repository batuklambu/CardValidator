// import React, { useEffect, useState } from 'react';

// function CreditCard() {
//   const [cardNumber, setCardNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (evt) => {
//     evt.preventDefault();
//     setCardNumber(evt.target.value);
//     console.log(evt.target.value);
//     evt.preventDefault();
//   };

//   const validCard = () => {
//     let arr = (cardNumber + '')
//       .split('')
//       .reverse()
//       .map((x) => parseInt(x));
//     let lastDigit = arr.splice(0, 1)[0];
//     let sum = arr.reduce(
//       (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
//       0
//     );
//     sum += lastDigit;
//     return sum % 10 === 0;
//   };

//   useEffect(() => {
//     console.log('Call useEffect');
//     const validateCreditCard = (value) => {
//       if (validCard.isCreditCard(value) === true) {
//         setErrorMessage('Valid CreditCard Number');
//       } else {
//         setErrorMessage('Enter valid CreditCard Number!');
//       }
//     };
//     return () => {
//       console.log('cleanup');
//       setErrorMessage('');
//     };
//   }, [cardNumber]);
//   console.log('render');

//   return (
//     <>
//       <form className="formDiv">
//         <input className="input" type="text" onChange={handleChange} />
//       </form>
//       <span className="span">{errorMessage}</span>
//     </>
//   );
// }

// export default CreditCard;
import React, { useState, useEffect } from "react";

// function Validate() {
//   const [num, setNum] = useState("");

//   //making sure console.log only runs on certain renders
//   useEffect(() => {
//     validCard();
//   }, [num]);

//   const inputHandler = (e) => {
//     setNum(e.target.value);
//   };

//   // Function to add one to the state
//   const validCard = () => {
//     if (num == "") {
//       console.log("enter value");
//     } else {
//       let arr = (num + "")
//         .split("")
//         .reverse()
//         .map((x) => parseInt(x));
//       let lastDigit = arr.splice(0, 1)[0];
//       let sum = arr.reduce(
//         (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
//         0
//       );
//       sum += lastDigit;
//       if (sum % 10 === 0) {
//         console.log("valid");
//         // setMessage("This is a Valid Number");
//       } else {
//         console.log("Invalid");
//         // setMessage("This is not a Valid Number");
//       }
//     }
//   };

  return (
    <div className="main">
      <h1>Welcome to Credit Card Validator!</h1>
      <p>Enter Card Number: </p>
      <p>
        <input type="text" onChange={inputHandler} value={num} />
      </p>
      {/* <button onClick={validCard}>check</button> */}
      {/* <p>{message}</p> */}
    </div>
  );
}

export default Validate;