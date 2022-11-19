import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "../../theme/App.scss";

function BasicLayout() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
}

export default BasicLayout;
