import TopAppBar from "./top-menu/TopAppBar";
import LeftNavigationMenu from "./left-menu/LeftNavigationMenu";
import Footer from "./Footer";
import MainContentArea from "./MainContentArea";
import { Grid } from "@material-ui/core";
import { Pages } from "../navigation/Pages";

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: { currentPage: Pages.HOME, pageProps: props },
      user: { userLoggedIn: false },
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate(page, props) {
    this.setState({ navigation: { currentPage: page, pageProps: props } });
  }

  render() {
    return (
      <>
        <TopAppBar navigate={this.navigate} />
        <div style={{ flexGrow: 1 }}>
          <Grid direction="row" spacing={3} container>
            <Grid item xs={2}>
              <LeftNavigationMenu />
            </Grid>
            <Grid item xs={10}>
              <MainContentArea
                navigationState={this.state.navigation}
                navigate={this.navigate}
              />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </>
    );
  }
}
