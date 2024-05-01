import React, { useEffect, useState } from "react";
import "./style.scss";

interface ModalProps {
  isVisible?: boolean;
  title: string;
  onClose: () => void;
}


export const Modal: React.FC<ModalProps> = ({ isVisible = false, title, onClose }) => {
  const keydownHandler = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <div className="message" onClick={onClose}>
          <div className="message__wrap">
            <div className="message__content"  onClick={(e) => e.stopPropagation()}>
              <p className="message__text">{title}</p>
              <div className="message__img">
                <svg
                  className="message__png"
                  width="38"
                  height="33"
                  viewBox="0 0 38 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 17.5L13.5 29L36 2"
                    stroke="#1e1e1e"
                    stroke-width="5"
                  />
                </svg>
              </div>
              <p className="close__button" onClick={onClose}>
                &times;
              </p>
            </div>
          </div>
        </div>



  );
};