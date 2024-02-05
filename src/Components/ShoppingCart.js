import React from "react";
import { useGlobalContext } from "../Context";
import { useState, useContext } from "react";
import CartItems from "./CartItems";
import { Offcanvas, Stack } from "react-bootstrap";
import { FormatCurrency } from "../utilitiese/Utilitise";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems, products } = useGlobalContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> shopping cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItems) => {
                const item = products.find((i) => i.id === cartItems.id);
                return total + (item?.price || 0) * cartItems.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;

/*import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import { CartItems } from "../Components/CartItems";
import { FormatCurrency } from "../Utilitise/FormatCurrency";
import storeItems from "../data/Data.json";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> shopping cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItems) => {
                const item = storeItems.find((i) => i.id === cartItems.id);
                return total + (item?.price || 0) * cartItems.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}*/
