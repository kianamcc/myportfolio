import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const pages = ["Home", "About", "Projects", "Contact"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#c6def1",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img src={logo} alt="logo" className="logo-img" />
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#696969"
            >
              <MenuIcon fontSize="large" />
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
              MenuListProps={{
                sx: {
                  padding: "8px 50px",
                  backgroundColor: "#c6def1",
                  border: "2px solid #FFFF",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {page === "Projects" ? (
                      <Link
                        className="mobile-nav-link"
                        to={page}
                        spy={true}
                        smooth={true}
                        onClick={handleCloseNavMenu}
                        offset={-120}
                      >
                        {page}
                      </Link>
                    ) : (
                      <Link
                        className="mobile-nav-link"
                        to={page}
                        spy={true}
                        offset={-69}
                        smooth={true}
                        onClick={handleCloseNavMenu}
                      >
                        {page}
                      </Link>
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2, flexGrow: 1 }}>
            <img src={logo} alt="logo" className="logo-img" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
              gap: "25px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#696969",
                  display: "block",
                  height: "100%",
                  letterSpacing: "1.5px",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                {page === "Projects" ? (
                  <Link
                    className="nav-link"
                    to={page}
                    spy={true}
                    smooth={true}
                    onClick={handleCloseNavMenu}
                    offset={-150}
                  >
                    {page}
                  </Link>
                ) : (
                  <Link
                    className="nav-link"
                    to={page}
                    spy={true}
                    offset={-100}
                    smooth={true}
                    onClick={handleCloseNavMenu}
                  >
                    {page}
                  </Link>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
