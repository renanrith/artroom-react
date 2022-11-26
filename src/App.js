import { StrictMode } from "react";
import { Route, Routes } from "react-router-dom";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="app">
      <StrictMode>
      <AppRoutes />
      </StrictMode>
    </div>
  );
}

export default App;
