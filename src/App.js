import { Route, Routes } from "react-router-dom";
import PaginaInicial from "./paginas/paginaInicial";

function App() {
  return (
    <div>
      <Routes>
      <Route path="home" element={<PaginaInicial />} />
      </Routes>
    </div>
  );
}

export default App;
