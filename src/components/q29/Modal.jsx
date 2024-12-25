import React, { useState } from "react";

const Modal = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{title}</h2>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
