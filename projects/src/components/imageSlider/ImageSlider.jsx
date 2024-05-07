import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
export default function ImageSlider({ url }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    setLoading(true);
    try {
      const resp = await fetch(getUrl);
      const data = await resp.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  const handelPrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handelNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  if (loading) {
    return <div>Loading data, Please wait !!!</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occured {errorMsg}</div>;
  }
  console.log(images);
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handelPrev} className="arrow left" />
      <div className="img-container">
        {images && images.length
          ? images.map((item, i) => (
              <img
                key={item.id}
                className={currentSlide === i ? "active" : ""}
                alt="images"
                src={item.download_url}
              />
            ))
          : null}
      </div>
      <BsArrowRightCircleFill onClick={handelNext} className="arrow right" />

      <span className="circles">
        {images && images.length
          ? images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={
                  currentSlide === i
                    ? "current-circle active"
                    : "current-circle"
                }
              />
            ))
          : null}
      </span>
    </div>
  );
}
