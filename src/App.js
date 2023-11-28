
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import Login from './components/Login';
import Details from './components/Details';
import { Route,Routes} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';
import CardDetails from './components/CardDetails';

import Home from './components/Home';
import Profile from './components/Profile';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<ProtectedRoute  Component={<Login/>}/>}/>
      <Route path='/details' element={<ProtectedRoute  Component={<Details/>}/>}/>
      <Route path='/cardDetails' element={<CardDetails/>}/>
      <Route path='/profile' element={<ProtectedRoute  Component={<Profile/>}/>}/>
    </Routes>

    
    </>
  );
}

export default App;
