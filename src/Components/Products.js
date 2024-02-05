import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "../App.css";
function Products({}) {
  const {
    products,
    selectItem,
    selectedItem,
    groupedProducts,
    selectedCategory,
    setSelectedCategory,
  } = useGlobalContext();

  // Render each category
  return (
    <Container>
      <div key={products.id} className="main">
        {/* Display a list of categories */}

        {/* Display products for the selected category or all products if "All" is selected */}

        {selectedCategory ? (
          <Link
            to="/EachProduct"
            className="link-dark  link-underline-opacity-0 "
          >
            <Row md={2} xs={1} lg={3} className="g-4 mb-2 ">
              {groupedProducts[selectedCategory].map((product) => (
                <Col>
                  <Card
                    key={product.id}
                    className=""
                    onClick={() => selectItem(product.id)}
                    style={{
                      width: "250px",
                      height: "460px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginLeft: "px",
                    }}
                  >
                    <Card.Img
                      className="mt-2"
                      style={{
                        width: "200px",
                        height: "260px",
                      }}
                      src={product.image}
                      alt={product.title}
                    />

                    <Card.Title
                      className=" d-flex flex-column justify-content-between mt-1  p-2 "
                      style={{
                        width: "250px",
                        height: "200px",
                        backgroundColor: "",
                      }}
                    >
                      <snap className="text-start ">{product.title}</snap>
                      <snap className="text-muted align-self-end ">
                        {product.price}$
                      </snap>
                    </Card.Title>

                    {/* Render other product information here */}
                  </Card>
                </Col>
              ))}
            </Row>
          </Link>
        ) : (
          <Link
            to="/EachProduct"
            className="link-dark  link-underline-opacity-0 "
          >
            <Row md={2} sm={1} lg={3} className="g-4 mb-2 ">
              {products.map((product) => (
                <Col>
                  <Card
                    key={product.id}
                    className=""
                    onClick={() => selectItem(product.id)}
                    style={{
                      width: "250px",
                      height: "460px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginLeft: "px",
                    }}
                  >
                    <Card.Img
                      className="mt-2"
                      style={{
                        width: "200px",
                        height: "260px",
                      }}
                      src={product.image}
                      alt={product.title}
                      variant="top"
                    />

                    <Card.Title
                      className=" d-flex flex-column justify-content-between mt-3 p-2 "
                      style={{
                        width: "250px",
                        height: "150px",
                      }}
                    >
                      <snap className="text-start ">{product.title}</snap>
                      <snap className="text-muted align-self-end ">
                        {product.price}$
                      </snap>
                    </Card.Title>

                    {/* Render other product information here */}
                  </Card>
                </Col>
              ))}
            </Row>
          </Link>
        )}
      </div>
    </Container>
  );
}

export default Products;

/*import React from "react";
import { useGlobalContext } from "../Context";
function Products() {
  const { products } = useGlobalContext();

  return (
    <div className="100vh bg-blue-500 flex flex-wrap gap-10 ">
      {products.map((productsInfo) => {
        const { id, title, category, image, description } = productsInfo;
        console.log(products);
        return (
          <div key={id} className="m-3">
            <img src={image} alt={title} className="w-80 h-80" />
            <h2 className="w-80">{title} </h2>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
/*import React from "react";
import { useEffect, useState } from "react";
function Products() {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>kj</div>;
}
style
export default Products; <div
            className="text-muted"
            style={{
              width: "1px",
              height: "500px",
              border: "1px solid black",
              marginRight: "px",
              marginLeft: "5px",
              marginTop: "-20px",
            }}
          ></div>*/
