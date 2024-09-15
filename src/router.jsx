import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./app/HomePage";
import AboutPage from "./app/AboutPage";
import ContactPage from "./app/ContactPage";
import NotFoundPage from "./app/NotFoundPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 route */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
