import "./App.css";
import EachProduct from "./Components/EachProduct";
import { Routes, Route } from "react-router-dom";
//import ShoppingCart from "./Components/ShoppingCart";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import { AppProvider } from "./Context";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Container className="ms-0 p-0">
        <Row>
          <Col className="col-2">
            <SideBar />
          </Col>
          <Col className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/EachProduct" element={<EachProduct />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </AppProvider>
  );
}
export default App;
