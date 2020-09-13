import Button from "@material-ui/core/Button";
import CartIcon from "@material-ui/icons/AddShoppingCart";

export default function AddToCartButton() {
  return (
    <Button
      size="small"
      variant="contained"
      color="secondary"
      startIcon={1 === 1 ? undefined : <CartIcon />}
    >
      Add to Cart
    </Button>
  );
}
