import React, { useEffect, useState } from 'react';

function CreditCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (evt) => {
    evt.preventDefault();
    setCardNumber(evt.target.value);
    console.log('evt.target.value');
  };

  const validCard = () => {
    if (cardNumber === '') {
      console.log('enter value');
    } else {
      let arr = (cardNumber + '')
        .split('')
        .reverse()
        .map((x) => parseInt(x));
      let lastDigit = arr.splice(0, 1)[0];
      let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
        0
      );
      sum += lastDigit;
      if (sum % 10 === 0) {
        console.log('valid');
        setMessage('Valid CreditCard Number');
      } else {
        console.log('Invalid');
        setMessage('Enter valid CreditCard Number!');
      }
    }
  };

  useEffect(() => {
    console.log('Call useEffect');
    validCard();

    console.log('cleanup');
  }, [cardNumber]);

  console.log('render');

  return (
    <>
      <form className="formDiv">
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={cardNumber}
        />
        <h4 className="exp">Valid Through 12/25</h4>
        <h5 className="name">Leena Mehta</h5>
      </form>
      <div className="msg">{message}</div>
    </>
  );
}

export default CreditCard;
