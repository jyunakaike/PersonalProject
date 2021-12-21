import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@components/Layout";
// import '../styles/global.scss';

import Home from '@pages/Home';
import Finance from '@pages/Finance'
import ToDo from "@pages/ToDo";
import Save from '@pages/Save';
import NotFound from '@pages/NotFound';
import '@styles/global.scss';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/finance" element={<Finance/>} />
                    <Route exact path="/todo" element={<ToDo />} />
                    <Route exact path="/save" element={<Save />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>


    );
}

export default App; 
