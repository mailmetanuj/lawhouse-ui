import Button from "@material-ui/core/Button";
import BuyIcon from "@material-ui/icons/ShoppingCart";

export default function BuyNowButton() {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      startIcon={1 === 1 ? undefined : <BuyIcon />}
    >
      Buy now
    </Button>
  );
}
