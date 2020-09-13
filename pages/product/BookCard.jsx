import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { Pages } from "../navigation/Pages";
import AddToCartButton from "../buttons/AddToCartButton";
import BuyNowButton from "../buttons/BuyNowButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(2, 1, 0, 1),
  },
  image: {
    height: "180px",
    width: "120px",
    margin: "auto",
  },
  addToCartBtn: {
    marginLeft: theme.spacing(2),
    width: "50%",
    float: "left",
    marginBotton: theme.spacing(1),
  },
  buyNowBtn: {
    marginRight: theme.spacing(1),
    float: "right",
    marginBottom: theme.spacing(1),
  },
}));

export default function BookCard(props) {
  const classes = useStyles();
  return (
    <Card elevation={1} className={classes.root}>
      <CardActionArea
        className={classes.content}
        onClick={() =>
          props.navigate(Pages.BOOK_DETAILS, {
            id: props.title,
          })
        }
      >
        <CardMedia
          image="/Diary.jpg"
          title="demo book"
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Surbhi Wadhwa
          </Typography>
          <Typography variant="body1">
            <strike>₹ 250</strike> ₹ 230
          </Typography>
        </CardContent>
      </CardActionArea>

      <div className={classes.addToCartBtn}>
        <AddToCartButton />
      </div>
      <div className={classes.buyNowBtn}>
        <BuyNowButton />
      </div>
    </Card>
  );
}
