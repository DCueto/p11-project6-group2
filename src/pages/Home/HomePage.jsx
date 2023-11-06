import "./HomePage.css";
import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog/Catalog";
import Hero from "./../../components/Hero";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import ConstructorAPI from "../../../ConstructorAPI";

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDoingSearch, setIsDoingSearch] = useState(false);

  const homePath = "browse/new-releases?country=US&limit=30";

  useEffect(() => {
    const api = new ConstructorAPI(homePath);
    api
      .fetchData()
      .then((data) => {
        setHomeData(data.albums.items);
      })
      .catch()
      .finally(setIsLoading(false));
  }, []);

  function handleHeaderStates(state) {
    setIsDoingSearch(state);
  }

  function handleHeaderData(data) {
    setSearchResults(data);
  }

  return (
    <>
      <Header
        sendData={handleHeaderData}
        sendIsDoingSearch={handleHeaderStates}
      />
      {!isDoingSearch && !isLoading ? (
        <main className="cont-general">
          <Hero />
          <Catalog fetchData={homeData} />
        </main>
      ) : isDoingSearch && !isLoading ? (
        <main className="content">
          <h1>Results</h1>
          <Catalog fetchData={searchResults} />
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
}
