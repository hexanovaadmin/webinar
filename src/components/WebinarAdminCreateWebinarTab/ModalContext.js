import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [webinarName, setWebinarName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const inputField = [
    {
      id: 1,
      title: "Date and Time",
      type: "datetime-local",
      state: dateTime,
      setState: setDateTime,
    },
    {
      id: 2,
      title: "Webinar Name",
      type: "text",
      state: webinarName,
      setState: setWebinarName,
    },
    {
      id: 3,
      title: "Description",
      type: "text",
      state: description,
      setState: setDescription,
    },
    {
      id: 4,
      title: "Set Price",
      type: "number",
      state: price,
      setState: setPrice,
    },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  function handleAddData(item, callback) {
    setData((items) => [...items, item]);
    if (callback) {
      callback();
    }
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageElement = new Image();
      const imageUrl = URL.createObjectURL(file);
      imageElement.src = imageUrl;
      setSelectedImage(imageElement);
    }
    setFile(file);
    setIsEditorOpen(true);
  };

  const handleCancel = () => {
    setIsEditorOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!webinarName || !dateTime || !description || !price || !file) return;
    const formDataObject = {
      webinarName,
      dateTime,
      description,
      price,
      file,
    };
    setDateTime("");
    setDescription("");
    setWebinarName("");
    setPrice("");
    setFile("");
    handleAddData(formDataObject, closeModal);
  }

  return (
    <ModalContext.Provider
      value={{
        inputField,
        setFile,
        handleSubmit,
        modalOpen,
        openModal,
        closeModal,
        handleFileChange,
        handleCancel,
        isEditorOpen,
        selectedImage,
        setIsEditorOpen,
        file,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("Context used outside of the provider");
  return context;
}

export { ModalProvider, useModalContext };
