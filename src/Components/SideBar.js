import React from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { useState } from "react";
function SideBar() {
  const { groupedProducts, selectedCategory, setSelectedCategory } =
    useGlobalContext();

  return (
    <div
      className="bg-white shadow-sm"
      style={{
        width: "100px",
        height: "100%",
        marginTop: "-15px",
      }}
    >
      <Nav className="ms-0">
        {" "}
        <Nav.Link to={"/"} as={NavLink}>
          <ul
            className="  position-fixed "
            style={{
              listStyleType: "none",
              marginLeft: "-50px",
            }}
          >
            {/* Button to show all categories */}

            <li key="all">
              <Button
                className="text-start btn-link text-dark"
                variant="outline"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
            </li>

            {/* Display buttons for each category */}
            {Object.keys(groupedProducts).map((category) => (
              <li key={category}>
                <Button
                  className="text-start btn-link text-dark "
                  variant="outline"
                  style={{ width: "25px" }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              </li>
            ))}
          </ul>
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBar;
