import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import PaginaInicial from "./paginas/paginaInicial";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="home" element={<PaginaInicial />} />
      </Routes>
    </div>
  );
}

export default App;
