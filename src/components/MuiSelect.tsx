import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[] | string>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleCountriesValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCountries(typeof value == "string" ? value.split(",") : value);
  };

  console.log({ countries, country });
  return (
    <Box width="500px">
      <Stack spacing={4} direction={"row"}>
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
        {/* multiple countries selection  */}
        <TextField
          label="Select Country"
          select
          value={countries}
          fullWidth
          onChange={handleCountriesValueChange}
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="Please select your country "
        >
          <MenuItem value="SW">Sweden</MenuItem>
          <MenuItem value="NP">Nepal</MenuItem>
          <MenuItem value="UAE">Dubai</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
};

export default MuiSelect;
