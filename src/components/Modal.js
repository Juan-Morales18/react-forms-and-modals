import "./Modal.css";

function Modal({ children, isOpen, closeModal }) {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          ❌
        </button>
        {children /*La prop "children" ya viene por defecto en React*/}
      </div>
    </article>
  );
}

export { Modal };
