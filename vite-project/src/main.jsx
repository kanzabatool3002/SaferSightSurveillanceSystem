
import React, { createContext, useState } from 'react'
// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

//? ==================================== User Screens Import ====================================
import PrivateRoutes from './screens/PrivateRoutes.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';

//? ==================================== Admin Screens Import ====================================
import AdminPrivateRoutes from './screens/adminScreens/PrivateRoutes.jsx';
import AdminHomeScreen from './screens/adminScreens/HomeScreen.jsx';
import AdminLoginScreen from './screens/adminScreens/LoginScreen.jsx';
import AdminRegisterScreen from './screens/adminScreens/RegisterScreen.jsx';
import AdminProfileScreen from './screens/adminScreens/ProfileScreen.jsx';
import UsersManagementScreen from './screens/adminScreens/UsersManagementScreen.jsx';
import Watching from './Watching.jsx';
import Alerts from './Alerts.jsx';
import VideoWall from './VideoWall.jsx';
import VideoUpload from './VideoUpload.jsx';
import AddDevicePage from './AddDevicePage.jsx';
import FAQ from './FAQ.jsx';
import Location from './Location.jsx';
import Camera from './Camera.jsx';
import Mygemini from './mygemini.jsx';
import EmailVerificationPage from './EmailVerificationPage.jsx';
import NotificationPage from './NotificationPage.jsx';
import VideoPlayer from './components-VideoWall/VideoPlayer.jsx';
// import NotificationPage from './NotificationPage.jsx';



import Auth from './pages/Auth.jsx';
import OtpVerification from './pages/OtpVerification.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import FrontPage from './front-page.jsx';




export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
});


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<App />} >

      { /* ===================================== User Routes ===================================== */}

      {/* <Route index={true} path='/' element={<HomeScreen />} /> */}
      <Route index={true} path='/' element={<FrontPage/>} />

      <Route path="/auth" element={<Auth />} />


      <Route path='/login' element={<LoginScreen />} />

      <Route path='/register' element={<RegisterScreen />} />




      <Route path='/otp-verification/:email/:phone' element={ <OtpVerification /> } />
      <Route path='/password/forgot' element={ <ForgotPassword /> } />
      <Route path='/password/reset/:token' element={ <ResetPassword /> } />




      {/* USER PRIVATE ROUTES */}
      <Route path='' element={<PrivateRoutes />} >

        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/watching' element={<Watching />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path="/video-logs" element={<VideoWall />} />
        <Route path="/video-detection" element={<VideoUpload />} />
        <Route path="/add-device" element={<AddDevicePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/location" element={<Location />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/vlm" element={<Mygemini />} />
        <Route path="/live" element={<VideoPlayer />} />
        <Route path="/notification" element={<NotificationPage />} />
        {/* <Route path="/notification" element={<NotificationPage />} /> */}
        
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/verify-email" element={<EmailVerificationPage />} />


      </Route>

      { /* ===================================== Admin Routes ===================================== */}

      <Route path='/admin' element={<AdminHomeScreen />} />

      <Route path='/admin/login' element={<AdminLoginScreen />} />

      <Route path='/admin/register' element={<AdminRegisterScreen />} />

      {/* ADMIN PRIVATE ROUTES */}
      <Route path='' element={<AdminPrivateRoutes />} >

        <Route path='/admin/profile' element={<AdminProfileScreen />} />
        <Route path='/admin/manage-users' element={<UsersManagementScreen />} />

      </Route>

    </Route>

  )

);



ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >

    <React.StrictMode>

      <RouterProvider router={router} />

    </React.StrictMode>

  </Provider>

);



