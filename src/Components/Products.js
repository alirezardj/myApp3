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


