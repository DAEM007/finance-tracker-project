// react imports
import { useContext } from "react";
// context imports
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useContext must be inside AuthContextProvider');
    }

    return context;
}