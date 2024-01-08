import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignupPage from "./page/auth/SignupPage";
import LoginPage from "./page/auth/LoginPage";
import NotpostPage from "./page/auth/NotPostPage";
import NotFoundPage from "./page/auth/NotFoundPage";
import MainPage from "./page/main/MainPage";
import SkeinPage from "./page/main/SkeinPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notpost" element={<NotpostPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/skeinPage" element={<SkeinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
