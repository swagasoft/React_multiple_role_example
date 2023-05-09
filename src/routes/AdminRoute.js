import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"

export const AdminPrivateRoute = ({children}) => {
    
   return (authService.getUserRole() === 'ADMIN') ? children : <Navigate to="/login" />
}