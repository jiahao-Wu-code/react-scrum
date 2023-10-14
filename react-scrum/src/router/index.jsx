import React from 'react'
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from '../pages/Login';
import Layout from '../component/Layout';
import Project from '../pages/Project';


export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
                <Route path="/project" element={<Project />} />
            </Route>
        </Routes>
    )
}
