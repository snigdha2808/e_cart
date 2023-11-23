
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import Login from './components/Login';
import Details from './components/Details';
import { Route,Routes} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';
import HomeDetails from './components/HomeDetails';
import Home from './components/Home';
function App() {
  return (
    <> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<ProtectedRoute Component={Login}/>}/>
      <Route path='/details' element={<ProtectedRoute Component={Details}/>}/>
    </Routes>

    
    </>
  );
}

export default App;
