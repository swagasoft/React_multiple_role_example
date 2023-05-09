import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"

export const PrivateRoute = ({children}) => {
    
   return authService.isLoggedIn() ? children : <Navigate to="/login" />
}