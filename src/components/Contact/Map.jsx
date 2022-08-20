import React from 'react';
import "./Contact.css";

const Map = () => {
  return (
    <div className='map-content'>
        {/* eslint-disable-next-line */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.067702021103!2d-1.899753284141808!3d52.47790987980627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc896c750ee5%3A0x9da3f5ae36c39f33!2sNew%20Street%20Station%2C%20East%20Mews%2C%20Birmingham%20B2%204QA%2C%20UK!5e0!3m2!1sen!2snp!4v1660992980861!5m2!1sen!2snp" width="100%" height="450" style={{border:0}}></iframe>
    </div>
  )
}

export default Map
