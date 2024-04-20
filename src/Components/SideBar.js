import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";

function SideBar() {
  const { groupedProducts, setSelectedCategory } = useGlobalContext();

  return (
    <div className="sidebar shadow-sm ">
      <Nav className="flex-column">
        {/* NavLink to show all categories */}
        <Nav.Item>
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </NavLink>
        </Nav.Item>

        {/* Display NavLink for each category */}
        {Object.keys(groupedProducts).map((category) => (
          <Nav.Item key={category}>
            <NavLink
              to={`/category/${category}`}
              className="nav-link"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default SideBar;
