import "./App.css";
// import "./assets/images";

function App() {
  return (
    <div className="App">
      <h1>My awesome shop</h1>
      <p> my amazing cookie shop</p>
      <img src={require("./assets/images/shop.jpg")} alt="shop" />
    </div>
  );
}

export default App;
