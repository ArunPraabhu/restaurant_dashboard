import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Drawer, Toolbar } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" style={{ width: "240px" }}>
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/customers">
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button component={Link} to="/menu">
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
