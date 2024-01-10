import Header from "./components/header";
import MainPage from "./pages/mainPage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
