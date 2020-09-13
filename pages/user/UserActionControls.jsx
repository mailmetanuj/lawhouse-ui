import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import DialogManager, { DialogTypes } from "../dialogs/DialogManager";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    margin: theme.spacing(0, 1),
  },
}));

export default function UserActionControls() {
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(DialogTypes.USER_LOGIN);

  const onLoginClick = () => {
    setDialogType(DialogTypes.USER_LOGIN);
    openDialog();
  };

  const onSignUpClick = () => {
    setDialogType(DialogTypes.USER_SIGNUP);
    openDialog();
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const onCloseClick = () => {
    setIsDialogOpen(false);
  };
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <DialogManager
        isDialogOpen={isDialogOpen}
        dialogType={dialogType}
        onCloseClick={onCloseClick}
      />
      <Button
        className={classes.loginButton}
        onClick={() => loginWithRedirect()}
        color="inherit"
      >
        Login
      </Button>
      <Button
        className={classes.loginButton}
        variant="contained"
        color="secondary"
        onClick={() => onSignUpClick()}
      >
        Sign Up
      </Button>
    </>
  );
}
