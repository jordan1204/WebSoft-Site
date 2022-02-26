import {
  HashRouter ,
  Route,
  Routes
} from "react-router-dom";
import Home from './Home/Index';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={ <Home/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
