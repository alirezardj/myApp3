import React from "react";
import { useGlobalContext } from "../Context";
import { Col, Row } from "react-bootstrap";
import Products from "../Components/Products";

function Home() {
  const { products } = useGlobalContext();

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default Home;
