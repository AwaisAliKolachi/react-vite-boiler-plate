import useHome from "./useHome";
import "./Home.css";
import { Icons } from "@src/assets";

export default function Home() {
  const { theme, isDark, toggleTheme, toggleLanguage, t, handleLogin } =
    useHome();

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${isDark ? "bg-gray-800" : "bg-white"}`}
    >
      <div className={`w-80 grid grid-cols-1 gap-4 text-center p-8 rounded-lg shadow-lg ${isDark ? "bg-white" : "bg-gray-100"}`}>
        <h1
          className={`text-4xl font-bold ${isDark ? "text-gray-600" : "text-blue-600"}`}
        >
          {t("welcome")}
        </h1>
        <div className="flex items-center justify-center m-2">
          <img
            className="h-12 w-auto hover:animate-spin"
            src={Icons.ReactIcon}
            alt="Logo"
          />
        </div>
        <p className="text-2xl text-blue-500 mt-4 hover:text-blue-600">
          Theme: {theme.toUpperCase()}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => toggleTheme()}
        >
          Toggle Theme
        </button>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={toggleLanguage}
        >
          {t("changeLanguage")}
        </button>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
