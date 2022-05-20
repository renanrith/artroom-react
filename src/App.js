import { Route, Routes } from "react-router-dom";
import PaginaInicial from "./paginas/paginaInicial";
import PaginaLogin from "./paginas/paginaLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<PaginaInicial />} />
        <Route path="/" element={<PaginaLogin />} />
      </Routes>
    </div>
  );
}

export default App;
