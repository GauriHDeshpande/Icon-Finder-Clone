import React from "react";
import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import cors from 'cors';

App.use(cors());

function App(){
    return(
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;