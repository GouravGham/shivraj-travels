import React from 'react';
import './CustomizeTour.css'; 

const CustomizeTour = () => {

  return (
      <div className='customize'>
         <p>
         WE ARE HAPPY TO DELIVER YOUR CUSTOM QUOTE!
         </p>
         <button className='customize-button' onClick={() => window.open("https://wa.me/919011996996", "_blank", "noopener,noreferrer")}>Start Customization Now</button>
      </div>
  );
};

export default CustomizeTour;
