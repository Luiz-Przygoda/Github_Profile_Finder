import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full h-full">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite um usuário do Github"
        className="w-full h-full rounded-md pl-4 pr-16 text-black text-base shadow focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="absolute top-0 right-0 h-full w-14 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center rounded-r-md"
      >
        <FaSearch className="text-white text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
