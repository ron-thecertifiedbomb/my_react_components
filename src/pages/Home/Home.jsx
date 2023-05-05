import React, {useState} from "react";
// import PaginationApp from "../../components/Pagination/Pagination";
// import SearchBar from "../../components/SearchBar/SearchBar";
import Accordion from "../../components/Accordion/Accordion";
import "./Home.css";

const Home = () => {

  const [query, SetQuery] = useState("")

  return (
    <div className="home-container">


      <Accordion />
      {/* <div className="search_bar_wrapper">
        <SearchBar onQuery ={SetQuery}/> 
      </div>
      <div className="pagination-container">
        <PaginationApp query={query}/>
      </div> */}

      
    </div>
  );
};

export default Home;
