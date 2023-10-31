// api/webinarApi.js
// const BASE_URL = "https://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com";


const BASE_URL = "http://bd-webinarservice-lb-staging-958852351.us-east-1.elb.amazonaws.com";

export async function postWebinarData(formDataObject, bearerToken) {
    const apiUrl = `${BASE_URL}/api/v1/webinar/admin`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(formDataObject),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }
  