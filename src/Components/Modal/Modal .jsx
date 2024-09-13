import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed h-screen inset-0 bg-black bg-opacity-50 xlg:pt-32  z-[9999]">
      <div className=" rounded-lg shadow-lg p-4 m-4  flex justify-center w-full">
        <button
          onClick={onClose}
          className="transform translate-x-6 -p- text-gray-700 h-5 w-5 flex justify-center items-center bg-trnasparent border mt-1 mr-1 rounded-full hover:text-gray-900"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
