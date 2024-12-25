import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [state, setState] = useState(false);
  console.log(state);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch value={state} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiSwitch;
