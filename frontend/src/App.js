import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignupPage from "./pages/singupPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/results" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
