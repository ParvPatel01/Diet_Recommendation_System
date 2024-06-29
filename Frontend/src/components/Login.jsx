import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const routeChangeToHomePage = () => {
    let path = `/home`;
    navigate(path, { replace: true });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      // Perform login actions (e.g., redirect, store token, etc.)
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  if (isLoggedIn) {
    console.log("User logged in successfully");
    routeChangeToHomePage();
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#F0F7F4",
        borderRadius: "10px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ color: "#597445", marginBottom: "20px" }}>
        Login
      </Typography>
      <form onSubmit={handleLogin} style={{ width: "100%" }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#597445",
            color: "white",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#729762",
            },
          }}
        >
          Login
        </Button>
        {error && (
          <Typography variant="body2" sx={{ color: "red", marginTop: "10px" }}>
            {error}
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default Login;
