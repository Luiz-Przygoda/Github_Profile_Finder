import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="mt-10 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] bg-[#D9D9D9] text-black rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center mx-auto animate-fade-in">
      <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] border-[3px] border-blue-600 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={userData.avatar_url}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
          {userData.name || userData.login}
        </h2>
        <p className="text-sm md:text-base text-gray-800">
          {userData.bio || "Este usuário não possui biografia."}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
