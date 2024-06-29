import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";

const BMIInputCard = () => {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [bmi, setBMI] = React.useState("");
  const [error, setError] = React.useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setError("Please enter both weight and height.");
      return;
    }
    if (weight > 200 || weight < 20) {
      setError("Weight cannot be more than 200 kg or less than 20 kg");
      return;
    }
    if (height > 274.32 || height < 91.44) {
      setError("Height cannot be more than 9 feet or less than 3 feet");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
    setError(""); // Clear error message
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        "@media (max-width: 600px)": {
          padding: "10px",
        },
      }}
    >
      <Card variant="outlined" sx={{ width: "100%", maxWidth: "600px" }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ color: "#597445" }}>
            BMI Calculator
          </Typography>
          <Typography variant="body2" sx={{ color: "#597445" }}>
            Calculate your BMI using the form below.
          </Typography>
          {error && (
            <Typography variant="body2" sx={{ color: "red", mt: 1 }}>
              {error}
            </Typography>
          )}
          <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
            <Typography variant="body2" sx={{ color: "#597445", mr: 1 }}>
              <strong>Weight:</strong>
            </Typography>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Input
                onChange={handleWeightChange}
                endAdornment={
                  <InputAdornment position="end">kg</InputAdornment>
                }
                aria-label="weight"
                type="number"
                sx={{
                  backgroundColor: "#F0F7F4",
                  "&.Mui-focused": {
                    backgroundColor: "#E7F0DC",
                  },
                  "& .MuiInputAdornment-root": {
                    color: "#597445",
                  },
                  "& input": {
                    color: "#597445",
                  },
                }}
              />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
            <Typography variant="body2" sx={{ color: "#597445", mr: 1 }}>
              <strong>Height:</strong>
            </Typography>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <Input
                onChange={handleHeightChange}
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
                aria-label="height"
                type="number"
                sx={{
                  backgroundColor: "#F0F7F4",
                  "&.Mui-focused": {
                    backgroundColor: "#E7F0DC",
                  },
                  "& .MuiInputAdornment-root": {
                    color: "#597445",
                  },
                  "& input": {
                    color: "#597445",
                  },
                }}
              />
            </FormControl>
          </Box>
          <Typography variant="h6" sx={{ color: "#597445" }}>
            <strong>Result:</strong>{" "}
            {bmi ? Number.parseFloat(bmi).toFixed(2).toString() : ""}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "center", backgroundColor: "#E7F0DC" }}
        >
          <Button
            variant="contained"
            onClick={calculateBMI}
            size="large"
            sx={{
              backgroundColor: "#597445",
              color: "white",
              "&:hover": {
                backgroundColor: "#E7F0DC",
                color: "#597445",
              },
            }}
          >
            Calculate BMI
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BMIInputCard;
