import { useState } from "react";
import data from "./data";
import "./style.css";

// only on accordian open
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [multipleOpen, setMultipleOpen] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  //   const handleMultiSelection = (getCurrentId) => {
  //     if (multipleOpen.length === 0 || !multipleOpen.includes(getCurrentId)) {
  //       setMultipleOpen((prev) => [...prev, getCurrentId]);
  //       console.log(multipleOpen);
  //     } else {
  //       setMultipleOpen((prev) => prev.filter((item) => item !== getCurrentId));
  //       console.log(multipleOpen);
  //     }
  // multipleOpen.includes(dataItem.id)
  //   };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultipleOpen = [...multipleOpen];
    const indexOfId = copyMultipleOpen.indexOf(getCurrentId);
    if (indexOfId === -1) copyMultipleOpen.push(getCurrentId);
    else copyMultipleOpen.splice(indexOfId, 1);
    setMultipleOpen(copyMultipleOpen);
  };
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => setMultipleSelect(!multipleSelect)}
          className={multipleSelect ? "active" : ""}
        >
          open multi Accordian
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className="item">
                <div
                  onClick={
                    multipleSelect
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <div className="heading-wraper">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>

                  {selected === dataItem.id ||
                  multipleOpen.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <div> No data present</div>
          )}
        </div>
      </div>
    </>
  );
}
