import { AppBar, styled, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = styled(AppBar)({
  background: "#111111",
});
const Tabs = styled(Link)({
  fontSize: "20px",
  marginRight: "20px",
  color: "inherit",
  textDecoration: "none",
});

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Code for interview</Tabs>
        <Tabs to="all">All users</Tabs>
        <Tabs to="add">Add user</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
