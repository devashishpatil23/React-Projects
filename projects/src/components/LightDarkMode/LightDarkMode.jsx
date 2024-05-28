import useLocalStorage from "./useLocalStorage";
import "./darkLightTheme.css";
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handelToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }
  return (
    <>
      <div className="light-dark-mode" data-theme={theme}>
        <p>Hello People!</p>
        <button onClick={() => handelToggleTheme()}>Change Theme</button>
      </div>
    </>
  );
}
