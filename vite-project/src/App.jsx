
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserHeader from "./sidebar.jsx";
import AdminHeader from "./components/AdminComponents/AdminHeader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <ToastContainer />
        <Outlet/>
    </>

  );

}

export default App;




