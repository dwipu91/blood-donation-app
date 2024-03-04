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
  const fromRrset = () => {
    setInput(initialState);
  };
  return { input, handelInputChange, fromRrset };
};

export default UseForm;
