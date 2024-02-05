import { Navbar as BsNavbar, Container, Nav, Button } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
function Navbar() {
  const { openCart, cartQuantity } = useGlobalContext();
  return (
    <BsNavbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-0">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
        </Nav>
        <Button
          className="rounded-circle  "
          variant="outline-primary"
          style={{ position: "relative", height: "3rem", width: "3rem" }}
          onClick={openCart}
        >
          <FaCartShopping />
          <div
            className="  rounded-circle bg-danger d-flex justify-content-center align-items-center"
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
