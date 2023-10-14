import React from 'react'
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from '../pages/Login';
import Layout from '../component/Layout';
import Project from '../pages/Project';
import Epic from '../pages/Epic';
import KanBan from '../pages/KanBan';


export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
                <Route path="/project" element={<Project />} />
                <Route path="/project/:id/kanban" element={<KanBan />} />
                <Route path="/project/:id/epic" element={<Epic />} />
            </Route>
        </Routes>
    )
}
