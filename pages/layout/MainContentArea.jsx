import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Pages } from "../navigation/Pages";
import BookDetails from "../product/BookDetails";
import HomePage from "../navigation/HomePage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "auto",
  },
  mainArea: {
    padding: theme.spacing(2),
    minHeight: 500,
  },
}));

export default function MainContentArea(props) {
  const classes = useStyles();
  let pageComponent = <></>;

  switch (
    props.navigationState ? props.navigationState.currentPage : Pages.HOME
  ) {
    case Pages.HOME:
      pageComponent = <HomePage navigate={props.navigate} />;
      break;
    case Pages.BOOK_DETAILS:
      pageComponent = <BookDetails {...props.navigationState.pageProps} />;
      break;
    default:
      pageComponent = <div>Some error occurred</div>;
  }

  return (
    <Container className={classes.mainArea}>
      <div className={classes.root}>{pageComponent}</div>
    </Container>
  );
}
