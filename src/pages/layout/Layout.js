import { Outlet } from "react-router";
import { Link } from "react-router-dom";


function Layout() {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )


}

export default Layout;