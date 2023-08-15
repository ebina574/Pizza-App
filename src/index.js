import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Magherita",
    ingredients: "Tomato and Mozarella",
    price: 10,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza-Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "10",
    photoName: "spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Marinara",
    ingredients:
      "Tomato sauce, mozzarella, garlic, chili powder, and small clams",
    price: 10,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas =[];//if there is no data

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza name={pizza.name} photoName={pizza.photoName} />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {pizzas ? (
        <>
          <p>Authentic italian cusine,Four creative pizzas to choose from.</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              // <Pizza name={pizza.name} photoName={pizza.photoName} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Pease come back later.</p>
      )}

      {/* <Pizza
        name="Pizza-Spinaci"
        ingredients="Tomato, mozarella, spinach, andc ricotta cheese"
        photoName="spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Pizza-Spinaci"
        ingredients="Tomato, mozarella, spinach, andc ricotta cheese"
        photoName="spinaci.jpg"
        price="10"
      /> */}
    </main>
  );
}

function Pizza(pizzaObj) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;
  return (
    <li>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      {/* <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 3}</span> */}
      <p>{pizzaObj.price}</p>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 13;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry We're Closed");
  //console.log(hour);

  // if (!isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome between {openHour}:00 and {closeHour}:00.
  //     </p>
  //   );

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order(closeHour, openHour) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
