import React, { useState } from "react";
import ReactModal from "react-modal";
import {
  CloseButton,
  SectionUpload,
  Upload,
  Image,
  ProcessUpload,
} from "./modalStyle";
import Files from "react-files";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "40%",
  },
};

ReactModal.setAppElement("#root");

const ModalComp = (props) => {
  const [img, setImg] = useState(null);

  const onFilesChange = (filex) => {
    setImg(filex[0].preview.url);
  };

  const onFilesError = (err, file) => {
    console.log("error code " + err.code + ": " + err.message);
  };


  return (
    <>
      <ReactModal
        isOpen={props.modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseButton onClick={props.closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </CloseButton>
        <SectionUpload>
          <Files
            className="files-dropzone"
            onChange={onFilesChange}
            onError={onFilesError}
            accepts={["image/*"]}
            multiple={false}
            clickable
          >
            <Upload>
              <i className="fa-solid fa-cloud-arrow-up"></i>
            </Upload>
          </Files>
          {img && <Image src={img} alt="" />}
        </SectionUpload>
        <ProcessUpload>upload</ProcessUpload>
      </ReactModal>
    </>
  );
};

export default ModalComp;
