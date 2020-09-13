import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import UserActionControls from "../../user/UserActionControls";
import LogoIcon from "@material-ui/icons/Book";
import TopMenuBar from "./TopMenuBar";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    padding: theme.spacing(1, 4, 1, 4),
    height: theme.spacing(20),
  },
  apptitle: {
    display: "none",
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  menuBar: {
    flexGrow: 1,
    marginLeft: theme.spacing(8),
  },
  rightSideControls: {
    position: "relative",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
});

class TopAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this.clickHandler);
  }

  clickHandler() {
    this.props.showDialog(DialogTypes.USER_LOGIN);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <LogoIcon className={classes.logo} />
            <Typography className={classes.apptitle} variant="h5">
              Law House
            </Typography>
            <div className={classes.menuBar}>
              <TopMenuBar navigate={this.props.navigate} />
            </div>
            <div className={classes.rightSideControls}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
            <UserActionControls />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(TopAppBar);
/*
const mapDispatchToProps = (dispatch) => ({
  showLoginDialog(dialogType) {
    return () => {
      dispatch(openDialog(dialogType));
    };
  },
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(useStyles)(TopAppBar));*/
