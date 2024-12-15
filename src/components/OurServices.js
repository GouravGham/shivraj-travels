import React, { useState } from "react";
import "./OurServices.css";
import ModalForm from "./ModalForm";

const OurServices = () => {
  const [showModal, setShowModal] = useState(false); 
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="our-services" id="services">
      <h1 className="section-title">OUR SERVICES</h1>
      <h2>-:-</h2>
      <p className="services-intro">
        Shivraj tours & travels Solapur are a team of professionals having
        experience in tours and travels services in Solapur City. We provide
        the best travel agency and trip planning services. Book tour packages
        like domestic, religious, cultural, eco-tourism, local tour packages,
        corporate/business tour packages, car rental services, cab services,
        taxi services, luxury cars, and airport/railway station pick and drop
        services to give comfort to our valued customers. Our dedicated team
        ensures that you receive the highest quality service. We value our
        customer’s satisfaction; therefore, you are guaranteed quality and
        reliability.
      </p>

      <div className="service-categories">
        <div className="category">
          <h3>TOURIST DESTINATIONS IN MAHARASHTRA</h3>
          <h4>-:-</h4>
          <ul>
        <li onClick={openModal}>Solapur to Lonavala Car Rent/Car Hire</li>
        <li onClick={openModal}>Solapur to Khandala Car Rent/Car Hire</li>
        <li onClick={openModal}>Solapur to Matheran Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Mahalej Ghat Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Saputara Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Ellora Caves Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Amboli Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Varandha Ghat Car Rent/Car Hire</li>
        <li onClick={openModal}>Solapur to Kaspathar-Thoseghar Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Bemnoli Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Tamhini Ghat Car Rental/Car Hire</li>
          </ul>
        </div>

        <div className="category">
          <h3>PILGRIMAGE DESTINATIONS IN MAHARASHTRA</h3>
          <h4>-:-</h4>
          <ul>
          <li onClick={openModal}>Solapur to Pandharpur Tuljapur Akkalkot Gangapur</li>
    <li onClick={openModal}>Solapur to Bhimashankar Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Shirdi Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Nashik Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Kolhapur Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Ghruneshwar Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Aurangabad Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Akkalkot Car Rent/Car Hire</li>
    <li onClick={openModal}>Solapur to Tuljapur Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Gangapur Car Rent/Car Hire</li>
    <li onClick={openModal}>Solapur to Pandharpur Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Jejuri Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Ashtavinayak Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Tuljapur Taxi</li>
    <li onClick={openModal}>Solapur to Parali Vaijanath Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Narsobawadi Car Rental/Car Hire</li>
    <li onClick={openModal}>Solapur to Sajjangad Cab Service</li>
          </ul>
        </div>

        <div className="category">
          <h3>FAMOUS CITIES IN MAHARASHTRA</h3>
          <h4>-:-</h4>
          <ul>
          <li onClick={openModal}>Solapur to Pune Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Mumbai Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Satara Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Sangali Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Nagpur Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Kolhapur Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Latur Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Vijapur Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Bagalkot Car Rent/Car Hire</li>
        <li onClick={openModal}>Solapur to Malvan Caves Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Pachgani Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Jalgoan Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Akkalkot Cab</li>
        <li onClick={openModal}>Solapur to Ahmadnagar Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Kudki Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur Taxi Service</li>
        <li onClick={openModal}>Solapur to Jalna Car Rental/Car Hire</li>
          </ul>
        </div>

        <div className="category">
          <h3>BEACH DESTINATIONS IN MAHARASHTRA</h3>
          <h4>-:-</h4>
          <ul>
          <li onClick={openModal}>Solapur to Ganpatipule Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Goa Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Shriwardhan Harihareshwar Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Tarkarali Beach Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Diveagar Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Dapoli Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Alibag Caves Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Kasid Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Murud-Janjira Car Rent/Car Hire</li>
        <li onClick={openModal}>Solapur to Hamai Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Nagaon Car Rental/Car Hire</li>
        <li onClick={openModal}>Solapur to Ratnagiri Car Rental/Car Hire</li>
          </ul>
        </div>
      </div>
      {showModal && <ModalForm openModal={openModal} closeModal={closeModal}/>}
    </div>
  );
};

export default OurServices;
