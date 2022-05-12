import '../styles/App.css';
import React from "react";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {

    return (
        <React.Fragment>
            <NavigationBar />
            <Sidebar/>
            <MainPage/>
        </React.Fragment>

    );
}