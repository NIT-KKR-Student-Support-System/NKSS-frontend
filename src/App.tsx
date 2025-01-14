import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Announcements from "./components/Announcements";
import Home from "./components/Home";
// import Notes from "./components/Notes";
// import Sidebar from "./components/Sidebar";
// import Login from "./components/Login/Login";
import Clubs from "./components/Clubs/Clubs";
import Courses from "./components/Courses/Courses";
import ClubPage from "./components/Clubs/ClubPage";
import CoursePage from "./components/Courses/CoursePage";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div> {/* <Sidebar />{" "} */}</div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/announcements" element={<Announcements />} />
            {/* <Route path="/notes" element={<Notes />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/clubs/:id" element={<ClubPage />} />
            <Route path="/courses/:id" element={<CoursePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
