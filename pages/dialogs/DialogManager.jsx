import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import UserDialog from "../user/Login";
import SignUp from "../user/SignUp";

export const DialogTypes = {
  USER_LOGIN: 0,
  USER_SIGNUP: 1,
};

Object.freeze(DialogTypes);

function getDialog(dialogType) {
  switch (dialogType) {
    case DialogTypes.USER_LOGIN:
      return <UserDialog />;
    case DialogTypes.USER_SIGNUP:
      return <SignUp />;
  }
}

/** props - isDialogOpen, dialogType, onCloseClick */
export default class DialogManager extends React.Component {
  render() {
    const AppDialog = getDialog(this.props.dialogType);
    return (
      <Dialog open={this.props.isDialogOpen}>
        <DialogTitle>
          <IconButton
            style={{ float: "right" }}
            onClick={this.props.onCloseClick}
          >
            <CloseIcon color="secondary" />
          </IconButton>
        </DialogTitle>
        <DialogContent>{AppDialog}</DialogContent>
      </Dialog>
    );
  }
}
