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
          className="navbar-button rounded-circle  "
          variant="outline-primary"
          onClick={openCart}
        >
          <p className="shopping-cart-icon">
            <FaCartShopping />
          </p>

          <div className="counter-icon rounded-circle bg-danger d-flex justify-content-center align-items-center">
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
