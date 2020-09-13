import Carousal from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World! 2",
  },
  {
    name: "Random Name #3",
    description: "Hello World! 3",
  },
  {
    name: "Random Name #4",
    description: "Hello World! 4",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(4),
    height: theme.spacing(40),
    background: theme.palette.grey[200],
  },
}));

export default function Slider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousal
        navButtonsAlwaysVisible={false}
        indicators={true}
        autoPlay={true}
        animation="fade"
      >
        {items.map((item, index) => (
          <Item key={index} item={item} className={classes.paper} />
        ))}
      </Carousal>
    </div>
  );
}

function Item(props) {
  return (
    <Paper className={props.className}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
