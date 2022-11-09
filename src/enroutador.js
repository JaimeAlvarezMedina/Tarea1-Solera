import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./PaginaPrincipal";



export default function App_Final() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="info" element={<InfoGroups />} />
            <Route path="pagina_principal" element={<PaginaPrincipal />} />
            <Route index element={<PaginaPrincipal />} />
            <Route path="/" element={<PaginaPrincipal />} >
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }