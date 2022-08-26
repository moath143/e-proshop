import React from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: 'absolute'
  },
};

ReactModal.setAppElement("#root");

const ModalComp = (props) => {

    return (
      <>
        <ReactModal 
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={props.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </ReactModal>
      </>
    );
};

export default ModalComp;
