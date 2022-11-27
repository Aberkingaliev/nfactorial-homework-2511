import Feed from "./components/Feed";
import SideNav from "./components/SideNav";
import Suggestion from "./components/Suggestion";


function App() {
  return (
    <div className="App">
      <SideNav/>
      <Feed />
      <Suggestion />
    </div>
  );
}

export default App;
