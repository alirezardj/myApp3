import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import ShoppingCart from "./Components/ShoppingCart";

const AppContext = React.createContext();
const allProductsUrl = "https://fakestoreapi.com/products";

const AppProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemQuantity] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const fetchProducts = async (url) => {
    try {
      const { data } = await axios(url);
      setProducts(data); // Use the correct property name from the API response
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchProducts(allProductsUrl);
  }, []);

  const groupedProducts = {};
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Group products by category
  products.forEach((product) => {
    const { id, title, category, image, description, price } = product;

    if (!groupedProducts[category]) {
      groupedProducts[category] = [];
    }

    groupedProducts[category].push({ id, title, image, description, price });
  });
  const selectItem = (id) => {
    let item;
    item = products.find((item) => item.id === id);
    setSelectedItem(item || null);
  };
  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseItemQuantity(id) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseItemQuantity(id) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id) {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }
  return (
    <AppContext.Provider
      value={{
        products,
        selectedItem,
        selectItem,
        selectedItemQuantity,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems,
        openCart,
        closeCart,
        cartQuantity,
        groupedProducts,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {props.children}
      <ShoppingCart isOpen={isOpen} />
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
