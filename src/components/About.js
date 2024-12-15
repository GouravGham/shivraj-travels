import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-section" id='about-us'>
      <h1>ABOUT SHIVRAJ CAR RENTALS</h1>
      <h2>-:-</h2>
      <p className="about-paragraph">
        Shivraj tours & travels Solapur are a team of professionals having experience in tours & travels Services in Solapur City, provides Best Travel Agency & Trip Planner. Book tour packages like domestic/international, Religious, Cultural, eco tourism,cab services,taxi services, Luxary Car,Airport/Railway Station Pick & drop service,gives comfort to our valued customers. Our dedicated team ensures that you receive the highest quality service.We value our customer’s satisfaction therefore you are guaranteed quality and reliability. All our chauffeurs are experienced and trained. Our chauffeurs are smartly attired in uniform and carry mobile phones for easy accessibility.
      </p>
      {showMore && (
        <p className="about-paragraph">
         We offer the car rent solapur,Car hire Solapur,car hire solapur solapur Maharashtra, Best cab service in Solapur,cab service, tempo traveller on rent in solapur location, cab service in solapur ,Car Hire Service in Solapur.<br/>
We offer Cars & Coaches for airport transfers, full day local usage and outstation trips.The Car rental chart provides information about our rental charges on each vehicle depending upon the kind of package you would like to have. Options are available on the basis of km or on the basis of full day and half day packages. The total travel fare includes rental charges plus driver’s allowance. If your trip exceeds the limits of the package, be it full day or half day, then, you will have to pay extra charges. The Car rental/Hire charges vary depending upon the type of vehicle (economy and budget, premium or luxury) you choose.
We are providing 4 Dham package(Akkalkot,Tuljapur,Gangapur,Pandharpur), Business tour packages, customize Family tour packages, Local sight seeing from solapur location. Car Hire Service in Solapur, cab service in solapur<br/>

Why Shivraj Tours and Travels ?<br/>
1.Instant Booking Confirmation.<br/>
2.Experienced and Reliable Driver.<br/>
3.Transparent Billing Option.<br/>
4.New Neat and Clean AC Cabs.<br/>
5.Call Support During Trip.<br/>
6.Flexible Tariff Plan.<br/>
7.Door Step Service.<br/>
8.Customer Friendly Cancellation Policy.<br/>
9.No hidden charges/taxes availed !<br/>
10.Firmly grounded in ethics and values.<br/>
Cab services in solapur , Solapur Cab service , Cab service,cabs solapur,Cab service in solapur,Cab services in solapur,Solapur cab , Solapur car rental,Solapur car hire,Solapur car booking online,Ertiga on rent in Solapur,Tours and Travels,Solapur Tours & Travels, taxi service in solapur , taxi in solapur,solapur taxi service, solapur to pune cab, solapur to akkalkot cab , solapur to tuljapur cab, solapur to pandharpur cab , solapur to latur cab, solapur to vijapur cab, solapur to mumbai cab, Best cab service in Solapur ,solapur to hydrabad cab, solapur to benglore cab, online cab booking solapur, solapur,cab for one day on rent in solapur, local cab service solapur, tour package solapur, solapur cab, car rental solapur, car rent in solapur, car hire solapur, hire cab in solapur, solapur car rental, car services in solapur,Akkalkot, Tuljapur, Pandharpur, Gangapur tour package, car rental, car hire, taxi service, Ertiga on rent in solapur, Innova on rent in solapur, Tempo traveller on rent in solapur,swift , swift Dezire,tavera,cruizer,Cab in solapur
        </p>
      )}
      <button className="toggle-button" onClick={handleToggle}>
        {showMore ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default About;
