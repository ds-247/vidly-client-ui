import * as React from "react";
import UserOptions from "./UserOptions";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Typography,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomIcon from "../assets/VD icon (3).jpg";
import "../componentStyle/navbar.css";
import auth from "./../services/authService";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const user = auth.getCurrentUser();

  const pages = [
    { label: "Home", to: "/home" },
    { label: "All Movies", to: "/movies" },
    { label: "Orders", to: "/orders", condition: user },
    { label: "Login", to: "/login", condition: !user },
    { label: "Register", to: "/register", condition: !user },
  ];

  const settings = [
    { label: user ? user.name : "", to: "/me", condition: user },
    { label: "Logout", to: "/logout", condition: user },
  ];

  // see above two conditions and settings array from admin pannel

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="custom_icon" src={CustomIcon} alt="Icon"></img>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "McLaren",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VIDLY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <NavLink
                  key={`nav-link-${index}`}
                  className="nav-page"
                  aria-current="page"
                  to={page.to}
                >
                  <MenuItem
                    key={`menu-item-${index}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "McLaren",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VIDLY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((link, index) =>
              link?.condition === undefined || link.condition ? (
                <NavLink
                  key={index}
                  className="nav-link"
                  aria-current="page"
                  to={link.to}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {link.label}
                  </Button>
                </NavLink>
              ) : null
            )}
          </Box>
          {user && <UserOptions user={user} settings={settings} />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
