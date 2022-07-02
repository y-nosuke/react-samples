import { NavLink, Outlet } from "react-router-dom";

export function App() {
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {["verticalBarChart", "lineChart"].map((path) => (
          <NavLink
            style={({ isActive }: { isActive: boolean }) => ({
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            })}
            to={`/${path}`}
            key={path}
          >
            {path}
          </NavLink>
        ))}
      </nav>
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
