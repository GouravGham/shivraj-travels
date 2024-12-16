import React from 'react';
import ErtigaImage from "../images/Ertiga.webp";
import ChevroletTaveraImage from "../images/chevrolet-tavera.jpg";
import SwiftDezireImage from "../images/swift-dezire.webp";
import InnovaImage from "../images/toyota-innova.png";
import TempoTravellerImage from "../images/tempo-traveller.jpg";
import CruiserImage from "../images/cruiser.webp";
import MarutiSwiftImage from "../images/maruti-swift.webp";
import TataIndicaImage from "../images/tata-indica.avif";
import './AvailableCars.css';

const AvailableCars = () => {

  const packages = [
    { id: 1, image: ErtigaImage, title: 'Ertiga' },
    { id: 2, image: ChevroletTaveraImage, title: 'Chevrolet Tavera' },
    { id: 3, image: SwiftDezireImage, title: 'Swift Dezire' },
    { id: 4, image: InnovaImage, title: 'Toyota Innova' },
    { id: 5, image: TempoTravellerImage, title: 'Tempo Traveller' },
    { id: 6, image: CruiserImage, title: 'Cruiser' },
    { id: 7, image: MarutiSwiftImage, title: 'Maruti Swift' },
    { id: 8, image: TataIndicaImage, title: 'Tata Indica' },
  ];
  
  return (
    <div className="available-section" id='cars'>
      <div className='available-head'>
        <h1>AVAILABLE CARS</h1>
      </div>
      <div className="available-container" >
        {packages.map((pkg) => (
          <div className="available-card" key={pkg.id} onClick={() => window.open("https://wa.me/919011996996", "_blank", "noopener,noreferrer")}>
            <img
              src={pkg.image}
              alt={pkg.title}
              className="available-image"
            />
            <p className="available-title">{pkg.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
