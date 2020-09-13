import BookList from "../product/BooksList";
import Slider from "../banners/Slider";
import { Grid, Divider } from "@material-ui/core";

export default function HomePage(props) {
  return (
    <Grid direction="column" spacing={3} container>
      <Grid item xs={12}>
        <Slider />
      </Grid>
      <Grid item xs={12}>
        <BookList {...props} />
      </Grid>
    </Grid>
  );
}
