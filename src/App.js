import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  // const [progress, setProgress] = useState(0);
  return (
    <div>
      <Navbar />
      {/* <LoadingBar color="#f11946" progress={progress} /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              key="General"
              pageSize={pageSize}
              country="in"
              category="General"
            />
          }
        />

        <Route
          exact
          path="/Business"
          element={
            <News
              key="Business"
              pageSize={pageSize}
              country="in"
              category="Business"
            />
          }
        />

        <Route
          exact
          path="/Entertainment"
          element={
            <News
              key="Entertainment"
              pageSize={pageSize}
              country="in"
              category="Entertainment"
            />
          }
        />

        <Route
          exact
          path="/General"
          element={
            <News
              key="General"
              pageSize={pageSize}
              country="in"
              category="General"
            />
          }
        />

        <Route
          exact
          path="/Health"
          element={
            <News
              key="Health"
              pageSize={pageSize}
              country="in"
              category="Health"
            />
          }
        />

        <Route
          exact
          path="/Science"
          element={
            <News
              key="Science"
              pageSize={pageSize}
              country="in"
              category="Science"
            />
          }
        />

        <Route
          exact
          path="/Sports"
          element={
            <News
              key="Sports"
              pageSize={pageSize}
              country="in"
              category="Sports"
            />
          }
        />

        <Route
          exact
          path="/Technology"
          element={
            <News
              key="Technology"
              pageSize={pageSize}
              country="in"
              category="Technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
