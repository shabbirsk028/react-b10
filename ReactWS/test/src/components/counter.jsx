import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const handleIncrement = () => {
    setCount(count + parseInt(stepValue));
  };

  const handleDecrement = () => {
    setCount(count - parseInt(stepValue));
  };

  const handleChange = (event) => {
    setStepValue(event.target.value);
  };
  return (
    <div>
      <Typography data-testid="title">Counter Page</Typography>
      <Box>
        <Button variant="contained" onClick={handleDecrement}>
          Decrement
        </Button>
        <h5 data-testid="counter">{count}</h5>
        <Button
          variant="contained"
          data-testid="increment"
          onClick={handleIncrement}
        >
          Increment
        </Button>
      </Box>
      <form>
        <TextField
          id="standard-basic"
          label="Enter step value"
          type="number"
          value={stepValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Counter;
