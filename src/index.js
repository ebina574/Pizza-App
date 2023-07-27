import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <Pizza
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
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry We're Closed");
  //console.log(hour);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
