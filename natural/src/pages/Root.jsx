import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Root() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
