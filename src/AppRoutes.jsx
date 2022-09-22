import React, { useContext } from 'react';

import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import PaginaInicial from "./paginas/paginaInicial";
import Perfil from "./paginas/perfil";
import PaginaLogin from "./paginas/paginaLogin";
import MarketPlace from './paginas/marketPlace';
import CommentProvider from './contexto/comment';

const AppRoutes = () => {
    return(
        <> 
            <Routes>
                <Route exact path="/" element={<PaginaLogin/>}/>
                <Route exact path="/perfil" element={<Perfil/>}/>
                <Route exact path="/home" element={ <CommentProvider><PaginaInicial/></CommentProvider> }/>
                <Route path='/marketplace' element={<MarketPlace/>}/>
            </Routes>
        </>
    )
}

export default AppRoutes;
