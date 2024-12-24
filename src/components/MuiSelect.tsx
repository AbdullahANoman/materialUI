import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };
  console.log({country});
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        fullWidth
        onChange={handleChange}
      >
        <MenuItem value="BA">Bangladesh</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="AS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
