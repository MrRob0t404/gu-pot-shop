import Discipline from "./discipline"
import "../.././App.css";

function Product() {
  return (
    <div>
      <div id="product_box">
        <h1>Product box</h1>
        <p>pot description</p>
      </div>

      <div id="options_container" className="container">
        <Discipline />
      </div>
    </div>
  );
}

export default Product;
