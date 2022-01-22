import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "../components/NavBar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AboutPage from "../pages/AboutPages";
import ContactPage from "../pages/ContactPages";
import DashboardPage from "../pages/DashboardPages";
import HomePage from "../pages/HomePages";
import LoginPage from "../pages/LoginPages";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPages";
import ProfilePage from "../pages/ProfilePages";
import RegisterPage from "../pages/RegisterPages";
import CategoriesRouter from "./CategoriesRouter";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact='true' path="/about" component={AboutPage} />
        <Route exact='true' path="/contact" component={ContactPage} />
        <Route exact='true' path="/" component={HomePage} />

        <Route exact='true' path="/profile/:username" component={ProfilePage} />

        <Route path="/categories" component={CategoriesRouter} />

        <Route exact='true' path="/signin">
          <Navigate to="/login" />
        </Route>

        <PublicRoute exact='true' path="/login" component={LoginPage} />
        <PublicRoute exact='true' path="/register" component={RegisterPage} />

        <PrivateRoute exact='true' path="/dashboard" component={DashboardPage} />

        <PrivateRoute exact='true' path="/payments" component={PaymentsPage} />

        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
          <Navigate to="/404" />
        </Route>
      </Routes>
    </Router>
  );
}