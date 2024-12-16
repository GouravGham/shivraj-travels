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
      image: LordDattGangapur,
      title: 'Lord Dattatreya, Gangapur',
      description: 'Experience the divine presence of Lord Dattatreya at Gangapur, a serene pilgrimage site known for its spiritual significance and beautiful surroundings. Located on the banks of the Bhima River, Gangapur is a place where devotees come to seek peace and blessings. The sacred temple, surrounded by lush greenery, provides an atmosphere of tranquility and devotion.'
    },
    {
      id: 2,
      image: SwamiSamarthAkkalkot,
      title: 'Swami Samarth, Akkalkot',
      description: 'Visit Akkalkot, the holy abode of Swami Samarth, where countless devotees find peace and blessings in the divine atmosphere. The Akkalkot Swami Samarth Maharaj temple is a center of faith and devotion. Immerse yourself in the serene chants and explore the ashram where Swami Samarth spread his teachings of love and compassion.'
    },
    {
      id: 3,
      image: TuljaBHavaniTuljapur,
      title: 'Tulja Bhavani, Tuljapur',
      description: 'Seek the blessings of Goddess Tulja Bhavani, revered as a powerful deity, at the renowned temple in Tuljapur. This temple is one of the Shakti Peethas and holds immense importance for devotees. Known for its intricate architecture and spiritual aura, the temple is a place where faith and tradition come alive.'
    },
    {
      id: 4,
      image: VithalRukhminiPandharpur,
      title: 'Vithal Rukmini, Pandharpur',
      description: 'Embark on a spiritual journey to Pandharpur, the sacred place of Lord Vithal and Rukmini, cherished by devotees for centuries. Known as the “Kashi of South India,” Pandharpur welcomes pilgrims with open arms and a rich history of devotion and bhakti. The town comes alive during the annual Wari Yatra, celebrated with great fervor.'
    },
    {
      id: 5,
      image: Ashtvinayak,
      title: 'Ashtavinayak Darshan',
      description: 'Complete the Ashtavinayak Yatra, visiting the eight iconic Ganesh temples, each with unique legends and significance. These sacred temples, spread across Maharashtra, are nestled amidst scenic landscapes and rich cultural heritage. The journey is not just a pilgrimage but also an opportunity to connect with the stories of Lord Ganesha.'
    },
    {
      id: 6,
      image: SaibabaShirdi,
      title: 'Sai Baba, Shirdi',
      description: 'Discover the divine presence of Sai Baba at Shirdi, a haven for those seeking spiritual solace and guidance. Shirdi is not just a place of worship but a vibrant community of faith and devotion. The Sai Baba Samadhi Mandir is a hub for spiritual seekers, offering a unique blend of serenity and energy.'
    },
    {
      id: 7,
      image: KhandobaJejuri,
      title: 'Khandoba, Jejuri',
      description: 'Explore Jejuri, the sacred place of Lord Khandoba, where spirituality meets cultural heritage in a captivating setting. Known as the “Golden Temple of Maharashtra,” the temple of Khandoba is famous for its ritualistic turmeric offerings. Witness the vibrant festivities and enjoy panoramic views from the temple atop the hill.'
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
    <div className="pilgrim-section" id='pilgrim'>
      <h1>PILGRIM PACKAGE</h1>
      <h2>-:-</h2>
      <div className="scroll-container" ref={scrollContainerRef}>
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id} onClick={()=>{openModal(pkg)}}>
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
      
      {showModal && <ModalForm closeModal={closeModal} passImage={selectedPackage.image} passPara={selectedPackage.description} passTitle={selectedPackage.title}/>}
    </div>
  );
};

export default PilgrimPackage;
