import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        // different cases for the dispatch actions
        case 'LOGIN':
            return { ...state, user: action.payload }

        default:
            return state;
    }
}

const initialState = {
    user: null
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    console.log(`AuthContext state: `, state );

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )

}

