import { useState } from "react";
import MenuList from "./MenuList";
export default function MenuItem({ item }) {
  const [showChidMenu, setShowChildMenu] = useState({});
  function handelToggle(getLable) {
    setShowChildMenu({ ...showChidMenu, [getLable]: !showChidMenu[getLable] });
    console.log(showChidMenu);
  }
  return (
    <li>
      <p onClick={() => handelToggle(item.label)}>
        {item.label}{" "}
        <span>
          {item.children && item.children && item.children.length ? "+" : ""}
        </span>
      </p>
      {item &&
      item.children &&
      item.children.length &&
      showChidMenu[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
