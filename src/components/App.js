
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
    </div>
  )
}

export default App
