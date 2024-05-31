import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [modalOpen, setModalOpen] = useState(false);
  const handelCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal-main">
      <button onClick={() => setModalOpen(modalOpen ? false : true)}>
        Open Modal
      </button>
      {modalOpen ? <Modal closeModal={handelCloseModal} /> : null}
    
    </div>
  );
}
