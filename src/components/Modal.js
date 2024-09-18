import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <form className="modal-form">
          <label>
            Name:
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Your Email" required />
          </label>
          <label>
            Phone:
            <input type="tel" placeholder="Your Phone Number" required />
          </label>
          <label>
            Message:
            <textarea placeholder="Your Message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;