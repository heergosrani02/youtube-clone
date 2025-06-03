import Navbar from "./components/navbar/navbar.jsx";
import HomeSection from "./components/homeSection/homeSection.jsx";
import VideoPage from "./components/videoPage/videoPage.jsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/video/:categoryId/:videoId" element={<VideoPage />} />
      </Routes>
    </>
  );
}

export default App;
