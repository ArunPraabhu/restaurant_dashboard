import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Menu from "./pages/Menu";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers" component={Customers} />
            <Route path="/menu" component={Menu} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
