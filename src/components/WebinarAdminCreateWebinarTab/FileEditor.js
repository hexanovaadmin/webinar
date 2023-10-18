import FilerobotImageEditor, { TABS } from "react-filerobot-image-editor";
import { useModalContext } from "./ModalContext";

function FileEditor() {
  const { setFile, handleCancel, selectedImage, setIsEditorOpen } =
    useModalContext();

  return (
    <div>
      <div className="ir-ws-file-editor-box">
        <FilerobotImageEditor
          source={selectedImage}
          onSave={(editedImage) => {
            setFile(editedImage);
            setIsEditorOpen(false);
          }}
          onClose={handleCancel}
          annotationsCommon={{
            fill: "#ff0000",
          }}
          Text={{ text: "Filerobot..." }}
          Rotate={{ angle: 90, componentType: "slider" }}
          Crop={{
            presetsItems: [
              {
                titleKey: "classicTv",
                descriptionKey: "4:3",
                ratio: 4 / 3,
              },
              {
                titleKey: "cinemascope",
                descriptionKey: "21:9",
                ratio: 21 / 9,
              },
            ],
          }}
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE]}
        />
      </div>
    </div>
  );
}

export default FileEditor;
