import "./App.css";
import SidebarRight from "./Components/SidebarRight/SidebarRignt";
import Feed from "./Components/Feed/Feed";
import SidebarLeft from "./Components/SidebarLeft/SidebarLeft";
import Login from "./Components/Login/Login";
import { useStateValue } from "./ContextData/StateProvider";
function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <div className="app__body">
            <SidebarLeft />
            <Feed />
            <SidebarRight />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
