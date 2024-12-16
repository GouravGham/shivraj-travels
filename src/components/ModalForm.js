import React from 'react';
import './ModalForm.css';

const ModalForm = ({ closeModal, passImage, passPara, passTitle}) => {

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={closeModal}>
          &times;
        </button>
        <img src={passImage} alt="Travel 1" className="modal-image" />
        <p className="modal-passage">
           <h3>{passTitle}</h3>
           {passPara}
        </p>
      </div>
    </div>
  );
};

export default ModalForm;
