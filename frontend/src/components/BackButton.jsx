import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page in the history stack
  };

  return (
    <button
      onClick={handleBack}
      className= "mt-2 ml-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded shadow"
    >
      Go Back
    </button>
  );
};

export default BackButton;
