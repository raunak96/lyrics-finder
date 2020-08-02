import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/Index";
import ContextProvider from "./contexts/ContextProvider";
import Lyrics from "./components/tracks/Lyrics";
const App = () => {
    return (
        <ContextProvider>
            <Router basename={process.env.PUBLIC_URL}>  {/* Use this URL as base URL */}
                <Fragment>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/lyrics/track/:id" component={Lyrics} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </ContextProvider>
    );
};

export default App;
