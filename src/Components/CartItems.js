import { Stack, Button } from "react-bootstrap";
import { useGlobalContext } from "../Context";
import { FormatCurrency } from "../utilitiese/Utilitise";

function CartItems({ id, quantity }) {
  const { removeFromCart, cartItems, products, selectedItem } =
    useGlobalContext();

  const item = products.find((i) => i.id === id);
  if (!item) return null;

  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <div key={id}>
          <img src={item.image} style={{ width: "60px", height: "75px" }} />

          <div className="me-auto">
            {item.title}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".5 rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="me-auto" style={{ fontSize: ".75rem" }}>
            {FormatCurrency(item.price)}
          </div>
        </div>
        <div className="me-auto">{FormatCurrency(item.price * quantity)}</div>
        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
          &times;
        </Button>
      </Stack>
    </div>
  );
}
export default CartItems;
