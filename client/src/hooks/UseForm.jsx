import { useState } from "react";

const UseForm = (initialState) => {
  //state init
  const [input, setInput] = useState(initialState);

  //on change
  const handelInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //from reset
  const formReset = () => {
    setInput(initialState);
  };
  return { input, handelInputChange, formReset };
};

export default UseForm;
