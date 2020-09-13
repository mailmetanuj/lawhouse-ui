import { Button, Typography } from "@material-ui/core";
import MenuMD from "@material-ui/core/Menu";
import MenuItemMD from "@material-ui/core/MenuItem";
import ExpandIcon from "@material-ui/icons/ExpandMore";

export default function MenuItem(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const hasSubMenus = props.subMenus !== undefined && props.subMenus.length > 0;

  const handleClick = (event, page) => {
    console.log(page);
    if (hasSubMenus === true) {
      setAnchorEl(event.currentTarget);
    } else {
      props.navigate(page);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        variant="text"
        onClick={(event) => handleClick(event, props.navPage)}
        onMouseOver={
          hasSubMenus ? (event) => handleClick(event, props.navPage) : undefined
        }
      >
        <Typography variant="body1">{props.label}</Typography>
        {hasSubMenus && <ExpandIcon />}
      </Button>
      {hasSubMenus && (
        <MenuMD
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          {props.subMenus.map((item) => {
            return (
              <MenuItemMD key={item.label} onClick={handleClose}>
                {item.label}
              </MenuItemMD>
            );
          })}
        </MenuMD>
      )}
    </>
  );
}
