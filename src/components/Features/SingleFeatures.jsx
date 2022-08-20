import React, {useState} from 'react';
import {BsPlusLg} from "react-icons/bs";
import "./Features.css";

const gradient = "url(#blue-gradient)";

const SingleFeatures = (feature) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className='item' key = {feature.id}>
      <div className={`item-head flex flex-between bg-dark ${isActive ? 'item-head-border' : null}`} onClick = {() => setIsActive(!isActive)}>
        <h6 className='fs-20 fw-4 text-grey'>{feature.title}</h6>
        <button type = "button" className={`item-icon ${isActive ? 'item-icon-rotate' : ""}`}>
            <BsPlusLg style = {{fill: gradient}} size = {22} />
        </button>
      </div>

      <div className={`item-body ${isActive ? 'item-body-show' : ""}`}>
        <p className='text'>{feature.text}</p>
      </div>
    </div>
  )
}

export default SingleFeatures
