import Webinar from "./pages/Webinar/Webinar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebinarMeeting from "./components/WebinarCreateMeeting/WebinarMeeting";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Webinar />,
  },
  {
    path: "/meeting",
    element: <WebinarMeeting />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
