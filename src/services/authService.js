
 import axiosInstance from "../axios/axiosInstance";
 import jwt_decode  from 'jwt-decode';
 


 const setToken = (token) => {
        localStorage.setItem('token' ,token);
 };


 const getToken = ()=> {
    const token = localStorage.getItem('token');
    if(token){
        return token;
    }
    return null;
 }



 const login = (userData) => {
    return axiosInstance.post("/login", userData);
 }


 const getUserEmail = () => {
    const token = getToken();
    if(token){
        const payLoad = jwt_decode(token);
        return payLoad?.email;
    }
    return null;
 }

 const getUserRole = () => {
    const token = getToken();
    if(token){
        const payLoad = jwt_decode(token);
        return payLoad?.role;
    }
    return null;
 }

 const isLoggedIn = () => {
    const token = getToken();
    if(token){
        const payLoad = jwt_decode(token);
        const isLogin = Date.now() < payLoad.exp * 1000;
        return isLogin;

    }
 }

 const logOut = ()=> {
    localStorage.clear();
 }


 export  const authService = { logOut, getToken, setToken, login, getUserEmail, getUserRole, isLoggedIn};