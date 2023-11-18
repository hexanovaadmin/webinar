import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
const ModalContext = createContext();

function ModalProvider({ children }) {
  const [title, setTitle] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState([]);
  const [webinarData, setWebinarData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL =
    "http://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk0NjExMzksIlVzZXJuYW1lIjoiYWRtaW4iLCJSb2xlIjpbImFkbWluIiwidXNlciJdfQ.ZyOxB2uFi6PpMr18JZxfkI3tM986gKSoxS7qmhs-0Wc";

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
    setFile("");
  };

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
  //   // console.log(file);
  //   console.log(webinarData);
  // }, [webinarData]);

  async function handleSubmit() {
    try {
      setIsLoading(true);
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
      const response = await axios.post(
        `${BASE_URL}/api/v1/webinar/admin`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      // console.log("API Response:", response.config.data);
      const updatedResponse = await axios.get(`${BASE_URL}/api/v1/webinars`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);

      setWebinarData(updatedResponse.data);

      setDateAndTime("");
      setTitle("");
      setDescription("");
      setPrice("");
      setFile("");
      closeModal();
    } catch (error) {
      console.error("Error making API request:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    function () {
      async function fetchWebinarData() {
        try {
          setIsLoading(true);
          const response = await axios.get(`${BASE_URL}/api/v1/webinars`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // console.log(response);

          setWebinarData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      }

      fetchWebinarData();
    },
    [setWebinarData, setIsLoading]
  );

  // useEffect(function () {

  //   async function fetchTransactionDetails() {
  //     try {
  //       const response = await axios.get(
  //         `${BASE_URL}/api/v1/webinar/user/transactions`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchTransactionDetails();
  // }, []);

  async function handleDeleteWebinar(webinarId) {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `${BASE_URL}/api/v1/webinar/admin?webinarId=${webinarId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      setWebinarData((data) =>
        data.filter((webinar) => webinar.id !== webinarId)
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdateWebinar(webinarId) {
    try {
      setIsLoading(true);
      const updatedWebinarData = {
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
      const response = await axios.put(
        `${BASE_URL}/api/v1/webinar/admin?webinarId=${webinarId}`,
        updatedWebinarData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("API Response:", response);
      setWebinarData((prevWebinars) =>
        prevWebinars.map((webinar) =>
          webinar.id === webinarId ? updatedWebinarData : webinar
        )
      );
      // console.log("API Response:", response.config.data);
      const updatedResponse = await axios.get(`${BASE_URL}/api/v1/webinars`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);

      setWebinarData(updatedResponse.data);

      setDateAndTime("");
      setTitle("");
      setDescription("");
      setPrice("");
      setFile("");
      // closeModal();
    } catch (error) {
      console.error("Error making API request:", error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <ModalContext.Provider
      value={{
        inputField,
        setFile,
        handleSubmit,
        handleDeleteWebinar,
        handleUpdateWebinar,
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
        webinarData,
        isLoading,
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
