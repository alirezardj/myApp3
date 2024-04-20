import "./App.css";
import EachProduct from "./Components/EachProduct";
import { Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import { AppProvider } from "./Context";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { Col, Row } from "react-bootstrap";
import Products from "./Components/Products";
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
              <Route path="/" element={<Products />} />
              <Route path="/EachProduct" element={<EachProduct />} />
              <Route path="/category/*" element={<Products />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </AppProvider>
  );
}
export default App;
