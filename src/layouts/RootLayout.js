import {Outlet, NavLink} from "react-router-dom";

export default function RootLayout() {

  return (

    <div className="root-layout">
      <header>
        <nav>
          <h1>Pedro Martinez</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
  
      <main>
        <Outlet />
      </main>
  
    </div>
  )
}