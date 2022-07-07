import { BrowserRouter } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useAuthContext } from "../context/AuthContext";

export const AppRouter = () =>{

  const {auth} = useAuthContext()

    return(
        <BrowserRouter>
          {
            auth.loggedIn ? <PrivateRoutes /> : <PublicRoutes />
          }
      </BrowserRouter>
    )
} 