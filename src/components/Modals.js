import { Modal } from "./Modal";
import { useModal } from "../hooks/useModal";
import { ContactForm } from "./ContactForm";
import { ModalPortal } from "./ModalPortal";

function Modals() {
  const [isOpenModal1, openModal1, closeModal1] = useModal();
  const [isOpenModal2, openModal2, closeModal2] = useModal();
  const [isOpenModal3, openModal3, closeModal3] = useModal();
  const [isOpenModalContact, openModalContact, closeModalContact] = useModal();
  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal();

  return (
    <>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este el contenido de mi modal 1</p>
        <img src="https://placeimg.com/200/200/animals" alt="img"></img>
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Este el contenido de mi modal 2</p>
        <img src="https://placeimg.com/200/200/nature" alt="img"></img>
      </Modal>

      <button onClick={openModal3}>Modal 3</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Modal 3</h3>
        <h5>Este es mi modal 3</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          architecto maxime incidunt perferendis vero consequuntur deserunt.
          Totam eligendi asperiores quas, pariatur harum cupiditate architecto
          doloremque, amet minima necessitatibus aliquam illum. 😊
        </p>
      </Modal>

      <button onClick={openModalContact}>Modal Contact Form</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm></ContactForm>
      </Modal>
      {/*Establecer otro componente para otro ejemplo 😊*/}

      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal 3</h3>
        <h5>Modal en Portal 🌌</h5>
        <p>
          Este es el contenido de un modal que carga en un nodo diferente 
          al que se carga nuestro contenido principal
        </p>
      </ModalPortal>
    </>
  );
}

export { Modals };
