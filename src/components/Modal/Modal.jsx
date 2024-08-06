import { HeaderModal } from "../HeaderModal/HeaderModal";
import "./Modal.css";
import { ModalFooter } from "./ModalFooter";
import { ModalForm } from "./ModalForm";

export const Modal = () => {
  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        {/* headerModal */}
        <HeaderModal />
        {/* modal-form */}
        <ModalForm />
        {/* modal-footer */}
        <ModalFooter />
      </div>
    </div>
  );
};
