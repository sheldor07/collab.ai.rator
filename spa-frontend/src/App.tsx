import "./App.css";
import { Route, Routes } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import AIHelpBot from "./components/AIHelpContainer";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Blog1 from "./pages/blog1";
import Question from "./pages/question";
import Sources from "./pages/sources";
import Introduce from "./pages/introduce";
import Collate from "./pages/collate";
import Ideate from "./pages/ideate";
import Conclude from "./pages/conclude";
function App() {
  return (
    <div className="App">
      {/* Add the constant components outside the Routes */}
      <VerticalNavbar />

      {/* Use the Routes component to handle routing */}
      <Routes>
        {/* Route for the Home component */}
        <Route path="/" element={<Home />} />

        {/* Route for the Signup component */}
        <Route path="/signup" element={<Signup />} />

        {/* Nest the routes for the constant components */}
        <Route path="/home">
          <Route path="empathize" element={<Blog1 />} />
          <Route path="question" element={<Question />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="sources" element={<Sources />} />
          <Route path="collate" element={<Collate />} />
          <Route path="Ideate" element={<Ideate />} />
          <Route path="Conclude" element={<Conclude />} />
        </Route>
      </Routes>

      {/* Add the constant components outside the Routes */}
      <AIHelpBot />
    </div>
  );
}

export default App;
