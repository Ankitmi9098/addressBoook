import React, { useEffect, useState } from "react";
import Validation from "./validation";

const Modal = (props) => {
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

  const [name_error, set_name_error] = useState("");
  const [mobile_error, set_mobile_error] = useState("");
  const [addrs_error, set_addrs_error] = useState("");
  const [states_error, set_states_error] = useState("");
  const [city_error, set_city_error] = useState("");
  const [zip_error, set_zip_error] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [nameWasTouched, setNameWasTouched] = useState(false);
  const [mobileWasTouched, setMobileWasTouched] = useState(false);
  const [addrsWasTouched, setAddrsWasTouched] = useState(false);
  const [statesWasTouched, setStatesWasTouched] = useState(false);
  const [cityWasTouched, setCityWasTouched] = useState(false);
  const [zipWasTouched, setZipWasTouched] = useState(false);
  const clearForm = () => {
    setName("");
    setAddress("");
    setMobileNumber("");
    setState("");
    setCity("");
    setPostalCode("");
    setAddressStatus("");
    setCheckedStatus({ Present: false, Permanent: false, Both: false });
    set_name_error("");
    set_addrs_error("");
    set_city_error("");
    set_mobile_error("");
    set_zip_error("");
    set_states_error("");
    setNameWasTouched(false);
    setMobileWasTouched(false);
    setAddrsWasTouched(false);
    setCityWasTouched(false);
    setStatesWasTouched(false);
    setZipWasTouched(false);
    setIsFormValid(false);
  };

  var CharRegEx = /^[a-zA-Z ]+$/;
  const nameHandler = (event) => {
    if (event.target.value.trim() === "") {
      set_name_error("Please enter a value");
    } else if (!event.target.value.trim().match(CharRegEx)) {
      set_name_error("Chatercters from a-z/A-Z allowed");
    } else {
      set_name_error("");
    }
    setNameWasTouched(true);
    setName(event.target.value);
  };
  const mobileNumberHandler = (event) => {
    if (event.target.value.trim() === "") {
      set_mobile_error("Please enter a value");
    } else if (isNaN(event.target.value.trim())) {
      set_mobile_error("Please enter numeric value");
    } else if (event.target.value.trim().length !== 10) {
      set_mobile_error("Please enter a valid 10 digit mobile number");
    } else {
      set_mobile_error("");
    }
    setMobileWasTouched(true);
    setMobileNumber(event.target.value);
  };
  const addressHandler = (event) => {
    if (event.target.value.trim() === "") {
      set_addrs_error("Please enter a value");
    } else if (event.target.value.trim().split(" ").length < 3) {
      set_addrs_error("Address should have a length of atleast 3 words");
    } else {
      set_addrs_error("");
    }
    setAddrsWasTouched(true);
    setAddress(event.target.value);
  };
  const stateHandler = (event) => {
    if (event.target.value.trim() === "") {
      set_states_error("Please enter a value");
    } else if (!event.target.value.trim().match(CharRegEx)) {
      set_states_error("Chatercters from a-z/A-Z allowed");
    } else {
      set_states_error("");
    }
    setStatesWasTouched(true);
    setState(event.target.value);
  };
  const cityHandler = (event) => {
    if (event.target.value.trim() === "") {
      set_city_error("Please enter a value");
    } else if (!event.target.value.trim().match(CharRegEx)) {
      set_city_error("Chatercters from a-z/A-Z allowed");
    } else {
      set_city_error("");
    }
    setCityWasTouched(true);
    setCity(event.target.value);
  };
  const postalCodeHandler = (event) => {
    if (event.target.value.trim() === "") {
      set_zip_error("Please enter a value");
    } else if (isNaN(event.target.value.trim())) {
      set_zip_error("Please enter numeric value");
    } else if (event.target.value.trim().length !== 6) {
      set_zip_error("Please enter a valid 6 digit zip pin");
    } else {
      set_zip_error("");
    }
    setZipWasTouched(true);
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

  useEffect(() => {
    {
      nameWasTouched &&
        name_error === "" &&
        mobileWasTouched &&
        mobile_error === "" &&
        statesWasTouched &&
        states_error === "" &&
        cityWasTouched &&
        city_error === "" &&
        zipWasTouched &&
        zip_error === "" &&
        addrsWasTouched &&
        addrs_error === "" &&
        AddressStatus !== "" &&
        setIsFormValid(true);
    }
  }, [
    name_error,
    mobile_error,
    states_error,
    city_error,
    zip_error,
    addrs_error,
    nameWasTouched,
    addrsWasTouched,
    mobileWasTouched,
    cityWasTouched,
    statesWasTouched,
    zipWasTouched,
    AddressStatus,
  ]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const details = {
      addressType: AddressType,
      name: name.trim(),
      mobile: mobileNumber.trim(),
      addrss: address.trim(),
      city: city.trim(),
      states: state.trim(),
      zip: postalCode.trim(),
      type: AddressStatus.trim(),
    };
    props.onAddAddress(details);
    setAddressType("");
    clearForm();
    if(AddressType === "Personal"){
      props.onTabChangeToPersonal();
    } else if (AddressType === "Business"){
      props.onTabChangeToBusiness();
    }
  };

  const closeModal = () => {
    clearForm();
    setAddressType("");
    props.onClose();
  }

  if (!props.show) {
    return null;
  }
  return (
    <div onClick={closeModal} className="bg">
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="pop">
          <h3>Fill Address details</h3>
          <div>
            <button className="close" onClick={closeModal}>
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
                <div
                  onClick={() => {
                    setNameWasTouched(true);
                  }}
                  onBlur={() => {
                    nameWasTouched &&
                      name === "" &&
                      set_name_error("Please Enter a value");
                  }}
                >
                  <label>Name</label>
                  <br></br>
                  <input
                    type="text"
                    onChange={nameHandler}
                    value={name}
                    className="input"
                  />
                  <Validation errMsg={name_error}></Validation>
                </div>

                <div
                  onClick={() => {
                    setMobileWasTouched(true);
                  }}
                  onBlur={() => {
                    mobileWasTouched &&
                      mobileNumber === "" &&
                      set_mobile_error("Please Enter a value");
                  }}
                >
                  <label>Mobile No.</label>
                  <br></br>
                  <input
                    type="text"
                    onChange={mobileNumberHandler}
                    value={mobileNumber}
                    className="input"
                  />
                  <Validation errMsg={mobile_error}></Validation>
                </div>
                <div
                  onClick={() => {
                    setAddrsWasTouched(true);
                  }}
                  onBlur={() => {
                    addrsWasTouched &&
                      address === "" &&
                      set_addrs_error("Please Enter a value");
                  }}
                >
                  <label>Address</label>
                  <br></br>
                  <textarea
                    type="text"
                    onChange={addressHandler}
                    value={address}
                  />
                </div>
                <Validation errMsg={addrs_error}></Validation>
                <div
                  onClick={() => {
                    setCityWasTouched(true);
                  }}
                  onBlur={() => {
                    cityWasTouched &&
                      city === "" &&
                      set_city_error("Please Enter a value");
                  }}
                >
                  <label>City</label>
                  <br></br>
                  <input
                    type="text"
                    onChange={cityHandler}
                    value={city}
                    className="input"
                  />
                </div>
                <Validation errMsg={city_error}></Validation>
                <div
                  onClick={() => {
                    setStatesWasTouched(true);
                  }}
                  onBlur={() => {
                    statesWasTouched &&
                      state === "" &&
                      set_states_error("Please Enter a value");
                  }}
                >
                  <label>State</label>
                  <br></br>
                  <input
                    type="text"
                    onChange={stateHandler}
                    value={state}
                    className="input"
                  />
                </div>
                <Validation errMsg={states_error}></Validation>
                <div
                  onClick={() => {
                    setZipWasTouched(true);
                  }}
                  onBlur={() => {
                    zipWasTouched &&
                      postalCode === "" &&
                      set_zip_error("Please Enter a value");
                  }}
                >
                  <label>Postal Code/Zip Code</label>
                  <br></br>
                  <input
                    type="text"
                    onChange={postalCodeHandler}
                    value={postalCode}
                    className="input"
                  />
                </div>
                <Validation errMsg={zip_error}></Validation>
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
                <button type="submit" className="save" disabled={!isFormValid}>
                  Save
                </button>
                <button type="reset" className="clear" onClick={clearForm}>
                  Clear
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
