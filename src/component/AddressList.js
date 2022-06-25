import React, { useState } from "react";

function AddressList(props) {
  const [AddressType, setAddressType] = useState("Personal");
  const onTabChangeToPersonal = () => {
    setAddressType("Personal");
  };
  const onTabChangeToBusiness = () => {
    setAddressType("Business");
  };

  return (
    <React.Fragment>
      <div>
        <table>
          <thead>
            <tr>
              <th
                className="buttons"
                value="Personal"
                onClick={onTabChangeToPersonal}
              >
                Personal
              </th>
              <th
                className="buttons"
                value="Business"
                onClick={onTabChangeToBusiness}
              >
                Business
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Mobile No.</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Present/Permanent</th>
            </tr>
          </thead>
          <tbody>
            {AddressType === "Personal" &&
              (props.personal.length === 0 ? (
                <h3>No personal records to display</h3>
              ) : (
                props.personal.map((addr) => (
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
              (props.business.length === 0 ? (
                <h3>No business records to display.</h3>
              ) : (
                props.business.map((addr) => (
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
    </React.Fragment>
  );
}

export default AddressList;
