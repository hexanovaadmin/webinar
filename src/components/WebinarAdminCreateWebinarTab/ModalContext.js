import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { postWebinarData } from "../../webinarApi/webinarApi";

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
  const [deleteModal, setDeleteModal] = useState(false);

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
      type: "text",
      state: price,
      setState: setPrice,
    },
  ];
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setFile("");
  };

  function handleAddData(item, callback) {
    setData((items) => [...items, item]);
    if (callback) {
      callback();
    }
  }
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageElement = new Image();
      const imageUrl = URL.createObjectURL(selectedFile);
      imageElement.src = imageUrl;
      setSelectedImage(imageElement);
    }
    setFile(selectedFile);
    setIsEditorOpen(true);
  };



  const handleCancel = () => {
    setIsEditorOpen(false);
    setSelectedImage(null);
  };



  function handleSubmit(e) {
    e.preventDefault();
    if (!webinarName || !dateTime || !description || !price || !file) return;
    const formDataObject = {
      // webinarName,
      // dateTime,
      // description,
      // price,
      // file,
      dateAndTime: dateTime,
      title: webinarName,
      description: description,
      thumbnail: "test thumbnail", // Replace with actual thumbnail data or remove if not applicable
      price: parseInt(price), // Assuming the price should be a number
      currency: "USD", // Hardcoded currency or dynamic selection
      offer: "10", // Placeholder or dynamically capture offer data
      noOfSeats: 250, 
    };
    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg3NTM1OTAsIlVzZXJuYW1lIjoiYWRtaW4iLCJSb2xlIjpbImFkbWluIiwidXNlciJdfQ.oRSpg-Ah1x0770mUjoI9N3oYUp6kUW_aa0UUd7eL9NM";

    postWebinarData(formDataObject, bearerToken)
    .then((data) => {
      console.log("Data posted:", data);
      setDateTime("");
      setDescription("");
      setWebinarName("");
      setPrice("");
      setFile("");
      handleAddData(formDataObject, closeModal);
    })
    .catch((error) => {
      // Handle errors or update state accordingly
      console.log(error)
    });

  

  }

  return (
    <ModalContext.Provider
      value={{
        inputField,
        setFile,
        handleSubmit,
        modalOpen,
        closeModal,
        openModal,
        handleFileChange,
        handleCancel,
        isEditorOpen,
        selectedImage,
        setIsEditorOpen,
        file,
        setModalOpen,
        deleteModal,
        setDeleteModal,
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
