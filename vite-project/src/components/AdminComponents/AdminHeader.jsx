
import React, { useState, useEffect } from 'react';
import './AdminSidebar.css';
import { formatDate } from "../../utils/date";

// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAdminLogoutMutation } from '../../slices/adminApiSlice';
import { logout } from '../../slices/adminAuthSlice';
import './main.css'
function AdminHeader() {
  
  const [name, setName] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const { adminInfo } = useSelector((state) => state.adminAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

const [logoutApiCall] = useAdminLogoutMutation();

const logOutHandler = async () => {
  try {
    await logoutApiCall().unwrap();
    dispatch(logout());
    navigate('/admin');
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {

    setName(adminInfo.name);
    setCreatedAt(adminInfo.createdAt);
    setLastLogin(adminInfo.lastLogin);

  },[ adminInfo.name,adminInfo.createdAt,adminInfo.lastLogin])
  return (
    <div className="sidebar">
      <div className="logo">
      

	  <img src="logo.png" alt="SAFER SIGHT" />

      </div>
      <div className="sidebar-header">
      </div>
      <ul className="sidebar-menu">
        
            <nav>
              <Link to="/admin/profile">Profile</Link>
             
               <Link to="/admin/manage-users">Manage-users</Link>
               </nav>
             
      </ul>
      
      <div className='space-y-1'>
        <div className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'>
          <h3 className='text-lg font-semibold text-blue-400 mb-3'>Admin Information</h3>
          <p className='text-gray-300'>Name: {adminInfo.name}</p>
          <p className='text-gray-300'>Organization: </p>
          <h2 className='text-gray-300'> Safer Sight</h2>

        </div>
        <div className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'>
          <h3 className='text-lg font-semibold text-blue-400 mb-3'>Account Activity</h3>
          <p className='text-gray-300'>
            <span className='font-bold'>Joined: </span>
            <br/>
            {/* {formatDate(userInfo.createdAt)} */}
            {new Date(adminInfo.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className='text-gray-300'>
            <span className='font-bold'>Last Login: </span>
            <br />
            {/* {formatDate(userInfo.lastLogin)} */}
            {new Date(adminInfo.lastLogin).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
  
        </div>
      </div>

      <div className='mt-4'>
      <button
  onClick={logOutHandler}
  className='w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
>
  Logout
</button>

      </div>
    </div>
  );
}

export default AdminHeader;




