import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4} direction={"column"}>
      <Stack spacing={2} direction={"row"}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Small Secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          helperText="Do not share your password anyone "
        />
        <TextField label="Father's Name" variant="outlined" required />
        <TextField
          label="Mother's Name"
          variant="outlined"
          inputProps={{ readOnly: true }}
        />
        <TextField
          label="CheckState"
          variant="outlined"
          required
          onChange={(e) => {
            setValue(e.target.value);
          }}
          error={!value}
          helperText={!value ? "Error" : "Do not share anyone"}
        />
      </Stack>

      {/* inputAdornment use  */}
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Weight"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        />
        <TextField
          label="Price"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
          type="number"
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
