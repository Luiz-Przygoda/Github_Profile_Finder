import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-[#D9D9D9] mt-10 p-4 w-[95%] md:w-[70%] 2xl:w-[45%] h-auto font-nunito text-red-600 text-center m-auto rounded-3xl flex items-center justify-center">
      <p className="text-base md:text-lg 2xl:text-xl font-normal leading-6">
        {message}
      </p>
    </div>
  );
};

export default ErrorMessage;
