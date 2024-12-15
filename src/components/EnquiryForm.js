import React, { useState } from 'react';
import { send } from '@emailjs/browser';
import toast from 'react-hot-toast';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredPlace: '',
    startDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success('Your enquiry has been sent successfully!');
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredPlace: '',
          startDate: '',
        });
      })
      .catch(() => {
        toast.error('An error occurred. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <div className="scrolling-text">
        <span>
          For Booking please mail us on shivrajtravels6996@gmail.com or call us
          9856996996 / 9011996996 Cab service in Solapur / car rental service /
          Solapur cab / Akkalkot Tuljapur Pandharpur Gangapur Tour cab
        </span>
      </div>
      <div className="form-background" id="enquiry">
        <div className="form-container">
          <p className="form-title">Tour Enquiry</p>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Phone Number"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="preferredPlace"
              placeholder="Destination Places"
              className="form-input"
              value={formData.preferredPlace}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="startDate"
              placeholder="Journey Start Date"
              className="form-input"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
            <button
              className="enquire-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Enquire Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
