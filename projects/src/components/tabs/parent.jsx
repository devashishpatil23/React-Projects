import Tabs from "./tabs";
import "./tabs.css";

let SomeRandomComp = () => {
  return <h3>random component</h3>;
};

export default function TabTest() {
  const tabs = [
    { label: "Tab 1", content: "11111 tab tab tab 1111" },
    { label: "Tab 2", content: "2222 tab tab tab 2222" },
    { label: "Tab 3", content: "3333 tab tab tab 3333" },
    { label: "Tab 4", content: <SomeRandomComp /> },
  ];
  function handleOnChange(currentTab) {
    console.log(currentTab);
  }
  return <Tabs content={tabs} onChange={handleOnChange} />;
}
