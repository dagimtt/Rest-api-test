import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListLetters from "./pages/ListLetters";
import CreateLetter from "./pages/CreateLetter";
import EditLetter from "./pages/EditLetter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListLetters />} />
        <Route path="/create" element={<CreateLetter />} />
        <Route path="/edit/:id" element={<EditLetter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
