import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import ErrorMessage from "./components/ErrorMessage";
import GitHub from "./assets/GithubICON.png"; // Ensure the path is correct



function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGitHubUser = async (username) => {
    try {
      setError("");
      setUserData(null);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Not found");
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Blue gradient balls */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #005CFF 0%, rgba(0, 0, 0, 0) 100%)",
          transform: "translate(50%, -50%)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #005CFF 0%, rgba(0, 0, 0, 0) 100%)",
          transform: "translate(-50%, 50%)",
          zIndex: 0,
        }}
      />

      {/* Container preto */}
      <div className="bg-black w-[1156px] h-[537px] rounded-xl flex flex-col items-center p-10 gap-8 relative z-10">
        {/* Logo + título */}
        <div className="flex items-center gap-4">
          <img src={GitHub} alt="GitHub" className="w-12 h-12" />
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Perfil <span className="text-white-500">GitHub</span>
          </h1>
        </div>

        {/* Barra de busca */}
        <div className="w-[503px] h-[62px]">
          <SearchBar onSearch={fetchGitHubUser} />
        </div>

        {/* Caixa de resultado */}
        <div className="w-[804px] h-[257px] bg-[#000000] rounded-[25px] flex items-center justify-center p-6">
          {error && <ErrorMessage message={error} />}
          {userData && <UserCard userData={userData} />}
        </div>
      </div>
    </main>
  );
}

export default App;