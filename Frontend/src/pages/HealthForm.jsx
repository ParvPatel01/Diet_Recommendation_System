import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";

const FormComponent = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log({
      age,
      gender,
      weight,
      height,
      dietaryPreferences,
      allergies,
      healthGoals,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 600, margin: "auto", padding: 20 }}
    >
      <Typography variant="h5" gutterBottom>
        User Details
      </Typography>

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
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
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
          <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
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

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
