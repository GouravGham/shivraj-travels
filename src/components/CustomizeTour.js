import React, { useState } from 'react';
import './CustomizeTour.css'; 
import ModalForm from './ModalForm';

const CustomizeTour = () => { 
  const [showModal, setShowModal] = useState(false); 
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
      <div className='customize'>
         <p>
         WE ARE HAPPY TO DELIVER YOUR CUSTOM QUOTE!
         </p>
         <button className='customize-button' onClick={openModal}>Start Customization Now</button>
         {showModal && <ModalForm openModal={openModal} closeModal={closeModal}/>}
      </div>
  );
};

export default CustomizeTour;
