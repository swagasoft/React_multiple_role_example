import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import { PrivateRoute } from './routes/PrivateRoute';
import AdminPage from './pages/AdminPage';
import { AdminPrivateRoute } from './routes/AdminRoute';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={
    <LoginPage /> 
    }>

    </Route>
    <Route path='/welcome' element={
    
    <PrivateRoute>
      <WelcomePage /> 
    </PrivateRoute>
    }>
    </Route>

    <Route path='/admin-page' element={
    
    <AdminPrivateRoute>
      <AdminPage /> 
    </AdminPrivateRoute>
    }>
    </Route>

    <Route path='/*' element={<LoginPage /> }>

    </Route>


   </Routes>
   
   </>
  );
}

export default App;
