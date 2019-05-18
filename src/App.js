import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    cart: [],
    term:"",
    products: [
      {
        id: 1,
        name: "皮卡丘",
        price: 100,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png"
      },
      {
        id: 2,
        name: "傑尼龜",
        price: 200,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
      },
      {
        id: 3,
        name: "六尾",
        price: 300,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/f285c634efd141918f6ad066a6f59c20746d9050.png"
      },
      {
        id: 4,
        name: "妙蛙種子",
        price: 400,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"
      },
      {
        id: 5,
        name: "小火龍",
        price: 500,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png"
      },
      {
        id: 6,
        name: "火狐狸",
        price: 600,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/466cc6aa93526c3b9038c11f1a0192e4eadc0761.png"
      },
      {
        id: 7,
        name: "卡蒂狗",
        price: 700,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/333e2aef290059dc46274b77ea4095094784316a.png"
      },
      {
        id: 8,
        name: "迷唇姐",
        price: 800,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/8838c65ba52945317cda0d31f8de760860dd71ec.png"
      },
      {
        id: 9,
        name: "鯉魚王",
        price: 900,
        quantity: 1,
        src:
          "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/3755f6d1176c7f8c64f663dae13ef9f1406d007a.png"
      }
    ]
  };

  handleIncrement = product => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(product);
    cart[index] = { ...product };
    cart[index].quantity++;
    this.setState({ cart });
  };

  handleIncrement2 = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handleDecrement = product => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(product);
    cart[index] = { ...product };
    if ( cart[index].quantity !== 1) {
      cart[index].quantity--;
      this.setState({ cart });
    }
  };
  handleDecrement2 = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    if (products[index].quantity !== 1) {
      products[index].quantity--;
      this.setState({ products });
    }
  };

  handleDelete = cartId => {
    const cart = this.state.cart.filter(item => item.id !== cartId);
    this.setState({ cart });
  };

  handleAdd = (product) => {
      const cart = this.state.cart;
      if (cart.some(item => item.id === product.id)) {
        const index = cart.findIndex(item => item.id === product.id);
        cart[index].quantity += product.quantity;
        this.setState({
          cart
        });
      } else {
        cart[cart.length] = product
        console.log(cart)
      }
      this.setState({
          cart,
        });
    
  };

  render() {
    return (
      <React.Fragment>
        <Header
          cart={this.state.cart}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          AddCart={this.handleCart}
          handleSearch={this.handleSearch}
        />
        <Products
          products={this.state.products}
          onDecrement={this.handleDecrement2}
          onIncrement={this.handleIncrement2}
          onAdd={this.handleAdd}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
