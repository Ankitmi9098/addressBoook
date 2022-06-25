import React, { useState } from "react";
// import Form from "./component/form";
import Modal from "./component/modal";
// import AddressList from "./component/AddressList";
import "./App.css";

function App() {
  const personal = [
    {
      name: "Sample",
      mobile: "1234567890",
      addrss: "a a a",
      city: "Chennai",
      states: "Tamil Nadu",
      zip: "123456",
      type: "Present",
    },
  ];
  const business = [
    {
      name: "cool",
      mobile: "1234567890",
      addrss: "a a a",
      city: "Chennai",
      states: "Tamil Nadu",
      zip: "123456",
      type: "Both",
    },
  ];
  const [personalAddList, setPersonalAddList] = useState(personal);
  const [businessAddList, setBusinessAddList] = useState(business);
  const [AddressType, setAddressType] = useState("Personal");
  const [showModal, setShowModal] = useState(false);
  const onTabChangeToPersonal = () => {
    setAddressType("Personal");
  };
  const onTabChangeToBusiness = () => {
    setAddressType("Business");
  };
  const onClose = () => {
    setShowModal(false);
  };
  const addButtonHandler = () => {
    setShowModal(true);
  };
  const addingNewAddress = (details) => {
    details.addressType === "Personal" &&
      setPersonalAddList((prevPersonalAddList) => {
        return [...prevPersonalAddList, details];
      });
    details.addressType === "Business" &&
      setBusinessAddList((prevBusinessAddList) => {
        return [...prevBusinessAddList, details];
      });
    setShowModal(false);
  };

  return (
    <div className="App">
      <h2 className="App-header">Address Book</h2>
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <th
                  className={` ${AddressType === "Personal" ? "buttons active" : "buttons"}`}
                  value="Personal"
                  onClick={onTabChangeToPersonal}
                >
                  Personal
                </th>
                <th
                  className={`${AddressType === "Business" ? "buttons active" : "buttons"}`}
                  value="Business"
                  onClick={onTabChangeToBusiness}
                >
                  Business
                </th>
              </tr>
              <tr>
                <td>Name</td>
                <td>Mobile No.</td>
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Zip</td>
                <td>Present/Permanent Address</td>
              </tr>

              {AddressType === "Personal" &&
                (personalAddList.length === 0 ? (
                  <h3>No personal records to display</h3>
                ) : (
                  personalAddList.map((addr) => (
                    <tr key={addr.mobile + addr.zip}>
                      <td>{addr.name}</td>
                      <td>{addr.mobile}</td>
                      <td>{addr.addrss}</td>
                      <td>{addr.city}</td>
                      <td>{addr.states}</td>
                      <td>{addr.zip}</td>
                      <td>{addr.type}</td>
                    </tr>
                  ))
                ))}

              {AddressType === "Business" &&
                (businessAddList.length === 0 ? (
                  <h3>No business records to display.</h3>
                ) : (
                  businessAddList.map((addr) => (
                    <tr key={addr.mobile + addr.zip}>
                      <td>{addr.name}</td>
                      <td>{addr.mobile}</td>
                      <td>{addr.addrss}</td>
                      <td>{addr.city}</td>
                      <td>{addr.states}</td>
                      <td>{addr.zip}</td>
                      <td>{addr.type}</td>
                    </tr>
                  ))
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <button className="add" onClick={addButtonHandler}>
            Add
          </button>
        </div>
        <Modal
          show={showModal}
          onClose={onClose}
          onAddAddress={addingNewAddress}
          onTabChangeToPersonal = {onTabChangeToPersonal}
          onTabChangeToBusiness = {onTabChangeToBusiness}
        >
          {/* <Form onClose={onClose} onAddAddress={addingNewAddress} ></Form> */}
        </Modal>
        {/* <AddressList personal={personalAddList} business={businessAddList} /> */}
      </div>
    </div>
  );
}

export default App;
