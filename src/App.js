import { useState } from "react";
import Header from "./components/Header";
import "./scss/app.scss";
import "./scss/reset.scss";
import ToDo from "./components/ToDo";
import { Slide, ToastContainer } from "react-toastify";
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div className={isDarkTheme === false ? "app light" : "app dark"}>
      <Header darkTheme={isDarkTheme} />
      <ToDo darkTheme={isDarkTheme} setTheme={setIsDarkTheme} />
      <ToastContainer autoClose={1000} transition={Slide} style={{ fontSize: "1.4rem" }} />
    </div>
  );
}
