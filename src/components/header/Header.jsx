import "./Header.css";
import logo from "../../img/logo-frontify.svg";
import SearchInput from "./SearchInput";
import { useState } from "react";
import ConstructorAPI from "../../../ConstructorAPI";

export default function Header({ sendData, sendIsDoingSearch }) {
  const [inputValue, setInputValue] = useState(null);

  function handleSearch(e) {
    if (e.key == "Enter") {
      search();
    } else if (e.type == "click") {
      search();
    }
  }
  function handleInputValue(input) {
    setInputValue(input.target.value.toLowerCase());
    if (input.target.value.trim() == "") {
      sendIsDoingSearch(false);
    }
  }

  async function search() {
    sendIsDoingSearch(true);
    const searchPath =
      "search?q=" + inputValue + "&type=album";
    const api = new ConstructorAPI(searchPath);
    api
      .fetchData()
      .then((data) => {
        sendData(data.albums.items);
      })
      .catch((error) => console.log(error));
  }

  return (
    <header className="tools">
      <img className="logo" src={logo} alt="logo" />
      <SearchInput
        handleInputSearch={handleInputValue}
        handleSearch={handleSearch}
      />
    </header>
  );
}
