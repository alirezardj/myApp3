import React from "react";
import { useGlobalContext } from "../Context";
import { Card, Button } from "react-bootstrap";
import { FormatCurrency } from "../utilitiese/Utilitise";
import { useNavigate } from "react-router-dom";

function EachProduct() {
  const {
    selectedItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    getItemQuantity,
  } = useGlobalContext();
  const navigate = useNavigate();

  // Check if selectedItem is null
  if (!selectedItem) {
    // Redirect to the home page
    navigate("/");
    return null; // Return null to prevent rendering further content
  }

  const { id, image, title, description, price } = selectedItem;
  const quantity = getItemQuantity(id);

  return (
    <div key={id}>
      <Card className="eachproduct-card m-4">
        <div className="eachproduct-flex-container d-flex">
          <Card.Img
            className="eachproducts-card-image"
            alt={image}
            src={image}
          />
          <Card.Title className="eachproduct-card-title  ">
            <span className=" fs-4">{title}</span>
            <h6 className="me-5 text-muted">
              {"    "} {FormatCurrency(price)}
            </h6>
            <p className="eachproduct-discription">{description}</p>
          </Card.Title>
        </div>
        <Card.Body className="eachproduct-card-body">
          <div>
            {quantity === 0 ? (
              <Button className="" onClick={() => increaseItemQuantity(id)}>
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

export default EachProduct;
