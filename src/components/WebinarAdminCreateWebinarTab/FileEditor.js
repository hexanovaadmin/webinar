import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";
import { useModalContext } from "./ModalContext";

function FileEditor() {
  const { setFile, handleCancel, selectedImage, setIsEditorOpen, file } =
    useModalContext();
  const originalFileName = (file.name || "Untitled").split(".")[0];

  return (
    <div>
      <div className="ir-ws-file-editor-box">
        <FilerobotImageEditor
          source={selectedImage}
          onBeforeSave={(savedImageData, save) => {
            savedImageData.name = originalFileName;
            return false;
          }}
          onSave={(editedImage) => {
            setFile(editedImage);
            setIsEditorOpen(false);
          }}
          onClose={handleCancel}
          Rotate={{ angle: 90, componentType: "slider" }}
          Crop={{
            noPresets: true,
            ratio: "custom",
          }}
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE]}
        />
      </div>
    </div>
  );
}

export default FileEditor;
