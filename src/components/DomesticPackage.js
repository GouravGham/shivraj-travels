import React, { useState, useRef } from 'react';
import Konkan from "../images/kokan.jpg";
import Mahabaleshwar from "../images/mahabaleshwar.jpg";
import Matheran from "../images/matheran.jpg";
import Lonavala from "../images/lonavala.avif";
import Ganpatipule from "../images/ganapatipule.jpg";
import './DomesticPackage.css';
import ModalForm from './ModalForm';

const DomesticPackage = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showModal, setShowModal] = useState(false); 
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


  const packages = [
    { id: 1, image: Konkan, title: 'Solapur to Kokan' },
    { id: 2, image: Mahabaleshwar, title: 'Solapur to Mahabaleshwar' },
    { id: 3, image: Matheran, title: 'Solapur to Matheran' },
    { id: 4, image: Lonavala, title: 'Solapur to Lonavala' },
    { id: 5, image: Ganpatipule, title: 'Solapur to Ganapati Pule' },
  ];
  

  const scrollHandler = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 350;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    setTimeout(() => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.offsetWidth < container.scrollWidth
      );
    }, 300);
  };

  return (
    <div className="domestic-section" id='domestic'>
      <div className='domestic-head'>
        <h1>DOMESTIC PACKAGE</h1>
        <div className="domestic-buttons">
        <button
          className={`domestic-btn ${!canScrollLeft ? 'disabled' : ''}`}
          onClick={() => scrollHandler('left')}
          disabled={!canScrollLeft}
        >
          ◀
        </button>
        <button
          className={`domestic-btn ${!canScrollRight ? 'disabled' : ''}`}
          onClick={() => scrollHandler('right')}
          disabled={!canScrollRight}
        >
          ▶
        </button>
      </div>
      </div>
      <div className="domestic-container" ref={scrollContainerRef}>
        {packages.map((pkg) => (
          <div className="domestic-card" key={pkg.id} onClick={openModal}>
            <img
              src={pkg.image}
              alt={pkg.title}
              className="domestic-image"
            />
            <p className="domestic-title">{pkg.title}</p>
          </div>
        ))}
      </div>
      {showModal && <ModalForm openModal={openModal} closeModal={closeModal}/>}
    </div>
  );
};

export default DomesticPackage;
