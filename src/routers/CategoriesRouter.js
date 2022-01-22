import {
  Link,
  NavLink,
  Routes,
  Route,
  Navigate,
  useMatch,
} from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPages";
import PrivateRoute from "./PrivateRoute";

export default function CategoriesRouter() {
  const { url } = useMatch();

  return (
    <div>
      <ul>
        <li>
          <NavLink exact='true' to={`${url}`} activateclassname="active">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/terror`} activateclassname="active">
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/action`} activateclassname="active">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/anime`} activateclassname="active">
            Anime
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route exact='true' path="/categories" component={CategoriesPage} />
        <PrivateRoute path="/categories/terror" component={TerrorRouter} />

        <Route exact='true' path="/categories/action">
          <h1>Category Action</h1>
        </Route>
        <Route exact='true' path="/categories/anime">
          <h1>Category Anime</h1>
        </Route>

        <Route path="*">
          <Navigate to="/404" />
        </Route>
      </Routes>
    </div>
  );
}

function TerrorRouter() {
  const { url } = useMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to="/categories/terror">All</Link>
        </li>
        <li>
          <Link to="/categories/terror/gore">Gore</Link>
        </li>
        <li>
          <Link to="/categories/terror/suspense">Suspense</Link>
        </li>
      </ul>
      <Routes>
        <Route exact='true' path={`${url}`}>
          <h3>Category Terror</h3>
        </Route>
        <Route exact='true' path={`${url}/gore`}>
          <h3>Gore</h3>
        </Route>
        <Route exact='true' path={`${url}/suspense`}>
          <h3>Suspense</h3>
        </Route>
        <Route path="*">
          <Navigate to="/404" />
        </Route>
      </Routes>
    </div>
  );
}
