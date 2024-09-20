import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  country = "us";
  apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "348c391b7eea48f3a278510823605e3f";
  // apiKey = "6c184186a25e4479a0146413d158fb60"

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="home" // Unique key for home
                  pageSize={this.pageSize}
                  country={this.country}
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business" // Unique key for business
                  pageSize={this.pageSize}
                  country={this.country}
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment" // Unique key for entertainment
                  pageSize={this.pageSize}
                  country={this.country}
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general" // Unique key for general
                  pageSize={this.pageSize}
                  country={this.country}
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health" // Unique key for health
                  pageSize={this.pageSize}
                  country={this.country}
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science" // Unique key for science
                  pageSize={this.pageSize}
                  country={this.country}
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports" // Unique key for sports
                  pageSize={this.pageSize}
                  country={this.country}
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology" // Unique key for technology
                  pageSize={this.pageSize}
                  country={this.country}
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}