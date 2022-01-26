import Product from "./Components/Product/productbox";
import "./App.css";

function App() {
  return (
    <div id="App">
      <h1 id="title">Gu's pot shop :)</h1>
      <div className="container">
        <div id="about_box">
          <h1>About box</h1>
        </div>

        <div className="container_column product_box_container">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
