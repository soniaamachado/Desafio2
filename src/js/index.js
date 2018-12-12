import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Detail from "./components/Detail";


render(

    <Provider store={store}>
        <Router>
            <div>
                <Nav/>
            <Switch>
                <div className='container'>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/app' component={App}/>
                    <Route exact path='/users' component={Users}/>
                    <Route exact path='/detail/:id' component={Detail}/>

                </div>
            </Switch>
            </div>
        </Router>
    </Provider>, document.getElementById("app")
);