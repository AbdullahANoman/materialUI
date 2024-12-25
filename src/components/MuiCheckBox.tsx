import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const MuiCheckBox = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [state, setState] = useState<boolean>(false);

  //   console.log({ skills });
  //   console.log({ state });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.checked);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e?.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e?.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={<Checkbox checked={state} onChange={handleChange} />}
          label="Accept the terms and condition"
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={state}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={
                <Checkbox
                  value={"javascript"}
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>I love coding</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
