import React, { useEffect } from "react";
import NewsData from "./components/NewsData";

// adding alan ai to eract app

// we can initilize our alanBtn once the app loads and to that we can use useEffect
// useEffect is a function that happens when our app starts like componentDidMount in class based component.

const App = () => {
  return <NewsData />;
};

export default App;
