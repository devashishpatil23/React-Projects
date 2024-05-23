import MenuList from "./MenuList";
import "./style.css" 

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-cont">
      <MenuList list={menus} />
    </div>
  );
}
