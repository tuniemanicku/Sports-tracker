import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from "./home/Home";
import GameSection from "./game-section/GameSection";
import League from "./league/League";
import Login from "./login/Login";
import Profile from "./profile/Profile";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/game-section" component={GameSection}/>
                <Route exact path="/league" component={League}/>
                <Route exact path="/login">
                    {localStorage.getItem("token") ? <Redirect to={"/profile"}/> : <Login/>}/></Route>
                <Route exact path="/profile">
                    {localStorage.getItem("token") ? <Profile/> : <Redirect to={"/login"}/>}/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;