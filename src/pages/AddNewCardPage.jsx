import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "react-credit-cards";
import { getCards } from "../redux/CardSlice";
import '../assets/createCardPage.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {AiFillCheckCircle} from 'react-icons/ai';


import { Link } from "react-router-dom";
const AddNewCardPage = () => {
  const dispatch = useDispatch();
  const { state, status } = useSelector((state) => state.cards);
  console.log(state);
  

  // initially define states that will be used in the Cards component
  //TODO: this will be modified and put into redux later on!
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focused, setFocused] = useState("");

  return (
    
    <div>
        <Link to={{pathname:"/myCards"}}><BsFillArrowLeftCircleFill className="arrow-icon"/></Link>
      <h1 className="centerElement mainText">Add new Card</h1>
      <button
        className="btn"
        onClick={() => {
          dispatch(getCards());
        }}
      >
        Get Card Details
      </button>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
      />
    
      <form className="flexBox">
        <input
          type="number"
          name="number"
          id="cardNumber"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
          placeholder="Card number"
          required
          className = "marginTop flexBasis formBackground"
        
         
        />
        <input
          type="text"
          id="cardholder"
          name="name"
          placeholder="Cardholder's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
          required
          className = "marginTop formBackground"
        />
        <input
          type="number"
          name="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
          id="expirationDate"
          placeholder="MM/YY"
          required
          className = "marginTop flexBasis formBackground"
        />
        <input
          type="number"
          name="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
          id="cvc"
          placeholder="CVC"
          className = "marginTop formBackground"
          
        />
        <select defaultValue="" name="cardOptions" id="cardOptions" required className = "marginTop flexBasis formBackground">
          <option value="" disabled>
            Choose card manufacturer
          </option>
          <option value="visa">VISA</option>
          <option value="mastercard">MasterCard</option>
        </select>
      </form>
      <div className="centerElement marginTop">
        <Link to={{pathname:"/myCards"}}>
        <i><AiFillCheckCircle className="done-icon"/> </i>
        </Link>
      </div>
    </div>
  );
};

export default AddNewCardPage;
