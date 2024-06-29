import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

const BMIInputCard = () => {
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [bmi, setBMI] = React.useState('');

    const calculateBMI = () => {
        if (weight === '' || height === '') {
            return;
        }
        const bmi = weight / (height * height);
        setBMI(bmi);
    }

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    }

    const handleHeightChange = (event) => {
        setHeight(event.target.value / 100);
    }

    return (
        <Box sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card variant="outlined">
                <CardContent sx={{ width: '60vw' }}>
                    <Typography variant="h5" component="div">
                        BMI Calculator
                    </Typography>
                    <Typography variant="body2">
                        Calculate your BMI using the form below.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Typography variant="body2">
                            <strong>Weight:</strong>
                        </Typography>
                        <FormControl variant="standard" sx={{ m: 1, width: '25ch' }}>
                            <Input onChange={handleWeightChange}
                                id="standard-adornment-weight"
                                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Typography variant="body2">
                            <strong>Height:</strong>
                        </Typography>
                        <FormControl variant="standard" sx={{ m: 1, width: '25ch' }}>
                            <Input onChange={handleHeightChange}
                                id="standard-adornment-weight"
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'heigth',
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Typography variant="h6">
                        <strong>Result:</strong> {Number.parseFloat(bmi).toFixed(2).toString()}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button variant='outlined' onClick={calculateBMI} size="small">Calculate BMI</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default BMIInputCard;