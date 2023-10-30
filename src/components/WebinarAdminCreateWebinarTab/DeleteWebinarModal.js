import "../../App.scss";
import "./DeleteWebinarModal.scss";
import { useModalContext } from "./ModalContext";

function DeleteWebinarModal() {
  const { closeModal } = useModalContext();
  return (
    <div className="ir-ws-position-fixed ir-ws-sign-popup-container ">
      <div className="ir-ws-position-absolute ir-bg-white ir-ws-sign-popup-inner-container">
        <div className="ir-ws-signup-content-container">
          <div
            className="ir-ws-position-absolute ir-ws-signup-close-container"
            onClick={closeModal}
          >
            <span>X</span>
          </div>
          <div className="ir-ws-signup-content-inner-container">
            <h3 className="ir-ws-text-center ir-ws-heading-default-color ir-ws-signup-content-title">
              Are you sure you want to delete this Webinar?
            </h3>
          </div>
          <div className="ir-ws-deleteModal-button-container">
            <button className="ir-ws-deleteModal-button-yes">Yes</button>
            <button className="ir-ws-deleteModal-button-no">No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteWebinarModal;
