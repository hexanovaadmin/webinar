import "./CreateWebinarModal.scss";
import "../../App.scss";
import { useModalContext } from "./ModalContext";
function CreateWebinarModal() {
  const { handleSubmit, inputField, setFile, modalOpen, closeModal } =
    useModalContext();

  if (!modalOpen) return null;
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
              Create Webinar
            </h3>
          </div>
          <form className="ir-ws-signup-form-container">
            {inputField.map((item, index) => (
              <div className="ir-ws-signup-content-group" key={index}>
                <input
                  className="ir-ws-signup-input-field"
                  type={item.type}
                  name={item.title}
                  required
                  value={item.state}
                  onChange={(e) => item.setState(e.target.value)}
                />
                <span className="ir-ws-signup-highlight"></span>
                <span className="ir-ws-signup-bar"></span>
                <label className="ir-ws-signup-label">{item.title}</label>
              </div>
            ))}
            <div className="ir-images-row images"></div>
            <div className="ir-ws-file-field">
              <div className="ir-ws-file-path-wrapper"></div>
              <div className="ir-ws-create-case-file-btn-container">
                <span className="btn blue-gradient btn-sm">Add file</span>
                <input
                  type="file"
                  className="doesnt-exists"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
            <div className="ir-ws-text-center ir-ws-default-btn-container">
              <button
                className="ir-ws-app-bg btn ir-color-white ir-ws-no-border ir-ws-default-btn ir-ws--create-webinar-submit-button"
                type="submit"
                onClick={handleSubmit}
              >
                <span>Create Webinar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateWebinarModal;
