import React from 'react';
import "./Contact.css";
import { BsArrowRightCircle } from 'react-icons/bs';
import sections from '../../constants/data';

const Info = () => {
  return (
    <div className='info bg-md-black section-p'>
      <div className='container'>
        <div className='info-content'>
            <div className='item-list grid text-center'>
                {
                    sections.contact.map(contact => {
                        return (
                            <div className='item bg-dark translate-effect' key = {contact.id}>
                                <span className='item-icon'>{contact.icon}</span>
                                <div className='item-info-text fw-5 text-white'>{contact.info}</div>
                                <p className='text'>{contact.text}</p>
                                <a href = "/" className='item-link text-grey'>
                                    <BsArrowRightCircle size = {30} />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info
