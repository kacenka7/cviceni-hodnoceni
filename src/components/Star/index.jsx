import { useState } from 'react';
import './style.css';



export const Star = ({value, onSelect, glowing}) => {

  const handleOnClick = ()=>{
    onSelect(value)

  }
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div onClick={handleOnClick} className={starClass}></div>
  );
};
