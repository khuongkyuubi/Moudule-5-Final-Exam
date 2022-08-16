import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AddOrUpdate from "./components/AddOrUpdate";
import Edit from "./components/Edit";
import ConfirmDelete from "./components/ConfirmDelete";
import Detail from "./components/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/products/update/:id"} element={<Edit/>}/>
                <Route path={"/products/delete/:id"} element={<ConfirmDelete/>}/>
                <Route path={"/products/delete/:id"} element={<ConfirmDelete/>}/>
                <Route path={"/products/detail/:id"} element={<Detail/>}/>
                <Route path={"/products/:id"} element={<Edit/>}/>
            </Routes>

        </BrowserRouter>

    );
}

export default App;
