import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./ClientCard.module.css";
import one from "../../assests/one.png";

const card = (
  <React.Fragment>
    <div className={styles.head}>
      <div className={styles.circle}>
        <img src={one} alt="circle" width={101} height={101} />
      </div>

      <CardContent>
        <Typography
          className={styles.main}
          sx={{ fontSize: 14 }}
          color="white"
          gutterBottom
        >
          Jane Cooper
        </Typography>

        <Typography
          className={styles.sub}
          sx={{ fontSize: 14 }}
          color="white"
          gutterBottom
        >
          Ceo of hunt
        </Typography>

        <Typography className={styles.body2}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
    </div>
  </React.Fragment>
);
export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: "500" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
