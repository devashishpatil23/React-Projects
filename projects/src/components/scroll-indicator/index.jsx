import { useEffect, useState } from "react";
import "./scroll.css";
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const resp = await fetch(getUrl);
      const data = await resp.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message)
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handelScrollPercentages() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handelScrollPercentages);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (errorMsg) {
    return <div>Error ! {errorMsg}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }
  return (
    <div className="scroll-main">
      <div className="top-bar">
        <span
          className="scroll-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></span>
      </div>
      <br></br>
      <h1>Scroll Indicator</h1>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
