import React, { useState } from "react";
import Validation from "./validation";

const Form = (props) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [AddressType, setAddressType] = useState("");
  const [AddressStatus, setAddressStatus] = useState("");
  const [checkedStatus, setCheckedStatus] = useState({
    Present: false,
    Permanent: false,
    Both: false,
  });
  const mobileErrMsg = "Please Enter 10 digit mobile number";
  const [showMobileError, setMobileError] = useState(false);

  const clearForm = () => {
    setName("");
    setAddress("");
    setMobileNumber("");
    setState("");
    setCity("");
    setPostalCode("");
    setAddressStatus("");
    setCheckedStatus({ Present: false, Permanent: false, Both: false });
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const mobileNumberHandler = (event) => {
    setMobileNumber(event.target.value);
    if (
      event.target.value.trim().length === 10 ||
      event.target.value.trim().length === 0
    ) {
      setMobileError(false);
    } else {
      setMobileError(true);
    }
  };
  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const stateHandler = (event) => {
    setState(event.target.value);
  };
  const cityHandler = (event) => {
    setCity(event.target.value);
  };
  const postalCodeHandler = (event) => {
    setPostalCode(event.target.value);
  };
  const addressTypeHandler = (event) => {
    setAddressType(event.target.value);
    if (AddressType !== "") {
      clearForm();
    }
  };
  const addressStatusHandler = (event) => {
    setAddressStatus(event.target.value);
    setCheckedStatus((prevCheckedStatus) => {
      return { ...prevCheckedStatus, [event.target.value]: true };
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const details = {
      addressType: AddressType,
      name: name,
      mobile: mobileNumber,
      addrss: address,
      city: city,
      states: state,
      zip: postalCode,
      type: AddressStatus,
    };
    props.onAddAddress(details);
    clearForm();
  };

  return (
    <React.Fragment>
      <div className="pop">
        <h3>Fill Address details</h3>
        <div>
          <button className="close" onClick={props.onClose}>
            X
          </button>
        </div>
        <div onChange={addressTypeHandler} className="radio">
          <div>
            <input
              type="radio"
              id="personal"
              name="address-type"
              value="Personal"
            />
            <label htmlFor="personal">Personal</label>
          </div>
          <div>
            <input
              type="radio"
              id="business"
              name="address-type"
              value="Business"
            />
            <label htmlFor="business">Business</label>
          </div>
        </div>
        {AddressType && (
          <form onSubmit={onSubmitHandler} id="address-form">
            <div className="fields">
              <div>
                <label>Name</label>
                <br></br>
                <input
                  type="text"
                  onChange={nameHandler}
                  value={name}
                  className="input"
                />
              </div>

              <div>
                <label>Mobile No.</label>
                <br></br>
                <input
                  type="number"
                  onChange={mobileNumberHandler}
                  value={mobileNumber}
                  className="input"
                />
                <Validation
                  showError={showMobileError}
                  errMsg={mobileErrMsg}
                ></Validation>
              </div>
              <div>
                <label>Address</label>
                <br></br>
                <textarea
                  type="text"
                  onChange={addressHandler}
                  value={address}
                />
              </div>
              <div>
                <label>City</label>
                <br></br>
                <input
                  type="text"
                  onChange={cityHandler}
                  value={city}
                  className="input"
                />
              </div>
              <div>
                <label>State</label>
                <br></br>
                <input
                  type="text"
                  onChange={stateHandler}
                  value={state}
                  className="input"
                />
              </div>
              <div>
                <label>Postal Code/Zip Code</label>
                <br></br>
                <input
                  type="number"
                  onChange={postalCodeHandler}
                  value={postalCode}
                  className="input"
                />
              </div>

              <div className="radios">
                <div>
                  <input
                    type="radio"
                    id="Present"
                    name="address-status"
                    value="Present"
                    checked={checkedStatus.present}
                    onChange={addressStatusHandler}
                  />
                  <label htmlFor="Present">Present</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Permanent"
                    name="address-status"
                    value="Permanent"
                    checked={checkedStatus.permanent}
                    onChange={addressStatusHandler}
                  />
                  <label htmlFor="Permanent">Permanent</label>
                </div>
                <div className="">
                  <input
                    type="radio"
                    id="Both"
                    name="address-status"
                    value="Both"
                    checked={checkedStatus.both}
                    onChange={addressStatusHandler}
                  />
                  <label htmlFor="Both">Both</label>
                </div>
              </div>
            </div>
            <div className="btns">
              <button type="submit" className="save">
                Save
              </button>
              <button type="reset" className="clear" onClick={clearForm}>
                Clear
              </button>
            </div>
          </form>
        )}
      </div>
    </React.Fragment>
  );
};

export default Form;
