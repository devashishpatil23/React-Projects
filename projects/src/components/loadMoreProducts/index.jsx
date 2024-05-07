import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    setLoading(true);
    try {
      const resp = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await resp.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts(() => [...products, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Data is loading, Please wait</div>;
  }
  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt="item.title" />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={products.length === 100 ? true : false}
          onClick={() => setCount(count + 1)}
        >
          Load More Items
        </button>
      </div>
    </div>
  );
}
