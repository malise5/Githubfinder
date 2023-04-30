import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
        </div>
    );
}

export default App;
