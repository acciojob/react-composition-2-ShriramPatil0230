
import React from "react";
import './../styles/App.css';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={handleOpenModal}>Open Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
      <button onClick={handleCloseModal}>Close</button>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  )
}

export default App
