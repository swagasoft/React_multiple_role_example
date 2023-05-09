import { useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate =  useNavigate();


 

    const submitForm = async(event) => {
        event.preventDefault();
        const userData = { email, password}
        const response =  await authService.login(userData);
        console.log(response?.data);
        if(response?.data?.accessToken){
            authService.setToken(response?.data?.accessToken);
            navigate('/welcome');
        }
        
      }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8">
                        <form className="mt-5" onSubmit={submitForm}>
                            <div className="form-group mt-5">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)}
                                 class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password"  value={password}  onChange={(e) => setPassword(e.target.value)}
                                class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        </>
    );
}

export default LoginPage;