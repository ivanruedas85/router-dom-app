import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Navbar() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact='true' to="/" activateclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to="/about" activateclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to="/contact" activateclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activateclassname="active">
            Categories
          </NavLink>
        </li>
        {!auth.isLogged() && (
          <>
            <li>
              <NavLink exact='true' to="/login" activateclassname="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink exact='true' to="/register" activateclassname="active">
                Register
              </NavLink>
            </li>
          </>
        )}
        
        {auth.isLogged() && (
          <>
            <li>
              <NavLink exact='true' to="/dashboard" activateclassname="active">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink exact='true' to="/payments" activateclassname="active">
                Payments
              </NavLink>
            </li>
            <li>
              <button onClick={auth.logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}