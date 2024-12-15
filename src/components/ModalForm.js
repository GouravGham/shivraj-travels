import React, { useState } from 'react';
import { send } from '@emailjs/browser';
import BanerImage from "../images/car-rental.jpg";
import './ModalForm.css';
import toast from 'react-hot-toast';

const ModalForm = ({ openModal, closeModal }) => {
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

    send(
      serviceID,
      templateID,
      formData,
      publicKey
    )
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
        closeModal();
      })
      .catch(() => {
        toast.error('An error occurred. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={closeModal}>
          &times;
        </button>
        <img src={BanerImage} alt="Travel 1" className="modal-image" />
        <form onSubmit={handleSubmit}>
          <h2>Your Preferences</h2>
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="preferredPlace">Your Preferred Place to Visit</label>
            <input
              type="text"
              id="preferredPlace"
              name="preferredPlace"
              value={formData.preferredPlace}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Journey Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="submit-enquire">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Enquire Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
