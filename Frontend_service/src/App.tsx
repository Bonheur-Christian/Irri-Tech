import Home from "./pages/Landing Pages/Home";
import Techniques from "./pages/Techniques";
import Tools from "./pages/Tools";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import SignIn from "./pages/Sign in";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/Landing Pages/AboutUs";
import Contacts from "./pages/Landing Pages/Contacts";
import Profile from "./pages/Profile";

function App() {
  function ProtectedRoute() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to={"/signIn"} />;
    }
    return <Outlet />;
  }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<AboutUs />} path="/about us" />
          <Route element={<ProtectedRoute />}>
            <Route element={<Techniques />} path="/techniques" />
            <Route element={<Tools />} path="/tools" />
            <Route element={<Profile />} path="/profile" />
          </Route>
          <Route element={<SignIn />} path="/signIn" />
          <Route element={<SignUp />} path="/signup" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
