import React from "react";
import { useGlobalContext } from "../Context";
import Shopping from "./Shopping";
import { Card, Button } from "react-bootstrap";
import { FormatCurrency } from "../utilitiese/Utilitise";
function EachProduct(id) {
  const {
    selectedItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    getItemQuantity,
  } = useGlobalContext();
  const quantity = getItemQuantity(selectedItem.id);
  if (!selectedItem) {
    // Handle the case where selectedItem is not available
    return null;
  }

  const { image, title, description, price } = selectedItem;
  return (
    <div key={id}>
      <Card className="m-4">
        <Card.Img
          variant="top"
          src={image}
          style={{
            height: "300px",
            width: "240px",
            margin: "10px",
          }}
        />
        <Card.Body className="">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{title}</span>
            <span className="me-5 text-muted">{FormatCurrency(price)}</span>
          </Card.Title>
          <p className="">{description}</p>
          <div className="">
            {quantity === 0 ? (
              <Button
                className=""
                onClick={() => increaseItemQuantity(selectedItem.id)}
              >
                + add to cart
              </Button>
            ) : (
              <div className="d-flex flex-column aling-items-center g-0.5">
                <div className="d-flex justify-content-center">
                  <Button onClick={() => increaseItemQuantity(selectedItem.id)}>
                    +
                  </Button>
                  <div className="ms-3 me-3">
                    <span className="fs-2 me-2">{quantity}</span>
                    in cart
                  </div>
                  <Button onClick={() => decreaseItemQuantity(selectedItem.id)}>
                    -
                  </Button>
                </div>
                <div className="d-flex  justify-content-center g-0.5">
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(selectedItem.id)}
                  >
                    remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EachProduct;

/*import React from "react";
import { useGlobalContext } from "../Context";
import { Card, Button } from "react-bootstrap";
import { FormatCurrency } from "../utilitiese/Utilitise";

function EachProduct() {
  const {
    products,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    getItemQuantity,
  } = useGlobalContext();

  const item = products.find((item) => item.id === id);
  const { id, image, title, description, price } = item || {};
  const quantity = getItemQuantity(id);

  if (!item) return null;

  return (
    <div key={id}>
      <Card className="modal-container">
        <Card.Img
          variant="top"
          src={image}
          style={{ objectFit: "cover", height: "400px", width: "360px" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{title}</span>
            <span className="me-5 text-muted">{FormatCurrency(price)}</span>
          </Card.Title>
          <p className="w-60">{description}</p>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseItemQuantity(id)}
              >
                + add to cart
              </Button>
            ) : (
              <div className="d-flex flex-column aling-items-center g-0.5">
                <div className="d-flex justify-content-center">
                  <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                  <div className="ms-3 me-3">
                    <span className="fs-2 me-2">{quantity}</span>
                    in cart
                  </div>
                  <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                </div>
                <div className="d-flex  justify-content-center g-0.5">
                  <Button variant="danger" onClick={() => removeFromCart(id)}>
                    remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EachProduct;*/
