import React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button to="/home" color="inherit" component={NavLink}>
              MyApp
            </Button>

            <Button
              color="inherit"
              to="/students"
              component={NavLink}
              style={{ marginRight: "auto" }}
            >
              Students
            </Button>
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
            <Button color="inherit" component={NavLink} to="/register">
              Register
            </Button>
            <Button to="/logout" component={NavLink} color="inherit">
              Logout
            </Button>
            <IconButton aria-label="cart" component={NavLink} to="/cart">
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
