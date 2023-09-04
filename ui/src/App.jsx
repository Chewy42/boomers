import './App.css';
import {
  BrowserRouter as Router,
  //Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthContext';

import Homepage from './Components/Homepage';
import UploadTranscript from './Components/UploadTranscript';

function App() {

  // FOR AUTHENTICATION AND PUBLIC/PRIVATE ROUTES
  const { isAuthenticated } = useContext(AuthContext);

  // const PublicRoute = ({ element }) => {
  //   return !isAuthenticated ? element : <Navigate to="/dashboard" replace />;
  // };

  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/signin" replace />;
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadTranscript />} />
        {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
