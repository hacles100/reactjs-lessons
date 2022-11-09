import { Link, Outlet } from "react-router-dom";

function Layout() {
  return  <>
      <nav>
        <Link to="/">All</Link>
        <Link to="/Images">Images</Link>
        <Link to="/Videos">Videos</Link>
      </nav>

      <Outlet /> 
    </>
}

export default Layout;
