import { Route, Routes } from "react-router-dom";
import MainNavigation from "../../components/layout/MainNavigation";
import PaginaLogin from "../paginaLogin";

export default function PaginasRouter() {
    return( 
    <>
    <MainNavigation/>
  <Routes>
    <Route path="/" element={<PaginaLogin />} />
  </Routes>;
  </>
    );
}
