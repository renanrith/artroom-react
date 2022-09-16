import { Route, Routes } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import CommentProvider from "./contexto/comment";

function App() {
  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
}

export default App;
