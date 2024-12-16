import React from 'react';
import BanerImage from "../images/car-rental.jpg";
import Solapur from "../images/solapur.jpg";
import Outstation from "../images/outstation.jpg";
import RentalService from "../images/rental-service.webp"
import './BookTour.css'; 

const BookTour = () => {

    const bookings = [
        {
          id: 1,
          image: Solapur,
          heading: 'SOLAPUR TOURISM',
          paragraph: 'Solapur has some of the best attractions in terms of tourism namely the Siddeshwar Temple, Pandharpur Temple, naldurg fort, Akkalkot Temple, Bhuikot Fort,Sidheshwar Mandir Great Indian Bustard Sanctuary.We are provding the best local travel services.'
        },
        {
          id: 2,
          image: Outstation,
          heading: 'LOCAL / OUTSTATION CAR HIRE',
          paragraph: 'Shivraj car Rentals is an Local / Outstation car rental & cab service provider.We are providing 4 Dham package(Akkalkot,Tuljapur,Gangapur,Pandharpur) ,Business tour packages,customize Family tour packages, Local sight seeing from solapur location. cab service in solapur'
        },
        {
          id: 3,
          image: RentalService,
          heading: 'CORPORATE TOUR PACKAGE',
          paragraph: 'We offers special rates and services for corporate car rentals needs.We are providing cars on monthly, yearly rental basis with good deals.Complete route and roster planning.Best deals are provided to several company in car rent.'
        }
      ];
  return (
    <div>
      <div className="baner-container">
        <div className="baner-content">
          <h1>GRAB YOUR FAVOURITE TOUR PACKAGE</h1>
          <h2>-:-</h2>
          <p>Decide your tour destination, Plan your trip, Select the hotels that conforms you. We are here to provide with the best service to accomplish your tour package. We Are Not Only Committed To Providing You With An Unforgettable And Inspiring Trip, We’re Also Committed To Ensuring Your Happiness And Comfort Throughout. We Provide End-To-End Service In Car Rental Field; With Future Plans Of Diversifying Into A Largest Car Rental Service Provider. With A Mix Of Industry Experts And Team Of Talented Young And Dynamic Individuals, Our Team Bring Highest Value To Customers. Best cab service in Solapur</p>
        </div>
        <div className="baner-image">
          <img src={BanerImage} alt="Tour" />
        </div>
      </div>
      <div className="bookings" id='tour-package'>
      {bookings.map((booking) => (
        <div key={booking.id} className="booking">
          <img src={booking.image} alt={booking.heading} className="booking-image" />
          <h2 className="booking-heading">{booking.heading}</h2>
          <p className="booking-paragraph">{booking.paragraph}</p>
          <button className='booking-button' onClick={() => window.open("https://wa.me/919011996996", "_blank", "noopener,noreferrer")}>BOOK NOW</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BookTour;
