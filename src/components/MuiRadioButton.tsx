import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience group-label">
          Years of experience
        </FormLabel>
        <RadioGroup onChange={handleChange} value={value} row>
          <FormControlLabel value="0-2" control={<Radio size="small" />} label="0-2" />
          <FormControlLabel value="3-5" control={<Radio size="medium" />} label="3-5" />
          <FormControlLabel value="6-7" control={<Radio color="secondary"/>} label="6-10" />
        </RadioGroup>
        <FormHelperText>
            Invalid Number
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
