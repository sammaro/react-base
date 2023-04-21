import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {

  const routerComponents = routes.map(({ path, element }, key) => <Route path={path} element={element} key={key} />);
  const routerComponentsNavLink = routes.map(({ path, title }, key) =>
    <li key={key}>
      <NavLink to={path} end className={({ isActive }) => isActive ? 'nav-active' : ''}>
        {title}
      </NavLink>
    </li>
  );

  return (
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}
