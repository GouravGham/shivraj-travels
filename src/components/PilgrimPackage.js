import React, { useState, useRef } from 'react';
import LordDattGangapur from "../images/lord-dattatreya-gangapur.jpg";
import SwamiSamarthAkkalkot from "../images/swami-samarth-akkalkot.jpg";
import TuljaBHavaniTuljapur from "../images/tulja-bhavani-tuljapur.jpg";
import VithalRukhminiPandharpur from "../images/vitthal-rukhmini-pandharpur.jpg";
import Ashtvinayak from "../images/ashtvinayak.jpeg";
import SaibabaShirdi from "../images/saibaba-shirdi.jpg";
import KhandobaJejuri from "../images/khandoba-jejuri.jpg"
import './PilgrimPackage.css';
import ModalForm from './ModalForm';

const PilgrimPackage = () => {
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
    { id: 1, image: LordDattGangapur, title: 'Lord Dattatreya, Gangapur' },
    { id: 2, image: SwamiSamarthAkkalkot, title: 'Swami Samarth, Akkalkot' },
    { id: 3, image: TuljaBHavaniTuljapur, title: 'Tulja Bhavani, Tuljapur' },
    { id: 4, image: VithalRukhminiPandharpur, title: 'Vithal Rukmini, Pandharpur' },
    { id: 5, image: Ashtvinayak, title: 'Ashtavinayak Darshan' },
    { id: 6, image: SaibabaShirdi, title: 'Sai Baba, Shirdi' },
    { id: 7, image: KhandobaJejuri, title: 'Khandoba, Jejuri' },
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
    <div className="pilgrim-section" id='pilgrim'>
      <h1>PILGRIM PACKAGE</h1>
      <h2>-:-</h2>
      <div className="scroll-container" ref={scrollContainerRef}>
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id} onClick={openModal}>
            <img
              src={pkg.image}
              alt={pkg.title}
              className="package-image"
            />
            <p className="package-title">{pkg.title}</p>
          </div>
        ))}
      </div>
      <div className="scroll-buttons">
        <button
          className={`scroll-btn ${!canScrollLeft ? 'disabled' : ''}`}
          onClick={() => scrollHandler('left')}
          disabled={!canScrollLeft}
        >
          ◀
        </button>
        <button
          className={`scroll-btn ${!canScrollRight ? 'disabled' : ''}`}
          onClick={() => scrollHandler('right')}
          disabled={!canScrollRight}
        >
          ▶
        </button>
      </div>
      {showModal && <ModalForm openModal={openModal} closeModal={closeModal}/>}
    </div>
  );
};

export default PilgrimPackage;
