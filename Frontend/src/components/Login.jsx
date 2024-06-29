import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true); // State to toggle between forms
  const navigate = useNavigate();

  const routeChangeToHomePage = () => {
    let path = "/home";
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

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm); // Toggle between registration and login forms
    setError(""); // Clear any existing error message when toggling forms
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup actions (e.g., send data to backend)
    setIsLoggedIn(true); // For demonstration, consider signup successful
    console.log("Signup data:", {
      username,
      password,
      age,
      gender,
      weight,
      height,
      dietaryPreferences,
      allergies,
      healthGoals,
    });
    routeChangeToHomePage();
  };

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [allergies, setAllergies] = useState("");
  const [healthGoals, setHealthGoals] = useState("");

  const handleAgeChange = (event) => {
    let value = event.target.value;
    if (value <= 90) {
      setAge(value);
    }
  };

  const handleWeightChange = (event) => {
    let value = event.target.value;
    // Validate weight (positive number)
    if (!isNaN(value) && value >= 0) {
      setWeight(value);
    }
  };

  const handleHeightChange = (event) => {
    let value = event.target.value;
    // Validate height (positive number)
    if (!isNaN(value) && value >= 0) {
      setHeight(value);
    }
  };

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
        {showLoginForm ? "Login" : "Sign Up"}
      </Typography>
      {showLoginForm ? (
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
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "10px" }}
            >
              {error}
            </Typography>
          )}
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Don't have an account?{" "}
            <Button variant="text" color="primary" onClick={handleToggleForm}>
              Sign Up
            </Button>
          </Typography>
        </form>
      ) : (
        <form onSubmit={handleSignup} style={{ width: "100%" }}>
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
          <TextField
            type="number"
            label="Age"
            variant="outlined"
            value={age}
            onChange={handleAgeChange}
            fullWidth
            required
            InputProps={{ inputProps: { min: 0, max: 90 } }}
            margin="normal"
          />
          <FormControl component="fieldset" margin="normal" fullWidth required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            type="number"
            label="Weight (kg)"
            variant="outlined"
            value={weight}
            onChange={handleWeightChange}
            fullWidth
            required
            InputProps={{ inputProps: { min: 0 } }}
            margin="normal"
          />
          <TextField
            type="number"
            label="Height (cm)"
            variant="outlined"
            value={height}
            onChange={handleHeightChange}
            fullWidth
            required
            InputProps={{ inputProps: { min: 0 } }}
            margin="normal"
          />
          <FormControl component="fieldset" margin="normal" fullWidth required>
            <FormLabel component="legend">Dietary Preferences</FormLabel>
            <RadioGroup
              aria-label="dietary preferences"
              name="dietaryPreferences"
              value={dietaryPreferences}
              onChange={(e) => setDietaryPreferences(e.target.value)}
            >
              <FormControlLabel
                value="veg"
                control={<Radio />}
                label="Vegetarian"
              />
              <FormControlLabel
                value="non-veg"
                control={<Radio />}
                label="Non-Vegetarian"
              />
              <FormControlLabel
                value="vegan"
                control={<Radio />}
                label="Vegan"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Allergies"
            variant="outlined"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            fullWidth
            margin="normal"
          />
          <FormControl component="fieldset" margin="normal" fullWidth required>
            <FormLabel component="legend">Health Goals</FormLabel>
            <RadioGroup
              aria-label="health goals"
              name="healthGoals"
              value={healthGoals}
              onChange={(e) => setHealthGoals(e.target.value)}
            >
              <FormControlLabel
                value="weight-loss"
                control={<Radio />}
                label="Weight Loss"
              />
              <FormControlLabel
                value="weight-gain"
                control={<Radio />}
                label="Weight Gain"
              />
              <FormControlLabel
                value="weight-maintain"
                control={<Radio />}
                label="Weight Maintain"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Already have an account?{" "}
            <Button variant="text" color="primary" onClick={handleToggleForm}>
              Sign In
            </Button>
          </Typography>
        </form>
      )}
    </Box>
  );
};

export default Login;
