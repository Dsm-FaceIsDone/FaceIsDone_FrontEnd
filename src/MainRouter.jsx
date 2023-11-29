import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignupPage from "./page/SignupPage";
import LoginPage from "./page/LoginPage";
import NotpostPage from "./page/NotPostPage";
import NotFoundPage from "./page/NotFoundPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notpost" element={<NotpostPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
