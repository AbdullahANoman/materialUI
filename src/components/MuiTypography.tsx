import { Typography } from "@mui/material";

const MuiTypography = () => {
  const value = 1;
  console.log(value);

  return (
    <div className="text-center">
      {/* variant  */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2" gutterBottom>h2 Heading</Typography>
      <Typography variant="h3" component="h1" gutterBottom>h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      {/* suTitle  */}
      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>
      {/* body  */}
      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facilis nostrum autem asperiores perferendis repellat eum aspernatur unde nemo. Ducimus quo alias illo.</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit itaque praesentium, architecto repellat reiciendis maxime dolorem illum enim excepturi consequuntur labore minima debitis voluptatibus reprehenderit eaque ullam totam earum nemo culpa? Earum, at excepturi.</Typography>
    </div>
  );
};

export default MuiTypography;
