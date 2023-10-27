import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Cards.module.css";
import ellipse from "../../assests/Ellipse.png";
import gift from "../../assests/gift.png";

const card = (
  <React.Fragment>
    <div className={styles.head}>
      <div className={styles.parent}>
        <div className={styles.circle}>
          <img src={ellipse} alt="circle" width={101} height={101} />
        </div>
        <div className={styles.gift}>
          <img src={gift} alt="gift" width={62} height={62} />
        </div>
      </div>

      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
          98% Success Rate
        </Typography>

        <Typography className={styles.body2}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
      <CardActions>
        <Button class={styles.small}>Read More</Button>
      </CardActions>
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
