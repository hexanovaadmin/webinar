import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [title, setTitle] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
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
      state: dateAndTime,
      setState: setDateAndTime,
    },
    {
      id: 2,
      title: "Webinar Name",
      type: "text",
      state: title,
      setState: setTitle,
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

  // useEffect(() => {
  //   console.log(file);
  //   console.log(data);
  // }, [data, file]);

  async function handleSubmit(e) {
    e.preventDefault();
    const BASE_URL =
      "http://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com/api/v1/webinar/admin";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTkyODY4NzQsIlVzZXJuYW1lIjoiYWRtaW4iLCJSb2xlIjpbImFkbWluIiwidXNlciJdfQ.9whoC50XWQHivbLHkF-nWVca3zXGFqssdb1-auu0zos";

    try {
      const formData = {
        dateAndTime,
        title,
        description,
        thumbnail: "test thumbnail",
        price,
        file,
        currency: "USD",
        offer: "10",
        noOfSeats: 250,
      };
      const response = await axios.post(BASE_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response);

      setDateAndTime("");
      setTitle("");
      setDescription("");
      setPrice("");
      setFile("");
      closeModal();
    } catch (error) {
      console.error("Error making API request:", error);
    }
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
