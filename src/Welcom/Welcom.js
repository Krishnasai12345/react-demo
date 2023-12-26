import React from 'react';
import './Welcom.css';
import Deposit from '../Deposit';

const Welcom = () => {
  const DepositFunction=()=>{
    console.log('deposit clicked');
    <Deposit/>
  }
 
  return (
    <div>
      <marquee scrollamount ="10">Welcome to App</marquee>
      <div className='grid-container'>
        <div>Balance Enquire</div>
        <div>Pin Generation</div>
        <div>Pin Change</div>
        <div onClick={DepositFunction}>Deposit</div>
      </div>
    </div>
  );
}

export default Welcom;
