import { createContext, useContext } from "react";
import { useState,useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setisAuthenticated] = useState(false);

    useEffect(() => {
      const storeuser = localStorage.getItem("user")

      if(storeuser){
        setisAuthenticated(true)
      }
   
    }, [])

    const login=()=>{
        setisAuthenticated(true)
    }

    const logout =()=>{
        localStorage.removeItem("user")
        setisAuthenticated(false)
    }
    

    return(<>
    
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>


    </>)

}

export const useAuth=()=>{
    return useContext(AuthContext);
}



export default AuthContext