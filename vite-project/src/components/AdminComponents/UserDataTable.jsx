
import { useState } from "react";
import { toast } from "react-toastify";
import { useDeleteUserMutation, useUpdateUserByAdminMutation } from "../../slices/adminApiSlice";
import AdminHeader from "./AdminHeader";
import "./UsersDataTable.css";
import UsersHeader from "./Headers/UsersHeader";

const UsersDataTable = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [userIdToUpdate, setUserIdToUpdate] = useState("");
  const [userNameToUpdate, setUserNameToUpdate] = useState("");
  const [userEmailToUpdate, setUserEmailToUpdate] = useState("");

  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const [updateUserByAdmin, { isLoading: isUpdating }] = useUpdateUserByAdminMutation();

  const handleSearch = (event) => setSearchQuery(event.target.value);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async () => {
    try {
      await deleteUser({ userId: userIdToDelete });
      toast.success("User Deleted Successfully.");
      setUserIdToDelete(null);
      setShowConfirmation(false);
      window.location.reload();
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  const handleOpenUpdateModal = (user) => {
    setUserIdToUpdate(user._id);
    setUserNameToUpdate(user.name);
    setUserEmailToUpdate(user.email);
    setShowUpdateModal(true);
  };

  const handleUpdate = async () => {
    try {
      await updateUserByAdmin({
        userId: userIdToUpdate,
        name: userNameToUpdate,
        email: userEmailToUpdate,
      });
      toast.success("User Updated Successfully.");
      setUserIdToUpdate(null);
      setShowUpdateModal(false);
      window.location.reload();
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  return (
    <>
      <AdminHeader />
      
        
        <div className="user-data">
        <UsersHeader />
          <div className="search-container">
            <label htmlFor="searchInput">Search users:</label>
            <br />
            <input
              id="searchInput"
              className="search-input"
              type="text"
              placeholder="Enter Name or Email..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="update-button"
                      onClick={() => handleOpenUpdateModal(user)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => {
                        setUserIdToDelete(user._id);
                        setShowConfirmation(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showConfirmation && (
            <div className="modal">
              <div className="modal-content">
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this user?</p>
                <div className="modal-actions">
                  <button
                    className="cancel-button"
                    onClick={() => setShowConfirmation(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="confirm-button"
                    onClick={handleDelete}
                    disabled={isLoading}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {showUpdateModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Update User</h2>
                <div className="form-group">
                  <label htmlFor="updateName">Name</label>
                  <input
                    id="updateName"
                    type="text"
                    value={userNameToUpdate}
                    onChange={(e) => setUserNameToUpdate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="updateEmail">Email</label>
                  <input
                    id="updateEmail"
                    type="email"
                    value={userEmailToUpdate}
                    onChange={(e) => setUserEmailToUpdate(e.target.value)}
                  />
                </div>
                <div className="modal-actions">
                  <button
                    className="cancel-button"
                    onClick={() => setShowUpdateModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="confirm-button"
                    onClick={handleUpdate}
                    disabled={isUpdating}
                  >
                    {isUpdating ? "Updating..." : "Update"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
     
    </>
  );
};

export default UsersDataTable;
