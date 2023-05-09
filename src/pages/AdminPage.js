
import { useEffect, useState } from "react";
import { authService } from "../services/authService";


const AdminPage = () => {
    console.log("Welcome");
    const [email, setEmail] = useState();
    const [userRole, setUserRole] = useState();


    useEffect(()=> { 
         const role = authService.getUserRole();
            setUserRole(role);
         const email = authService.getUserEmail();
            setEmail(email);

    },[]);

    return (
         <>

         <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-8">
                    <h1>  ADMIN PANEL </h1>

                <ul class="list-group">
                <li class="list-group-item">Email : {email}</li>
                <li class="list-group-item">Role : {userRole}</li>
              
                </ul>
                </div>
            </div>

            <div className="bg-light text-left p-5 font-weight-bold">
                This section is restricted for only admin
            </div>

         </div>
         
         </>
      );
}
 
export default AdminPage;