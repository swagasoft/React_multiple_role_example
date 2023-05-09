
import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";


const WelcomePage = () => {
    console.log("Welcome");
    const [email, setEmail] = useState();
    const [userRole, setUserRole] = useState();
    const navigate  = useNavigate();


    useEffect(()=> { 
        const role =  authService.getUserRole();
            setUserRole(role);
       
        const email =  authService.getUserEmail();
            setEmail(email);

    },[]);

    const logout = ()=> {
        authService.logOut();
        navigate('/login');
    }

    return (
         <>

         <div className="container mt-5 bg-light">
            <div className="row mt-5">
                <div className="col-8">
                    {/* <h1> {email} </h1> */}

                <ul class="list-group">
                <li class="list-group-item">Email : {email}</li>
                <li class="list-group-item">Role : {userRole}</li>
              
                </ul>
                <div className="bg-light">
                {(userRole === 'ADMIN') && 
                <button onClick={()=> navigate('/admin-page')}>
                ADMIN PANEL
            </button>
                }
                    <div className="mt-5 text-center">
                    <button className="btn btn-danger" onClick={()=> logout()}>
                        logout
                    </button>

                    </div>
                 

                </div>
                </div>
            </div>



         </div>
         
         </>
      );
}
 
export default WelcomePage;