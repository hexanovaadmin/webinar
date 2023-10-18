import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [webinarName, setWebinarName] = useState("");
  const [dateTime, setDateTime] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
