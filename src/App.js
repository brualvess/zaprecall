import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from './Inicio'
import Tela2 from './Tela2'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/perguntas' element={<Tela2 />} />
            </Routes >
        </BrowserRouter>
    )
}