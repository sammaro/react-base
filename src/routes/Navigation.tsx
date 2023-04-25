import { Suspense } from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {

  const routerComponentsNavLink = routes.map(({ path, title }) =>
    <li key={path}>
      <NavLink to={path}>
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
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routerComponentsNavLink}
            </ul>
          </nav>

          <Routes>
            {routerComponents}
            <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
