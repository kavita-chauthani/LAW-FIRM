import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import first from "../../assests/first.png";
import second from "../../assests/second.png";
import third from "../../assests/third.png";
import fourth from "../../assests/fourth.png";
import fifth from "../../assests/fifth.png";
import sixth from "../../assests/sixth.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <img src={second} alt="second" width={752} height={342} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={first} alt="first" width={358} height={342} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={third} alt="third" width={358} height={342} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <img src={fourth} alt="fouth" width={752} height={342} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <img src={fifth} alt="fifth" width={752} height={342} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={sixth} alt="sixth" width={358} height={342} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
