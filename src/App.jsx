import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Landing, Destination, Detail, Country } from "./pages";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        // autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
        autoClose={5000}
      />
      <div className="bg-stone-700">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/continent/:continentName/" element={<Country />} />
          <Route
            path="/continent/:continentName/:countryName"
            element={<Destination />}
          />
          <Route
            path="/continent/:continentName/:countryName/:destinationName"
            element={<Detail />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
