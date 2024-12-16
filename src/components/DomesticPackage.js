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
  const [selectedPackage, setSelectedPackage] = useState(null);
  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


  const packages = [
    {
      id: 1,
      image: Konkan,
      title: 'Solapur to Konkan',
      description: 'Embark on a scenic journey from Solapur to the beautiful coastal region of Konkan, known for its pristine beaches, lush greenery, and vibrant cultural heritage. Explore the tranquil backwaters, enjoy local delicacies, and experience the warm hospitality of this enchanting region.'
    },
    {
      id: 2,
      image: Mahabaleshwar,
      title: 'Solapur to Mahabaleshwar',
      description: 'Visit the serene hill station of Mahabaleshwar, nestled in the Western Ghats. Known for its strawberry farms, picturesque valleys, and breathtaking viewpoints, this destination offers a perfect getaway from the hustle and bustle of city life.'
    },
    {
      id: 3,
      image: Matheran,
      title: 'Solapur to Matheran',
      description: 'Experience the charm of Matheran, a quaint hill station famous for its colonial architecture and eco-friendly environment. Enjoy leisurely walks along scenic trails, horse rides, and stunning views of the surrounding valleys.'
    },
    {
      id: 4,
      image: Lonavala,
      title: 'Solapur to Lonavala',
      description: 'Explore the lush green landscapes of Lonavala, a popular hill station known for its waterfalls, caves, and the iconic Chikki. Perfect for nature lovers and adventure seekers, this destination offers an unforgettable experience.'
    },
    {
      id: 5,
      image: Ganpatipule,
      title: 'Solapur to Ganapati Pule',
      description: 'Discover the serene beaches of Ganapati Pule, home to the famous Swayambhu Ganapati Temple. Enjoy the peaceful ambiance, pristine waters, and a mix of spirituality and relaxation at this coastal paradise.'
    },
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
          <div className="domestic-card" key={pkg.id} onClick={()=>{openModal(pkg)}}>
            <img
              src={pkg.image}
              alt={pkg.title}
              className="domestic-image"
            />
            <p className="domestic-title">{pkg.title}</p>
          </div>
        ))}
      </div>
      {showModal && <ModalForm closeModal={closeModal} passImage={selectedPackage.image} passPara={selectedPackage.description} passTitle={selectedPackage.title}/>}
    </div>
  );
};

export default DomesticPackage;
