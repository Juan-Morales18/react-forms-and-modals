import ReactDOM from "react-dom";

import "./Modal.css";

function ModalPortal({ children, isOpen, closeModal }) {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          ❌
        </button>
        {children /*La prop "children" ya viene por defecto en React*/}
      </div>
    </article>,
    document.getElementById("modal")
  );
}

export { ModalPortal };
