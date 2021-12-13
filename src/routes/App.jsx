import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
// import '../styles/global.scss';

import Home from '../pages/Home';
import Save from '../pages/Save';
import NotFound from '../pages/NotFound'


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/save" element={<Save />} />
                </Routes>
            </Layout>
        </BrowserRouter>


    );
}

export default App; 
