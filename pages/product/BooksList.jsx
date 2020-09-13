import {
  GridList,
  GridListTile,
  Paper,
  makeStyles,
  Container,
} from "@material-ui/core";
import BookCard from "../product/BookCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function BookList(props) {
  const classes = useStyles();
  return (
    <Container variant="outlined" className={classes.root}>
      <GridList cellHeight="auto" cols={5}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (tile) => (
            <GridListTile key={tile} cols={1}>
              <BookCard
                navigate={props.navigate}
                title={`Madhya Pradesh (M.P.) Land Revenue Code, 1959 ${tile}`}
              />
            </GridListTile>
          )
        )}
      </GridList>
    </Container>
  );
}
