import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import { Card, Container, Col, Row } from "react-bootstrap";

function Products() {
  const { products, selectItem, groupedProducts, selectedCategory } =
    useGlobalContext();

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
                    className="products-card"
                    key={product.id}
                    onClick={() => selectItem(product.id)}
                  >
                    <Card.Img
                      className="products-card-image mt-2"
                      src={product.image}
                      alt={product.title}
                    />

                    <Card.Title className="products-card-title d-flex flex-column justify-content-between mt-1  p-2 ">
                      <p className="product-card-title-text text-start ">
                        {product.title}
                      </p>
                      <snap className="text-muted align-self-end ">
                        {product.price}$
                      </snap>
                    </Card.Title>
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
                    className="products-card"
                    onClick={() => selectItem(product.id)}
                  >
                    <Card.Img
                      className="products-card-image mt-2"
                      src={product.image}
                      alt={product.title}
                    />

                    <Card.Title className="products-card-title d-flex flex-column justify-content-between mt-3 p-2 ">
                      <p className="product-card-title-text text-start ">
                        {product.title}
                      </p>
                      <snap className="text-muted align-self-end ">
                        {product.price}$
                      </snap>
                    </Card.Title>
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
