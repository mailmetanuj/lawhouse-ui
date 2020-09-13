import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Paper, Container, Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import AddToCartButton from "../buttons/AddToCartButton";
import BuyNowButton from "../buttons/BuyNowButton";

export default function BookDetails(props) {
  const images = ["/Diary.jpg", "/Diary.jpg", "/Diary.jpg"];
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Carousel
          navButtonsAlwaysVisible={false}
          indicators={true}
          autoPlay={false}
        >
          {images.map((item) => {
            return (
              <Paper
                key={item}
                style={{ height: "320px", paddingLeft: "100px" }}
              >
                <img style={{ height: "320px", width: "200px" }} src={item} />
              </Paper>
            );
          })}
        </Carousel>
      </Grid>
      <Grid item>
        <Container>
          <Typography variant="h5">{props.id}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Publisher: ABC <br />
            Edition: 2020 <br />
            Price: 230/-
          </Typography>
          <AddToCartButton />
          <BuyNowButton />
        </Container>
      </Grid>
    </Grid>
  );
}

function BookImage() {}
