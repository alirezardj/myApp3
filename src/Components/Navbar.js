import { Navbar as BsNavbar, Container, Nav, Button } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";

import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
function Navbar() {
  const { openCart, cartQuantity } = useGlobalContext();
  return (
    <BsNavbar sticky="top" className="navbar shadow-sm ">
      <Container>
        <Nav className="me-0">
          <Nav className="me-0">
            <Nav.Link as={Link} to="/" exact className="link-primary">
              Home
            </Nav.Link>
          </Nav>
        </Nav>
        <Button
          className="rounded-circle  "
          variant="outline-primary"
          style={{ position: "relative", height: "3rem", width: "3rem" }}
          onClick={openCart}
        >
          <FaCartShopping />
          <div
            className=" rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
