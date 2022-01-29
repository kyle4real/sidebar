import React from "react";
import { Route, Switch } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import DiagramsPage from "./pages/DiagramsPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/statistics">
                <StatisticsPage />
            </Route>
            <Route exact path="/customers">
                <CustomersPage />
            </Route>
            <Route exact path="/diagrams">
                <DiagramsPage />
            </Route>
        </Switch>
    );
};

export default Routes;
