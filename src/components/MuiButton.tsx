import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderLinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const [formatsSingle, setFormatsSingle] = useState<string | null>(null);

  const handleToggleButton = (
    _event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  const handleToggleButtonSingle = (
    _event: React.MouseEvent<HTMLElement>,
    newFormats: string | null
  ) => {
    setFormatsSingle(newFormats);
  };
  console.log(formats, formatsSingle);
  return (
    <Stack spacing={2}>
      <p>Regular Button</p>
      <Stack spacing={4} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <p>Button With Color</p>
      <Stack spacing={4} direction="row">
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
        <Button variant="text" color="error">
          Error Button
        </Button>
      </Stack>
      <p>Size Button</p>
      <Stack spacing={2} display={"block"} direction={"row"}>
        <Button size="large" variant="contained">
          Button1
        </Button>
        <Button size="medium" variant="contained">
          Button2
        </Button>
        <Button size="small" variant="contained">
          Button3
        </Button>
      </Stack>
      <Stack spacing={4} direction={"row"}>
        <Button
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
          disableRipple
          onClick={() => alert()}
        >
          Send
        </Button>
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton size="large" color="success">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* button group example  */}
      <Stack spacing={3} direction={"row"}>
        <ButtonGroup variant="outlined" disableFocusRipple>
          <Button onClick={() => alert("Left Clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* toggle button and toggleButtonGroup example  */}
      <Stack direction={"row"}>
        <ToggleButtonGroup value={formats} onChange={handleToggleButton}>
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underlined"} aria-label="underlined">
            <FormatUnderLinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {/* toggle button change one Single toggle  */}
      <Stack direction={"row"}>
        <ToggleButtonGroup
          size="small"
          value={formatsSingle}
          onChange={handleToggleButtonSingle}
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underlined"} aria-label="underlined">
            <FormatUnderLinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
