import React, { useRef, useState } from "react";
import { validation } from "../utils/validation ";
import { useDispatch } from "react-redux";
import { addFile, addGender, addHobbies, addInfo } from "../utils/userSlice";
import { Link } from "react-router-dom";

function Registration() {
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false)
  const [hobbies, setHobbies] = useState([]);
  const [gender, setGender] = useState(null);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
  });

  const handleChange = (event) => {
    if (event.target.checked) {
      setHobbies([...hobbies, event.target.name]);
    } else {
    }
  };

  const onOptionChange = (e) => {
    setGender(e.target.value);
  };
  console.log(gender);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files);
    }
  };
  console.log(file);

  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);
  let phone = useRef(null);

  const setUserInfo = () => {
    setInfo({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
    });
  };
  console.log(info);

  let dispatch = useDispatch();

 function handleClick (){
  dispatch(addInfo(info));
  dispatch(addHobbies(hobbies));
  dispatch(addGender(gender));
  dispatch(addFile(file));
 }

  const handleError = () => {
    const message = setError(
      validation(
        email.current.value,
        password.current.value,
        phone.current.value
      )
    );

    console.log(message);
    if (message) return;
  };

  console.log(info);
  return (
    
   <>
    {
      !error && show && <Link to='/home'><h1 className={`text-white text-right mt-20 mr-32 font-bold`}>Profile</h1></Link>
    }

   <div className="flex flex-col w-80 m-auto mt-32 bg-slate-800 p-8 rounded-md">
      <form id="form" onSubmit={(e) =>{ e.preventDefault();
      handleError();
      setUserInfo();
      setShow(true);
      
      }} className="">
        <input
          ref={name}
          className="w-full p-2 mb-2 rounded-md"
          type="text"
          placeholder="Name"
        />
        <input
          ref={email}
          className="w-full p-2 mb-2 rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="w-full p-2 mb-2 rounded-md"
          type="password"
          placeholder="Password"
        />
        <input
          ref={phone}
          className="w-full p-2 mb-2 rounded-md"
          type="number"
          placeholder="Phone no."
        />
        <fieldset>
          <legend className="text-white font-bold">Hobbies</legend>
          <label htmlFor="subscribe" className="text-white  font-semibold">
            <input
              className="mr-2"
              type="checkbox"
              value={hobbies}
              onChange={handleChange}
              id="1"
              name="music"
            />
            Music
          </label>

          <label htmlFor="subscribe" className="text-white  font-semibold">
            <input
              className="mr-2 ml-2"
              type="checkbox"
              value={hobbies}
              onChange={handleChange}
              id="2"
              name="cooking"
            />
            Cooking
          </label>
          <label htmlFor="subscribe" className="text-white  font-semibold">
            <input
              className="mr-2 ml-2"
              type="checkbox"
              value={hobbies}
              onChange={handleChange}
              id="3"
              name="Cricket"
            />
            Cricket
          </label>
        </fieldset>

        <h1 className="text-white font-bold mt-2">Gender</h1>

        <div className="flex">
          <input
            type="radio"
            name="men"
            value="men"
            id="regular"
            checked={gender === "male"}
            onChange={onOptionChange}
          />
          <label htmlFor="regular" className="text-white ">
            Male
          </label>

          <input
            type="radio"
            name="female"
            value="female"
            id="medium"
            checked={gender === "female"}
            onChange={onOptionChange}
          />
          <label htmlFor="medium" className="text-white ">
            Female
          </label>

          <input
            type="radio"
            name="other"
            value="other"
            id="large"
            checked={gender === "other"}
            onChange={onOptionChange}
          />
          <label htmlFor="large" className="text-white ">
            Other
          </label>
        </div>

        <input
          className="text-white mt-3"
          id="file"
          type="file"
          onChange={handleFileChange}
        />

        <p className="text-red-500 font-bold mt-2">{error}</p>

      <button onClick={handleClick()} className="p-2 bg-blue-500 text-white font-bold w-full mt-5">
          Submit
        </button>
      </form>
    </div>
   </> 
  );
}

export default Registration;
