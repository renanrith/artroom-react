import React, { useContext } from 'react';

import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import PaginaInicial from "./paginas/paginaInicial";
import PaginaLogin from "./paginas/paginaLogin";

import { AuthProvider, AuthContext } from './contexto/auth';

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){

            return <Navigate to="/home"/>;
        }

        if(!authenticated){
            return <Navigate to="/" />;
        }
        return children;
    }

    return(
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<PaginaLogin/>}/>
                <Route exact path="/home" element={<Private><PaginaInicial/></Private>}/>
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes;
