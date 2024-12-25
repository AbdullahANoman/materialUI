import { Rating, Stack, styled } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const MuiRating = () => {
  const [value, setValue] = useState<null | number>(null);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  console.log(value);
  return (
    <Stack spacing={2}>
      <StyledRating
        value={value}
        precision={0.5}
        onChange={(_event, number) => {
          setValue(number);
        }}
        icon={<FavoriteIcon fontSize="large"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="large" />}
      />
      <Rating
        value={value}
        onChange={(_event, newNumber) => {
          setValue(newNumber);
        }}
        precision={0.5}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
