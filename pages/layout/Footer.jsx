import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SocialMediaIcons from "../social-media/SocialMediaIcons";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    color: "white",
    padding: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        Law House. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        Law House {new Date().getFullYear()}
      </Typography>
      <SocialMediaIcons />
    </footer>
  );
}
