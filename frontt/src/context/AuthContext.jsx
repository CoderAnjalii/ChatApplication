import { createContext , useContext ,useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export  const useAuth =()=>{
    return useContext(AuthContext)
}

// eslint-disable-next-line react/prop-types
export const AuthContextProvider =({children})=>{
    const [authUser , setAuthUser] = useState(JSON.parse(localStorage.getItem('chatapp')) || null);

    return <AuthContext.Provider value={{authUser ,setAuthUser}}>
        {children}
    </AuthContext.Provider>
}