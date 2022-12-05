import "./styles.css";
import React from "react";
const regex = /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/;

export default function App() {
  const [number, setNumber] = React.useState(10);
  const handleKeyPress = (e) => {
    const keyCode = e.keycode ? e.keyCode : e.which;
    const value = e.target.value.replace(/,/g, "");

    // if (Number(value) > 100) {
    //   e.preventDefault();
    // }
    if (keyCode >= 48 && keyCode <= 57) {
      return true;
    }
    e.preventDefault();
  };

  const handleKeyUp = (e) => {
    const regNumberComma = new RegExp("[0-9]+(,[0-9]+)*");
    const value = e.target.value.replace(/,/g, "");
    if (!regNumberComma.test(value)) {
      e.target.value = "";
      return;
    }
    if (!value) return;
    e.target.value = (+value).toLocaleString("ja-JP");
  };
  return (
    <div className="App">
      <input type="text" onKeyPress={handleKeyPress} onKeyUp={handleKeyUp} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
