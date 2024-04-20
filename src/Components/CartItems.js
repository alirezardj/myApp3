import { Stack, Button } from "react-bootstrap";
import { useGlobalContext } from "../Context";
import { FormatCurrency } from "../utilitiese/Utilitise";

function CartItems({ id, quantity }) {
  const { removeFromCart, products } = useGlobalContext();

  const item = products.find((i) => i.id === id);
  if (!item) return null;

  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <div key={id}>
          <img className="shoppingcart-image" src={item.image} />

          <div className=" me-auto">
            <p>{item.title} </p>
            <span style={{ fontSize: ".75rem" }}>
              {FormatCurrency(item.price)}
              {"   "}
            </span>
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".75rem" }}>
                x{quantity}
              </span>
            )}
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
