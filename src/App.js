import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const country = "us";
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "348c391b7eea48f3a278510823605e3f";
  // apiKey = "619671bd3efd424fa32bf01cf6efaaee";
  // apiKey = "6c184186a25e4479a0146413d158fb60 "

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="home" // Unique key for home
                pageSize={pageSize}
                country={country}
                category="general"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business" // Unique key for business
                pageSize={pageSize}
                country={country}
                category="business"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment" // Unique key for entertainment
                pageSize={pageSize}
                country={country}
                category="entertainment"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general" // Unique key for general
                pageSize={pageSize}
                country={country}
                category="general"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health" // Unique key for health
                pageSize={pageSize}
                country={country}
                category="health"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science" // Unique key for science
                pageSize={pageSize}
                country={country}
                category="science"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports" // Unique key for sports
                pageSize={pageSize}
                country={country}
                category="sports"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology" // Unique key for technology
                pageSize={pageSize}
                country={country}
                category="technology"
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
