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
        <NavLink
          style={({ isActive }: { isActive: boolean }) => ({
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          })}
          to={"/verticalBarChart"}
          key={1}
        >
          verticalBarChart
        </NavLink>
        <NavLink
          style={({ isActive }: { isActive: boolean }) => ({
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          })}
          to={"/lineChart"}
          key={0}
        >
          lineChart
        </NavLink>
      </nav>
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
