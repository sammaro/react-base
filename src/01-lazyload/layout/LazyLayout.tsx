import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes/LazyLayoutRoutes";

export const LazyLayout = () => {

  const routerComponentsNavLink = routes.map(({ path, title, to }) =>
    <li key={path}>
      <NavLink to={to}>
        {title}
      </NavLink>
    </li>
  );

  const routerComponents = routes.map(({ path, element: Component }) =>
    <Route
      key={path}
      path={path}
      element={<Component />} />
  );

  return (
    <div>
      <h1>
        LazyLayout Page
      </h1>

      <ul>
        {routerComponentsNavLink}
      </ul>

      <Routes>
        {routerComponents}
        <Route path="/*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  )
}

export default LazyLayout;