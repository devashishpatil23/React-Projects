import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-cont">
      {list && list.length
        ? list.map((listItem, i) => <MenuItem key={i} item={listItem} />)
        : null}
    </ul>
  );
}
