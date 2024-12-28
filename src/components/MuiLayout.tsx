import { Box } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "200px",
          height: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "secondary.light",
            color: "green",
          },
        }}
      >
        Codevolition
      </Box>
      <Box width="200px" height="100px" display={"flex"} bgcolor="success.light" ></Box>
    </>
  );
};

export default MuiLayout;
