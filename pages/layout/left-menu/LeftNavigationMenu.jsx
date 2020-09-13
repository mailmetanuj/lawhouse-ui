import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Paper } from "@material-ui/core";
import { bookByCategory } from "../../../data/book-categories";
import MenuItem from "./MenuItem";
import fetch from "../../api/fetch";

const styles = (theme) => ({
  root: {
    height: "100%",
    minWidth: "250px",
    backgroundColor: theme.palette.grey[200],
    paddingLeft: theme.spacing(4),
    borderRight: "0.1em solid rgba(0,0,0,0.12)",
  },
  list: {
    padding: theme.spacing(2, 0, 0, 2),
  },
});

class LeftNavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }
  /*
 export static async getStaticProps(ctx) {
    let categories = [];
    fetch.get("category").then((res) => {
      console.log(res);
      categories = res.data.categories;
    });
    return { props: categories };
  }
*/
  componentDidMount() {
    fetch.get("category").then((res) => {
      console.log(res);
      this.setState({ categories: res.data.categories });
    });
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Paper elevation={2} className={classes.root}>
        <List component="nav" subheader="Categories" className={classes.list}>
          {bookByCategory.map((item) => {
            return <MenuItem item={item} key={item.id} />;
          })}
        </List>
        <Divider />
        {this.state.categories && (
          <List
            component="nav"
            subheader="book categories(by user)"
            className={classes.list}
          >
            {this.state.categories.map((item) => {
              return <MenuItem item={item} key={item.id} />;
            })}
          </List>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(LeftNavigationMenu);
