import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

// function component with custom routing
function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/courses") return <CoursesPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
